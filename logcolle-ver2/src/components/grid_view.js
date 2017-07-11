import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";
import { SearchBar, Button, Card} from "react-native-elements";
import { Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { ViewDetail } from "../actions"; 

class GridView extends Component {
    
  
  render() {
   return (

     <View>
       <View style ={{flexDirection:"column"}}>
          <SearchBar
           lightTheme
           containerStyle = {{backgroundColor: "white",
                              marginTop: 20,
                              borderTopColor: "transparent",
                              borderBottomColor: 'transparent',
                              width: 300
                            }}
           placeholder = "Search"
           clearIcon
          />
         <View style = {{flexDirection: "row"}}>
           <View style = {{flexDirection: "column", marginTop: 10}}>
             {this.props.category.length === 0 &&
               <Button buttonStyle = {{height: 235,
                                       width: 200,
                                     }}
                     icon = {{type: "material-community",
                             name:"plus",
                             size: 30
                             }}
                     backgroundColor = {"#C0C0C0"}
                     containerViewStyle ={{marginBottom: 5}}
                     onPress = {() => {this.props.navigation.navigate("CategoryScreen")}} 
              />  
             }
             {this.props.category[0] &&
               <Button buttonStyle = {{height: 235,
                                       width: 200,
                                     }}
                     title = {this.props.category[0].name}
                     backgroundColor = {this.props.category[0].color}
                     containerViewStyle ={{marginBottom: 5}}
                     onPress ={() => 　
                        {　console.log("button1 is fired", this.props.navigation.state)
                          this.props.navigation.navigate("CategoyrDetailScreen")
                        }
                     }   
                />
             }
            {this.props.category.length < 2 &&
               <Button buttonStyle = {{height: 115,
                                         width: 200,

                                        }}
                       icon = {{type: "material-community",
                               name:"plus",
                               size: 30
                               }}
                       backgroundColor = {"#C0C0C0"}
                       containerViewStyle ={{marginBottom: 5}}
                       onPress = {() => {this.props.navigation.navigate("CategoryScreen")}}
               />
            }
            {this.props.category[1] &&
             <Button buttonStyle = {{height: 115,
                                       width: 200,

                                      }}
                     title = {this.props.category[1].name}
                     backgroundColor = {this.props.category[1].color}
                     containerViewStyle ={{marginBottom: 5,}} 
                     onPress = {() => {this.props.navigation.navigate("CategoyrDetailScreen")}}
             />
            }
          </View>
          <View style = {{flexDirection: "column",
                             marginLeft: 0,
                             marginTop: 10
                           }}>
              <Button buttonStyle = {{height: 140,
                                       width: 155,
  　　　　　　　　　　　　　　　　　　　　　　
                                      }}
                     icon = {{type: "material-community",
                             name:"plus",
                             size: 30
                             }}
                     backgroundColor = {"#C0C0C0"}
                     containerViewStyle ={{marginBottom: 5}}
              />
              <Button buttonStyle = {{height: 125,
                                       width: 155,

                                      }}
                     icon = {{type: "material-community",
                             name:"plus",
                             size: 30
                             }}
                     backgroundColor = {"#C0C0C0"}
                     containerViewStyle = {{marginBottom: 5}}
             />
             <Button buttonStyle = {{height: 80,
                                      width: 155,

                                     }}
                    icon = {{type: "material-community",
                            name:"plus",
                            size: 30
                            }}
                    backgroundColor = {"#C0C0C0"}
            />
            </View>
          </View>
        </View>
        <View style = {{flexDirection: "row", marginTop: 10}}>
            <Button buttonStyle = {{height: 100,
                                      width: 100,

                                     }}
                    icon = {{type: "material-community",
                            name:"plus",
                            size: 30
                            }}
                    backgroundColor = {"#C0C0C0"}
                    containerViewStyle ={{marginBottom: 5}}
            />
            <Button buttonStyle = {{height: 100,
                                      width: 140,

                                     }}
                    icon = {{type: "material-community",
                            name:"plus",
                            size: 30
                            }}
                    backgroundColor = {"#C0C0C0"}
                    containerViewStyle ={{marginBottom: 5}}
            />
            <Button buttonStyle = {{height: 100,
                                      width: 110,

                                     }}
                    icon = {{type: "material-community",
                            name:"plus",
                            size: 30
                            }}
                    backgroundColor = {"#C0C0C0"}
                    containerViewStyle ={{marginBottom: 5}}
            />
        </View>

     </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.newCategory
  };
}


export default connect(mapStateToProps, { ViewDetail })(GridView);
