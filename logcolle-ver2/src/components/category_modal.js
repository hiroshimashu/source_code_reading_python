import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Dimensions, Picker} from 'react-native';
import { Icon, Card } from "react-native-elements";
import Modal from 'react-native-modal'

export default class CategoryModal extends Component {
  state = {
    isModalVisible: false,
    text: "カテゴリを選択"
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    const { width, height, scale } = Dimensions.get("window");
    return (
      <View style={{marginTop: 22}}>
        <TouchableOpacity onPress={this._showModal}>
         <View style = {{borderWidth: 1,
                        flexDirection:"row",
                        borderRadius: 25
               }}>
           <Icon name = "folder"
           />
           <Text style = {{justifyContent:"center"}}>{this.state.text}</Text>
         </View>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}
               style={{ justifyContent: 'flex-end',
                        marginBottom: 40,
                        width: width,
                      }}
               backdropOpacity={0}
        >
         <Card>
          <Text style = {{ textAlign: "right",
                           fontWeight: 'bold',
                         }}
                onPress = {this._hideModal}
          >{"完了"}
          </Text>
          <Picker
               style = {{ marginTop:0}}
               onValueChange={(itemValue, itemIndex) => { 
                 this.setState({text: itemValue}); 
                 this.props.onhandleCategory(itemValue); }
               }
          >
            {this.props.category.map((l, i) => (
                <Picker.Item label = {l.name} value = {l.name} />
             ))
            }
          </Picker>
         </Card>
        </Modal>
      </View>
    )
  }

}
