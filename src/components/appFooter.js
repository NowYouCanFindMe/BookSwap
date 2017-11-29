import React, {Component} from 'react';
import {Text} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button active onPress={Actions.feed}>
                        <Icon name="egg"/>
                        <Text>Books</Text>
                    </Button>
                    <Button active onPress={Actions.marketplace} active>
                        <Icon name="paper"/>
                        <Text >MarketPlace</Text >
                    </Button>
                    <Button active onPress={Actions.about} >
                        <Icon active name="person"/>
                        <Text >About</Text >
                    </Button>
                     <Button active onPress={Actions.settings}>
                        <Icon name="settings"/>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
module.export = AppFooter;