import React, { Component } from "react";
import { View, TextInput, Text, FlatList, Dimensions } from "react-native";
import { List, ListItem, Icon, Card, Button, Divider } from "react-native-elements";
import { EnterNewCategory } from "../actions";
import { connect } from "react-redux"; 

class CategoryDetail extends Component {


 render() {    
    if(this.props.log.length > 0) { 
      this.props.log.map( l => console.log(l.logcategory, typeof(l.logcategory), typeof(this.props.dispatched), l.logcategory == this.props.dispatched))
　    let filtered = this.props.log.filter( l => 
        l.logcategory == this.props.dispatched)
      console.log(filtered);
    } 
    

    let sampleArray = ["tahiti", "travel", "good", "monday"];
    const {height, width} = Dimensions.get('window');
  
    return ( 
    <View> 
       <View style = {{flexDirection: "row", marginTop: 40}}> 
        <View  key = "rank" style = {{ width: 100, height: 30, backgroundColor: "#00b159", marginLeft: 40, marginRight: 80}}>
          <Text style = {{textAlign: "center"}}>ランキング順</Text> 
        </View> 
        <View key = "update" style = {{ width: 100, height: 30, backgroundColor: "#00b159"}}>
          <Text style = {{textAlign: "center"}}>更新日順</Text> 
        </View> 
      </View>  
      <View style = {{marginLeft:-14}}> 
        {sampleArray.map((l,i) => ( 
          <Card key = {i} containerStyle = {{width: width,  height:40, borderWidth: 0.5, marginTop:0}} > 
            <Text style = {{ textAlign: "center"}}>Hello</Text> 
            <Divider style={{ height: 1, backgroundColor: 'blue' }} />  
          </Card> 
          ))
        }
      </View> 
     </View>   
    ) 
  }
}

const mapStateToProps = state => {
  return {
    category: state.newCategory, 
    log:state.newLog, 
    dispatched: state.viewDetail
  };
} 

export default connect(mapStateToProps)(CategoryDetail);  
