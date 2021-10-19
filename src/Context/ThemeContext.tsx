import * as React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {lightColors, darkColors} from './colorTheme';

type Props = {
    children: any
}

export const ThemeContext = React.createContext({
    isDark: false,
    colors: lightColors,
    setScheme: (color: string) => {},
});

export const ThemeProvider = (props: Props) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = React.useState(colorScheme === "dark");


    React.useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);

    const defaultTheme: any = {
        isDark,
        colors: isDark ? darkColors : lightColors,  
        setScheme: (scheme: string) => setIsDark(scheme === "dark"),
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);