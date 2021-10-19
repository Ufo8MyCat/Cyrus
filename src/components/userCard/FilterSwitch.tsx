import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SortingTypes } from '../../contstans/FilterData'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../store/actions'
import { Colors } from '../../contstans/Styles';
import { useTheme } from '../../Context/ThemeContext';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    sortButton: {
        height: 20,
        width: 60,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const FilterSwitch = () => {
    const dispatch = useDispatch()
    const { colors } = useTheme()
    const [pressedButton, setPressedButton] = React.useState(0)
    const {list} = useSelector((state: any) => state.userReducer)
    const buttonPressed = (filter: string, index:number): void => {
        dispatch(setFilter(filter, list))
        setPressedButton(index)
    }

    return (
        <View style={styles.container}>
            {SortingTypes.map((item, index) => {
                const isPressed = pressedButton === index
                return <TouchableOpacity
                    onPress={() => buttonPressed(item, index)}
                    key={index}
                    style={[styles.sortButton, isPressed && {backgroundColor:Colors.Grey}]}>
                    <Text style={{color:colors.text}}>
                        {item}
                    </Text>
                </TouchableOpacity>
            })}
        </View>
    )
}

