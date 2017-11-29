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

export default class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
     email: '',
     name: '',
     password: '',
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
            
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder="name"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
           
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

           />
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
            <TextInput
            
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
           
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

           />
         
           <TouchableOpacity style ={styles.buttonContainer} >
             
               <Text style={styles.buttonText}>Submit</Text>
        
           </TouchableOpacity>

    </View>
         );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor: '#4682B4',
        flex:1
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
        // backgroundColor: '#2980b9',
        backgroundColor: '#1FB18A',
        paddingVertical: 15,
  
       
        margin: 0
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 40,
        fontSize: 30,
        color: 'white'
    },
    logo: {
        width:200,
        height: 200
    },
});

module.export = Register; 