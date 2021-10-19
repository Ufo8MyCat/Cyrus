import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../Context/ThemeContext';
import { Window } from '../../contstans/Styles';

type Props = {
    children: string
}

const styles = StyleSheet.create({
    container: {
        height:50, 
        width:Window.width, 
        marginBottom:50, 
        justifyContent:'center', 
        alignItems:'center'
    }
})

export const BottomInfo = (props: Props) => {
    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <Text style={{color:colors.text}}>
                {props.children}
            </Text>
        </View>
    )
}