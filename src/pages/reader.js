import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';

const {height} = Dimensions.get('window');
const Reader = () => {
  const {url} = useRoute().params;
  const marginHeader = 50;
  const heigthWebView = height - marginHeader;
  return (
    <SafeAreaView>
      <View style={{height: heigthWebView, marginTop: marginHeader}}>
        <WebView
          source={{
            uri: url,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reader;
