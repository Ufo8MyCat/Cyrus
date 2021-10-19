import * as React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Text } from 'react-native';
import { Colors, Styles, Window } from '../../contstans/Styles';
import { getUserData, getUserQuestions } from '../../enteties';
import { TextField } from './TextField';
import { FilterSwitch } from '../userCard/FilterSwitch'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch } from 'react-redux'
import { setList, setTotalQuestion } from '../../store/actions'
import { useTheme } from '../../Context/ThemeContext';

type TextRef = {
    current?: {
        clear: () => void
    }
}

const styles = StyleSheet.create({
    cardBorders: {
        marginBottom: 20,
        backgroundColor: Colors.Cream,
        height: 230,
        width: Window.width - 40,
        alignItems: 'center',
    },
    textInputContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Window.width - 80,
    },
    profileImage: {
        height: 100,
        width: 100
    },
    filterContainer: {
        flex: 1,
        width: Window.width - 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userInfo: {
        justifyContent: 'space-between',
        height: 80
    }
})

const Card = () => {
    const { colors } = useTheme()
    const dispatch = useDispatch()
    const [reputation, setReputation] = React.useState<string | number>('Reputation')
    const [profileImg, setProfileImg] = React.useState<string | null>(null)
    const [diplayName, setDisplayName] = React.useState<string>('Display Name')
    const [acceptRate, setAcceptRate] = React.useState<string | number>('Accept Rate')
    const textRef: TextRef = React.useRef()

    const setInitialState = () => {
        setProfileImg(null)
        setReputation('Reputation')
        setDisplayName('Display Name')
        setAcceptRate('Accept Rate')
        dispatch(setList([]))
        dispatch(setTotalQuestion(0))
    }

    const clearData = () => {
        textRef.current?.clear()
        setInitialState()
    }

    const getData = async (id: string) => {
        try {
            const [
                questions,
                userData
            ] = await Promise.all([
                getUserQuestions(id),
                getUserData(id)
            ])

            const {
                profile_image,
                reputation,
                display_name,
                accept_rate
            } = userData!.data.items[0]

            setProfileImg(profile_image)
            setReputation(reputation)
            setDisplayName(display_name)
            setAcceptRate(accept_rate)
            dispatch(setList(questions.data.items))
            dispatch(setTotalQuestion(questions.data.items.length))
        } catch (error) {
            setInitialState()
        }
    }

    return (
        <View style={[styles.cardBorders, {backgroundColor:colors.background}]}>
            <View style={styles.textInputContainer}>
                <TextField
                    isNumber
                    clearPress={clearData}
                    forwordRef={textRef}
                    onChangeText={(value) => getData(value)}
                    placeholder={"user id"} />
            </View>
            <View style={styles.userInfoContainer}>
                {profileImg ?
                    <Image
                        style={styles.profileImage}
                        source={{ uri: profileImg }} /> :
                    <Ionicons
                        name={'person-circle'}
                        size={100}
                        color={Colors.Grey}
                    />
                }
                <View style={styles.userInfo}>
                    <Text style={{color:colors.text}}>{diplayName}</Text>
                    <Text style={{color:colors.text}}>{reputation}</Text>
                    <Text style={{color:colors.text}}>{acceptRate}</Text>
                </View>
            </View>
            <View style={styles.filterContainer}>
                <Text style={{color:colors.text}}>{"Questions:"}</Text>
                <FilterSwitch />
            </View>
        </View>
    )
}

export default Card