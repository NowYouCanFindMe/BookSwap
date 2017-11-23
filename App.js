/**
 * Book Swap App
 */

import React, {Component} from 'react';
import {Text, AppRegistry, View} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import getTheme from './src/themes/components';
import nineLessons from './src/themes/variables/nineLessons';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';

import Feed from './src/components/pages/feed';
import About from './src/components/pages/about';
import MarketPlace from './src/components/pages/marketplace';
import Settings from './src/components/pages/settings';

import {Router, Scene} from 'react-native-router-flux';

export default class MyProject extends Component {
render() {
return (
   <StyleProvider style = {getTheme(nineLessons)} >
     <Container>
        {/*<AppHeader />
        <AppBody />*/}

        <Router>

          <Scene key="root">
            <Scene key="feed" component={AppBody} title="Feed"/>
            <Scene key="about" component={About} title="About" />
            <Scene key="marketplace" component={MarketPlace} title="Market" />
            <Scene key="settings" component={Settings} title="Settings" />
          </Scene> 

        </Router>
        <AppFooter />
      </Container>
   </StyleProvider >
);
}
}

AppRegistry.registerComponent('MyProject', () => MyProject);