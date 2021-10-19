import { StyleSheet, Dimensions, LayoutAnimation } from 'react-native';

type RawStyles = {
    flex1: object
    flex1Centered: object
}

const rawStyles: RawStyles = {
    flex1Centered: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    flex1: {
        flex: 1,
    }
}

const colors = {
    White: "white",
    Cream: 'rgb(255,254,234)',
    Grey: 'grey',
    Black: 'black'
}

export const Styles = StyleSheet.create(rawStyles);
export const Window = Dimensions.get('window')
export const Colors = colors
export const runLayoutAnimation = () =>
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);