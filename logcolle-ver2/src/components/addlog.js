import React, { Component } from "react";
import { View, Animated, PanResponder, Text, TextInput, Picker, WebView} from "react-native";
import { SearchBar, Button, Card} from "react-native-elements";
import { Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import DatePicker from 'react-native-datepicker'
import CategoryModal from "./category_modal";
import WebSearch from "./webView";
import { NewLog } from "../actions"; 
import { ViewDetail } from "../actions"; 




class AddLog extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "タイトル",
                   date: new Date(),
                   category: "", 
                   content: "",
                   isWebView: false, 
                   confirm: false 
                 }
  }

  componentWillUnMount() {
    this.stateInitialize() 
  }

  handleCategory = (value) => { 
    this.setState({category: value}); 
  }

  stateInitialize = () => { 
    this.setState({text: "タイトル",
                   date: new Date(),
                   category: "", 
                   content: "",
                   isWebView: false, 
                   confirm: false })
  }

  render() {
    console.log(this.props.log); 
    console.log(this.state.text);
    const { width, height, scale } = Dimensions.get("window");
    const { textStyle, viewStyle } = styles;

    return (
      <View>
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
        <CategoryModal category = {this.props.category} onhandleCategory = {this.handleCategory} />
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
        { !this.state.confirm && 
             <Button
               large
               title = "確認"　
               onPress = {() => {this.setState({confirm: true})}}
             />
        } 
        { this.state.confirm && 
            <View> 
             <Button
               large
               title = "修正する"　
               onPress = {() => {this.setState({confirm: false})}}
             /> 
             <Button 
               large
               title = "登録する"　
               onPress = {() => {
                this.props.NewLog(this.state.text, this.state.category, this.state.date, this.state.content); 
                this.props.ViewDetail(this.state.category)
                this.stateInitialize();
                this.props.navigation.navigate("CategoryDetailScreen")
                this.props.navigation.navigate("Home")
               }} 
             /> 
            </View> 
        }  
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
    category: state.newCategory, 
    log:state.newLog
  };
}

export default connect(mapStateToProps, { NewLog, ViewDetail })(AddLog);
