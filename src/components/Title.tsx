import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../Context/ThemeContext';
import {Styles} from '../contstans/Styles'

type Props = {
    text: string,
    customeStyle?: object
}

const styles = StyleSheet.create({
    defaultText: {
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    container: {
       height:40,
       justifyContent:'center',
       alignItems:'center' 
    }
})


export const Title = (props: Props) => {
    const style = props.customeStyle ? props.customeStyle : styles.defaultText
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <Text style={[style, {color:colors.text}]}>
                {props.text}
            </Text>
        </View>
    )
}