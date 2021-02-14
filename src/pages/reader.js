import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';

const {height} = Dimensions.get('window');
const Reader = () => {
  const marginHeader = 50;
  const heigthWebView = height - marginHeader;
  return (
    <SafeAreaView>
      <View style={{height: heigthWebView, marginTop: marginHeader}}>
        <WebView
          source={{
            uri:
              'https://www.nytimes.com/2021/02/13/us/politics/trump-impeachment.html?action=click&module=Spotlight&pgtype=Homepage',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reader;
