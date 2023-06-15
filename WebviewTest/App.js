import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
  return (
    <WebView
      source={{ uri: 'https://www.naver.com' }}
    />
  );
};

export default MyWebView;
