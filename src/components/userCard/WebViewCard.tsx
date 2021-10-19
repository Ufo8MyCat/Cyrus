
import * as React from 'react';
import WebView from 'react-native-webview';

type Props = {
    url: string
}

export const WebViewCard = (props: Props) => {


    return (
        <WebView
            automaticallyAdjustContentInsets={false}
            startInLoadingState
            javaScriptEnabled
            domStorageEnabled
            decelerationRate="normal"
            source={{ uri: props.url }}
        />
    )
}