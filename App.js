import React, { Component } from 'react';
import { Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import Landing from './src/Landing';
import Login from './src/Login';
import CreateAccount from './src/CreateAccount';
import OptionScreen from './src/OptionScreen';
import MediaList from './src/MediaList';
import PrePayFees from './src/PrePayFees';
import PreSubsidy from './src/PreSubsidy';
import PreAppointment from './src/PreAppointment';
import SubsidyForm from './src/SubsidyForm';
import YTApp from './src/YTApp';

export default class App extends React.Component {

  //Set our opening screen to the welcome screen
  state = {
    currentScreen: "YTApp"
  }

  //Create a state for switching our screens
  switchScreen = (currentScreen) => {
    this.setState({currentScreen});
  }
  
  //calling our rendered components based on the state
  renderScreen = () => {
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "login"){
      return(
        <Login/>
      )
    }
    else if(this.state.currentScreen === "createAccount"){
      return(
        <CreateAccount/>
      )
    }
    else if(this.state.currentScreen === "optionScreen"){
      return(
        <OptionScreen/>
      )
    }
    else if(this.state.currentScreen === "mediaList"){
      return(
        <MediaList/>
      )
    }
    else if(this.state.currentScreen === "prePayFees"){
      return(
        <PrePayFees/>
      )
    }
    else if(this.state.currentScreen === "preSubsidy"){
      return(
        <PreSubsidy/>
      )
    }
    else if(this.state.currentScreen === "preAppointment"){
      return(
        <PreAppointment/>
      )
    }
    else if(this.state.currentScreen === "subsidyForm"){
      return(
        <SubsidyForm/>
      )
    }
    else if(this.state.currentScreen === "YTApp"){
      return(
        <YTApp/>
      )
    }
  }

   //rendering our components for the main screen
  render(){
    return(
      <View style ={styles.container}>
      {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}