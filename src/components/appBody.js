import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Header, Content, Icon,
         Item, Card, CardItem, Body, Input, Button} from 'native-base';


export default class AppBody extends Component {
    render() {
        return (
        <Container>
            <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
            </Header>
      

            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                Welcome to BookSwap
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container> 
        );
    }
}

module.export = AppBody;