import React, { Component } from 'react';
import { WebView, View, Dimensions } from 'react-native';

class WebSearch extends Component {
  render() {
    const { width, height, scale } = Dimensions.get("window");

    return (
    <View>
      <WebView
        source={{uri: 'https://www.google.com'}}
        style={{
                flex: 1,
                width: width,
                height: height
              }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onError = {console.log("error has occured")}
        renderError = {console.log("renderError")}
      />
     </View>
    )
  }
}

export default WebSearch;
