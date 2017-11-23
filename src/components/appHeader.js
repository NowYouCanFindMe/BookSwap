import React, {Component} from 'react';
import { Image, Text} from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';




export default class AppHeader extends Component  {

    


    render() {
        return (
            <Header>
                <Body>
            <Image source={require('../img/bookstore.png')}
            style={{width: 400,height: 200}}/>
            
                </Body>
            </Header>
        );
    }
}
module.export = AppHeader;