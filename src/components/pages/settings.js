import React, {Component} from 'react';
import {Text} from 'react-native';
import { Container, Header, Content, List, 
        ListItem, Icon, Left, Body, Right, Switch } from 'native-base';


export default class Settings extends Component {
    constructor() {
        super();
    }
render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem icon>
                <Left>
                <Icon name="key"
                 />
                </Left>
                <Body>
                <Text>Notify Me</Text>
                </Body>
                <Right>
                <Switch value={false} />
                </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Locate Me</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text> Update phone</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon
                >
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
    }
}

module.export = Settings; 