'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTab } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'

// Icon
import { Icon } from "react-native-elements";


const mapStateToProps = (state) => {
 return {
  navigationState: state.home
 }
}

class HomeTabNavigation extends React.Component {
  static navigationOptions = {
    title: "ホーム",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name = "home" size = {30} color = {tintColor} />
      }
  };


  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorTab
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(HomeTabNavigation); 