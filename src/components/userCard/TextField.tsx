import * as React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Colors, Window } from '../../contstans/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
    placeholder: string,
    forwordRef: any
    onChangeText: (value: string) => void
    clearPress: () => void
    isNumber?: boolean
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: Colors.Grey,
        width: Window.width - 80,
    }
})

export const TextField = (props: Props) => {
    const [value, setValue] = React.useState('')

    return (
        <View style={styles.container}>
            <TextInput
                keyboardType={props.isNumber ? 'numeric': 'default'}
                returnKeyType={'done'}
                onSubmitEditing={() => props.onChangeText(value)}
                ref={props.forwordRef}
                onChangeText={(value)=> setValue(value)}
                placeholder={props.placeholder}
            />
            <TouchableOpacity onPress={props.clearPress}>
                <Ionicons
                    name={'close-circle'}
                    size={20}
                    color={Colors.Grey}
                />
            </TouchableOpacity>

        </View>

    )
}