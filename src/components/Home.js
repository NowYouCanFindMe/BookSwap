/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,  
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Button, FooterTab, Icon} from 'native-base';

class Home extends Component {

    constructor() {
        super()

        this.navigate = this.navigate.bind(this)
    }

    navigate(name){
        this.props.navigator.push({
            name
        })
    }




  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Homepage
        </Text>
        
        <Button onPress={() => this.navigate ('aboutPage')}>Go to about  Page </Button>


      </View>
    );
  }
}

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
