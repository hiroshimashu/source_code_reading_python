// import libraries
import React from "react";
import { Text, View } from "react-native";


//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style = {viewStyle}>
      <Text style = {textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#f5f5dc",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
     fontSize: 20
  }
};
// make the component available to other components
export { Header };
