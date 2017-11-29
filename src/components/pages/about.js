import React, {Component} from 'react';
import { StyleSheet, Container, Header, Content, Card, CardItem, 
    Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Image} from 'react-native';

export default class About extends Component {
    constructor() {
        super();
    }

    render(){
        return(
            <Content>
                      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/faces/p5.jpg')} />
                <Body>
                  <Text>Java</Text>
                  <Text note>Robert Mwaniki</Text>
                </Body>
              </Left>
            </CardItem>
            <Body>
            <CardItem cardBody>
              <Image source={require('../../img/ncat.png')} 
                style={{height: 200, width: 200,
                }}/>
            </CardItem>
            </Body>
            
            <CardItem>
              <Left>
                 
                <Text> Major </Text>
              </Left>
              <Body>
                <Button transparent>
                 
                  <Text>Computer Engineering</Text>
                </Button>
              </Body>
            
            </CardItem>
            <CardItem>
                <Left><Text> Phone Number</Text></Left>
                  <Body>
                <Button transparent>
                 
                  <Text>1 (919) 123-1234</Text>
                </Button>
              </Body>
            </CardItem>

            <CardItem>
                <Left><Text> Location</Text></Left>
                  <Body>
                <Button transparent>
               
                  <Text>Greensboro</Text>
                </Button>
              </Body>
            </CardItem>

           <CardItem>
               <Left></Left>
               <Body>
                <Button transparent >
                  
                  <Text>Edit Password</Text>
                </Button>
                </Body>
                <Right></Right>
      
            </CardItem>

               <CardItem>
               <Left></Left>
               <Body>
                <Button  transparent>
                  
                  <Text>Edit School</Text>
                </Button>
                </Body>
                <Right></Right>
      
            </CardItem>

          </Card>
            </Content>
         );
    }
}

module.export = About; 