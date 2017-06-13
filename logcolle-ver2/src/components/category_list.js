import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { List, ListItem, Icon } from "react-native-elements";
import { EnterNewCategoryName } from "../actions";
import { connect } from "react-redux";
import ColorParret  from "./colorParret";

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
      isColorParret: false
    }
  }

  onEnterNewCategoryName(text) {
    this.setState({isCategory: false, isColorParret: true})
    this.props.EnterNewCategoryName(text);
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
         onChangeText={(text) => this.setState({text})}
         placeholder={this.state.text}
         backgroundColor = {"transparent"}
         onSubmitEditing = {this.onEnterNewCategoryName.bind(this)}
         clearTextOnForcus = {true}
       />
    }

    if(isColorParret){
      colorParret = <ColorParret />
    }
    return (
     <View style = {{zIndex:1}}>
        <List　containerStyle = {{marginTop: 0}}>
            {textInput}
            {colorParret}
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  height = {60}
                  hideChevron = {true}
                />
               ))
             }
        </List>

     </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    CategoryName: state.CategoryName,
  };
}

export default connect(mapStateToProps, {EnterNewCategoryName})(CategoryList);
