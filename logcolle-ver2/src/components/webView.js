import React, { Component } from 'react';
import { WebView, View, Dimensions, TouchableHighlight} from 'react-native';

class WebSearch extends Component {
  constructor(props) {
    super(props);
    this.webView = null;
  }

  onMessage(event) {
    console.log("on message", event.nativeEvent.data)
  }

  render() {
    const { width, height, scale } = Dimensions.get("window");


    return (
    <View style = {{marginTop: 0, flex:1}}>
       <WebView
        source = {{
          uri: "https://www.google.co.jp/imghp?hl=ja"
        }}
        style={{
                flex:1,
                width: width,
                height: 200,
               }}
        ref = {(webView) => this.webView = webView}
        startInLoadingState={true}
        onMessage={this.onMessage}
        />
    </View>

    )
  }
}

export default WebSearch;
