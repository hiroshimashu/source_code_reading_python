import React, { Component } from "react";
import { View, TextInput, Text, FlatList } from "react-native";
import { List, ListItem, Icon, Card, Button } from "react-native-elements";
import { EnterNewCategory } from "../actions";
import { connect } from "react-redux";


const list = [
  {
    name: 'Amy Farha'
  },
  {
    name: 'Chris Jackson'

  },
  {
    name: 'Chris Jackson'
  },
  {
    name: 'Chris Jackson'
  },
  {
    name: 'Chris Jackson'
  },
  {
    name: 'Chris Jackson'
  },
  {
    name: 'Chris Jackson'
  },
  {
    name: 'Chris Jackson'
  },
  {
    name: 'Chris Jackson'
  },
]
　




class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"新しいカテゴリ名",
      isCategory: true,
      isColorParret: false,
      CategoryName: null,
      color: null
    }
  }

  onEnterNewCategoryName = () => {
    this.setState({isCategory: false, isColorParret: true})
  }

  onEnterNewColor = (color) => {
    this.setState((previousState, currentProps) => {
      return { ...previousState, isColorParret: false, color: color}
    });
    this.props.EnterNewCategory(this.state.CategoryName, color);
  }

  render() {

    let isCategory = this.state.isCategory;
    let isColorParret = this.state.isColorParret;
    let textInput = null;
    let colorParret = null;

    if(isCategory) {
      textInput =
        <TextInput
         style={{height: 40,
                 width: 250,
                 borderColor: 'gray',
                 borderWidth: 1,
                 position: "absolute",
                 zIndex: 2
               }}
         onChangeText={(text) => this.setState({CategoryName: text})}
         placeholder={this.state.text}
         backgroundColor = {"transparent"}
         onSubmitEditing = {this.onEnterNewCategoryName}
         clearTextOnForcus = {true}
       />
    }

    if(isColorParret){
      colorParret =
      <Card containerStyle = {{zIndex:2,
                               position: "absolute"
                             }}
      >
        <Text>カテゴリに使う色</Text>
        <View style = {{flexDirection: "row"}}>
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#d11141"
            onPress = {() => {
              this.onEnterNewColor("#d11141");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#00b159"
            onPress = {() => {
              this.onEnterNewColor("#00b159");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#00aedb"
            onPress = {() => {
              this.onEnterNewColor("#00aedb");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#f37735"
            onPress = {() => {
              this.onEnterNewColor("#f37735");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#ffc425"
            onPress = {() => {
              this.onEnterNewColor("#ffc425");
            }}
          />
        </View>

        <View style = {{flexDirection: "row"}}>
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#e1f7d5"
            onPress = {() => {
              this.onEnterNewColor("#e1f7d5");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#ffbdbd"
            onPress = {() => {
              this.onEnterNewColor("#ffbdbd");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#c9c9ff"
            onPress = {() => {
              this.onEnterNewColor("#c9c9ff");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#f1cbff"
            onPress = {() => {
              this.onEnterNewColor("#f1cbff");
            }}
          />
          <Button
            buttonStyle = {{height:10, width: 10}}
            backgroundColor = "#7bc043"
            onPress = {() => {
              this.onEnterNewColor("#7bc043");
            }}
          />
        </View>
     </Card>
    }


    return (
     <View style = {{zIndex:1}}>
        <List　containerStyle = {{marginTop: 0,  backgroundColor:"white"}}>
            {textInput}
            {colorParret}
            <FlatList
              data = {this.props.category}
              renderItem = {({ item }) => {
               return (
                 <ListItem
                   title = {item.name}
                   key = {item.name}
                   subtitle = {`${item.numTitle} title`}
                   leftIcon = {{name: "folder", type: "material-community", color: item.color }}
                 />
               )
             }}
            />
        </List>
     </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.newCategory
  };
}

export default connect(mapStateToProps, {EnterNewCategory})(CategoryList);
