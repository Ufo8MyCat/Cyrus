import * as React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { Title } from '../components/Title';
import { BottomInfo } from '../components/userCard/BottomInfo';
import Card from '../components/userCard/Card';
import { Details } from '../components/userCard/Details'
import { Window } from '../contstans/Styles';
import { useSelector } from 'react-redux'
import { getStuck, totalQ } from '../contstans/Sentences';
import { CustomeSwitch } from '../components/CustomeSwitch';
import { useTheme } from '../Context/ThemeContext';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: Window.width,
        height: Window.height
    }
})

export const MainScreen = () => {
    const { totlaQuestion, list } = useSelector((state: any) => state.userReducer)

    const { setScheme, isDark, colors } = useTheme()

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <View style={[styles.container, {backgroundColor:colors.background}]}>
            <CustomeSwitch
                value={isDark}
                onValueChange={toggleScheme} />
            <Title text={getStuck} />
            <Card />
            <Details list={list} />
            {totlaQuestion !== 0 && <BottomInfo>
                {totalQ.replace('{q}', totlaQuestion)}
            </BottomInfo>}
        </View>
    )
}



