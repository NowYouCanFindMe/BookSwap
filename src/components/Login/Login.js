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
import firebase from 'firebase';
import {Signup} from './Signup';
import Forgot from './Forgot';
import Home from './Home';
// import Home from './Home'

class LoginPage extends Component {

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDBvpUmSwV5-vKIsnks3Hb50rkVIk3XM0E",
        authDomain: "bookswap-82a77.firebaseapp.com",
        databaseURL: "https://bookswap-82a77.firebaseio.com",
        projectId: "bookswap-82a77",
        storageBucket: "bookswap-82a77.appspot.com"
    };
    firebase.initializeApp(config);
  }
 
  constructor(props) {
    super(props);
    this.state = {
     email: 'robertmwaniki@hotmail.com',
     password: 'password',
     error: ''
   };
   this.onLoginPress= this.onLoginPress.bind(this);
  }

  onLoginPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        //fat arrow function
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then(() => { alert('Successful login') })
        //     .catch(() => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => { 
                Actions.home();
            
            }).catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { alert("Successfully Created new account") })
                    .catch(() => {
                       alert('There was a problem') 
                    });
         });
   }
//keep track of this 
//     goToSignup(){
//     this.props.navigator.push({
//       component: Signup
//     });
//   }

  render() {
    return (
   
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
            onSubmitEditing={ () => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

           />
          <TextInput
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            onSubmitEditing={ () => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter your password"
            style={styles.input}
            ref={(input) => this.passwordInput = input}

           />
           <TouchableOpacity style ={styles.buttonContainer} onPress={this.onLoginPress}>
             
               <Text style={styles.buttonText}>LogIn</Text>
        
           </TouchableOpacity>

           <TouchableOpacity
                onPress={() => Actions.signup()} 
                style ={styles.buttonContainer} >
               <Text
                style={styles.buttonText}>SignUp</Text>
       
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => Actions.forgot()} 
                style ={styles.buttonContainer} >
            <Text
            style={styles.buttonText}>Forgot Password</Text>
        
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

// const styles = {
//     errorTextStyle: {
//       color: '#E64A19',
//       alignSelf: 'center',
//       paddingTop: 10,
//       paddingBottom: 10
//     },
//     loginView: {
//       margin: 20,
//       height: 40,
//       backgroundColor:'#E64A19',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     loginText: {
//       color: '#fff',
//     },
//     title: {
//       alignSelf: 'center',
//       margin: 40,
//       fontSize: 20,
//     }
// };


export default LoginPage;