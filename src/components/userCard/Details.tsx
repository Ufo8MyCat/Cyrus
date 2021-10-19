import * as React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../Context/ThemeContext';
import { Colors, runLayoutAnimation, Window } from '../../contstans/Styles';
import { WebViewCard } from './WebViewCard'


type QuestionData = {
    title: string,
    view_count: number,
    link: string
}

type Item = {
    index: number,
    item: QuestionData
}

type Props = {
    list: Array<any>
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.Grey,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    itemDescription: {
        width: Window.width - 100,
    },
    shevronContainer: {
        width: 50,
        alignItems: 'center'
    },
    webViewContainer: { 
        height: 300, 
        width: Window.width - 60, 
        marginTop: 20 
    }
})

export const Details = (props: Props) => {
    const [indexOfOpenedQuestion, setIndexOfOpenedQuestion] = React.useState(-1)
    const { colors } = useTheme()
    const questionPressed = (index: number) => {
        runLayoutAnimation()
        if (indexOfOpenedQuestion === index) {
            setIndexOfOpenedQuestion(-1)
        } else {
            setIndexOfOpenedQuestion(index)
        }
    }


    const renderItem = ({ item, index }: Item) => {
        const isOpen = indexOfOpenedQuestion === index
        return <View
            style={[styles.itemContainer, isOpen && { height: 400}]}
            key={index}>
            <View style={styles.itemDescription}>
                <Text style={{color:colors.text}} lineBreakMode={'tail'} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={{color:colors.text}}>
                    {item.view_count}
                </Text>
                {isOpen && <View style={styles.webViewContainer}>
                    <WebViewCard url={item.link} />
                </View>}
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => questionPressed(index)}
                style={styles.shevronContainer}>
                <Ionicons
                    name={isOpen ? 'chevron-down-sharp' : 'chevron-forward-sharp'}
                    size={20}
                    color={Colors.Grey}
                />
            </TouchableOpacity>
        </View>
    }

    const keyExtractor = React.useCallback((item, index) => `item-list-${index}`, []);

    return (
        <FlatList
            data={props.list}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            showsVerticalScrollIndicator={false}
        />
    )
}