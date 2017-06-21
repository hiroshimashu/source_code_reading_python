import React, { Component } from 'react';
import { WebView, View, Dimensions } from 'react-native';

class WebSearch extends Component {
  render() {
    const { width, height, scale } = Dimensions.get("window");

    return (
    <View style = {{marginTop: 0, flex:1}}>
      <WebView
        source={{uri: 'https://www.google.co.jp/imghp?hl=ja'}}
        style={{
                flex:1,
                width: width,
                height: 200,
               }}
        startInLoadingState={true}
        onError = {console.log("error has occured")}
        renderError = {console.log("renderError")}
      />
     </View>
    )
  }
}

export default WebSearch;
