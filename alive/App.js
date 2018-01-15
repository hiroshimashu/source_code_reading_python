import React from 'react';
import { StyleSheet, Text, View, Picker, Button  } from 'react-native';
import { Constants } from 'expo';


const Kinds = ['幸せ', '誇り', '安心', '感謝', '希望', '驚き', '怒り', 'イライラ', '悲しみ', '恥', '罪', '不安/恐怖'];




export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feel0: 'Good',
            feel1:'Good',
            feel2: 'Good',
            press0: false,
            feelArea0: true,
            press1: false,
            feelArea1: true,
            press2: false,
            feelArea2: true
        }

        this.showPicker0 = this.showPicker0.bind(this);
        this.hidePicker0 = this.hidePicker0.bind(this);
        this.showPicker1 = this.showPicker1.bind(this);
        this.hidePicker1 = this.hidePicker1.bind(this);
        this.showPicker2 = this.showPicker2.bind(this);
        this.hidePicker2 = this.hidePicker2.bind(this);
    }

    showPicker0() {
        this.setState(() => {
          return {
              press0: true,
              feelArea0: false
          }
        })
    }

    hidePicker0() {
        this.setState(() => {
          return {
              press0: false,
              feelArea0: true
          }
        })
    }

    showPicker1() {
        this.setState(() => {
            return {
                press1: true,
                feelArea1: false
            }
        })
    }

    hidePicker1() {
        this.setState(() => {
            return {
                press1: false,
                feelArea1: true
            }
        })
    }

    showPicker2() {
        this.setState(() => {
            return {
                press2: true,
                feelArea2: false
            }
        })
    }

    hidePicker2() {
        this.setState(() => {
            return {
                press2: false,
                feelArea2: true
            }
        })
    }



  render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.choiceWrapper}>
            <Text>
                幸せ
            </Text>
            <Button
                title = "Choose"
                onPress= {this.showPicker0}
            />
            {this.state.press0 &&
            <Picker
                style={{width: 100, marginLeft:100}}
                selectedValue={this.state.feel0}
                onValueChange={(feeling) => {
                    this.setState({feel0: feeling})
                    this.hidePicker0();
                }}
            >
                <Picker.item label='Good' value='Good'/>
                <Picker.item label='OK' value='OK'/>
                <Picker.item label='Lack' value='Lack'/>
            </Picker>
            }
            {this.state.feelArea0 && <Text>{this.state.feel0}</Text>}
            </View>

            <View style = {styles.choiceWrapper}>
            <Text>
                誇り
            </Text>
            <Button
                title = "Choose"
                onPress= {this.showPicker1}
            />
            {this.state.press1 &&
            <Picker
                style={{width: 100, marginLeft:100}}
                selectedValue={this.state.feel1}
                onValueChange={(feeling) => {
                    this.setState({feel1: feeling})
                    this.hidePicker1();
                }}
            >
                <Picker.item label='Good' value='Good'/>
                <Picker.item label='OK' value='OK'/>
                <Picker.item label='Lack' value='Lack'/>
            </Picker>
            }
            {this.state.feelArea1 && <Text>{this.state.feel1}</Text>}
            </View>

            <View style = {styles.choiceWrapper}>
            <Text>
                安心
            </Text>
            <Button
                title = "Choose"
                onPress= {this.showPicker2}
            />
            {this.state.press2 &&
            <Picker
                style={{width: 100, marginLeft:100}}
                selectedValue={this.state.feel2}
                onValueChange={(feeling) => {
                    this.setState({feel2: feeling})
                    this.hidePicker2();
                }}
            >
                <Picker.item label='Good' value='Good'/>
                <Picker.item label='OK' value='OK'/>
                <Picker.item label='Lack' value='Lack'/>
            </Picker>
            }
            {this.state.feelArea2 && <Text>{this.state.feel2}</Text>}
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 12,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    choiceWrapper: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
