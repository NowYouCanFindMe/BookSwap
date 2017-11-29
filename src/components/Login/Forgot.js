import React, { Component } from 'react';
import { 
    AppRegistry,
    View, 
    Button, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    Spinner,
    StyleSheet,
    Image
 } from 'react-native';

import {Router, Scene} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux'; // New code
export default class Forgot extends Component {
    constructor(props) {
    super(props);
    this.state = {
     email: '',
    
     error: ''
   };
  
  }

    render(){
        return(
            <View style = {styles.container}>
           <Text style={styles.title} >BookSwap</Text>
        <View style={styles.logoContainer}>
                  
           <Image 
                style={styles.logo}
                source={require('../../img/bslogo.png')} 
                    />
        </View>
           <TextInput
            
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder="email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
           
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

           />
         
           <TouchableOpacity style ={styles.buttonContainer} >
             
               <Text style={styles.buttonText}>LogIn</Text>
        
           </TouchableOpacity>

    </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor: '#4682B4',
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    title: {
        alignSelf: 'center',
        margin: 40,
        fontSize: 20,
    },
    logo: {
        width:100,
        height: 100
    },
});

module.export = Forgot; 