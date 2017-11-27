import React, { Component } from 'react';
//components
import { StyleSheet, View, Image, TextInput, Text, KeyboardAvoidingView} from 'react-native';


export default class Main extends Component {
    render() {
        return (
            <Container>
                <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('')} 
                            />
                </View>
                
                <View>
            
                        <Text style={styles.subtitle}> Made and produced by Aggie Students</Text>
                </View> 
            </Container>
                 
        
        );
    }  
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width:100,
        height: 100
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 10,
        width: 160,
        textAlign: 'center'
    },
    title2: {
        color: '#ecf0f1',
        fontSize: 21,
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    subtitle: {
        color: 'white',
        fontWeight: '100',
        fontSize: 10,
        paddingBottom: 20
    },
   
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer:{
        
    }

    
});