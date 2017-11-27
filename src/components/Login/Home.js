import React, {Component} from 'react';
import {Text, AppRegistry, View} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import getTheme from '../../themes/components';
import nineLessons from '../../themes/variables/nineLessons';

//Navigation pages
import Feed from '../pages/feed';
import About from '../pages/about';
import MarketPlace from '../pages/marketplace';
import Settings from '../pages/settings';

//components
import AppHeader from '../appHeader';
import AppFooter from '../appFooter';
import AppBody from '../appBody';


import {Router, Scene} from 'react-native-router-flux';


export default class Home extends Component {
    componentWillMount(){
       
    }

    constructor() {
        super();
    }

    render(){
        return(
            <StyleProvider style = {getTheme(nineLessons)} >
     <Container>
        <AppHeader />
        <AppBody />

       
        <AppFooter />
      </Container>
   </StyleProvider >
         );
    }
}

module.export = Home; 