import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default class Splash extends Component {
    render() {
        return (
            //wrap text elements inside of a view
            <View style={styles.wrapper}>
            
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>BookSwap App</Text>
                </View>
                
                <View>
                     <Text style={styles.subtitle}> Powered by React Native </Text>
                </View>
            </View>
        );
    }
}

//object to store styles
//mimic class names
//Style Props
const styles = StyleSheet.create({
    wrapper: {
     backgroundColor: '#2ecc71', 
     flex: 1, 
     justifyContent: 'center', 
     alignItems: 'center' 
    },

    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2ecc71'
    },
   
});