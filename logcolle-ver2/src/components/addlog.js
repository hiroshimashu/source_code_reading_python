import React, { Component } from "react";
import { View, Animated, PanResponder, Text, TextInput, Picker, WebView} from "react-native";
import { SearchBar, Button, Card} from "react-native-elements";
import { Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import DatePicker from 'react-native-datepicker'
import CategoryModal from "./category_modal";
import WebSearch from "./webView";




class AddLog extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "タイトル",
                   date: new Date(),
                   content: "",
                   isWebView: false
                 }
  }

  render() {

    const { width, height, scale } = Dimensions.get("window");
    const { textStyle, viewStyle } = styles;

    return (
      <View>
        <View style = {viewStyle}>
          <Text style = {textStyle}>{"ログ追加"}</Text>
        </View>
        <Button  containerViewStyle = {{
                   marginLeft: 0,
                   marginRight: 0,
                }}
                 buttonStyle = {{height: 150,
                                width: width,
                              }}
                 icon = {{type: "material-community",
                          name:"plus",
                          size: 45
                          }}
                 backgroundColor = {"#C0C0C0"}
                 onPress ={this.props.onWeb}
        />
        <TextInput
         style={{height: 40,
                 width: 250,
                 borderColor: 'gray',
                 borderWidth: 1,
                 position: "relative",
                 zIndex: 2
               }}
         onChangeText={(text) => this.setState({text: text})}
         placeholder={this.state.text}
         backgroundColor = {"transparent"}
         clearTextOnForcus = {true}
       />
        <DatePicker
              style={{width: 200, marginTop: 20}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon = {false}
              onDateChange={(date) => {this.setState({date: date})}}
        />
        <CategoryModal category = {this.props.category}/>
        <TextInput
         style={{height: 100,
                 width: 250,
                 borderColor: 'gray',
                 borderWidth: 1,
                 position: "relative",
                 zIndex: 2
               }}
         onChangeText={(text) => this.setState({content: text})}
         placeholder={this.state.content}
         backgroundColor = {"transparent"}
         clearTextOnForcus = {true}
       />
       <Button
         large
         title = "確認"　
       />
      </View>

   )
 }
}

const styles = {
  viewStyle: {
    backgroundColor: "#f5f5dc",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
     fontSize: 20,
  }
};

const mapStateToProps = state => {
  return {
    category: state.newCategory
  };
}

export default connect(mapStateToProps, null)(AddLog);
