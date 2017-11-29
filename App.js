/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry, 
  AsyncStorage
} from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';

import firebase from 'firebase';
import Splash from './Splash.js';
//Login pages 
import Login from './src/components/Login/Login';
import Register from './src/components/Login/Register';
import Forgot from './src/components/Login/Forgot';
import Signup from './src/components/Login/Signup';
import Home from './src/components/Login/Home';


import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';

import Feed from './src/components/pages/feed';
import About from './src/components/pages/about';
import MarketPlace from './src/components/pages/marketplace';
import Settings from './src/components/pages/settings';
import Purchase from './src/components/pages/purchase';

import Confirmation from './src/components/pages/confirmation';

import PropTypes from 'prop-types';


export default class App extends Component<{}> {
renderScene(route, navigator){
  return <route.component navigator={navigator} />
}




  render(){

    return (
     <Router>

          <Scene key="root">
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="signup" component={Signup} title="Signup" />
            <Scene key="forgot" component={Forgot} title="Forgot" />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="home" component={Home} title="Home" 
              hideNavBar={true}
              type={ActionConst.RESET}
              duration={0}
          
            
            
            />
            <Scene key="feed" component={Feed} title="Books"/>
            <Scene key="about" component={About} title="About" />
            <Scene key="marketplace" component={MarketPlace} title="Market" />
            <Scene key="settings" component={Settings} title="Settings" />
            <Scene key="purchase" component={Purchase} title="Purchase" />
            
            <Scene key="confirmation" component={Confirmation} title="Confirmation" />
            
          </Scene> 

        </Router>
     
     
      // if(this.state.component){
    //   return (
    //     <Navigator
    //       initialRoute={{component: this.state.component}}
    //       configureScene={() => {
    //         return Navigator.SceneConfigs.FloatFromRight;
    //       }}
    //       renderScene={(route, navigator) => {
    //         if(route.component){
    //           return React.createElement(route.component, { navigator });
    //         }
    //       }}
    //     />
    //   );
    // }else{
    //   return (
    //     <View style={styles.container}>
    //       <Login />
    //     </View>
    //   );
    // }
    )
  }

}

AppRegistry.registerComponent('App', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
