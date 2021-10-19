import * as React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { useTheme } from '../Context/ThemeContext';
import { Window } from '../contstans/Styles';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        height: 40,
        width: Window.width,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
})

type Props = {
    value: boolean
    onValueChange: () => void
}

export const CustomeSwitch = (props: Props) => {
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <Switch
                value={props.value}
                onValueChange={props.onValueChange} />
            <Text style={{ color: colors.text }}>
                {`${props.value ? "Dark" : "Light"} mode`}
            </Text>
        </View>
    )
}