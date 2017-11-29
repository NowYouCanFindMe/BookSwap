import React, {Component} from 'react';
import {Image,   TouchableHighlight} from 'react-native';
import { StyleSheet, Container, Header, Content, Card, CardItem, 
    Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class MarketPlace extends Component {
    constructor() {
        super();
    }

    render(){
        return(
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/faces/p2.jpg')} />
                <Body>
                  <Text>The C++ Programming Language</Text>
                  <Text note>Jane Doe</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <TouchableHighlight active onPress={Actions.purchase}>
              <Image 
                        
                     source={require('../../img/books/cplusplus.jpg')} 
                style={{height: 150, width: 150, flex: 0, alignItems: 'center', 
                resizeMode: Image.resizeMode.contain}}/>
            </TouchableHighlight>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>3 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>2 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>4h ago</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/faces/p1.jpg')} />
                <Body>
                  <Text>Android: Programming for Beginners</Text>
                  <Text note>Jane Smith</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/books/android.png')} 
                style={{height: 150, width: 150, flex: 0, alignItems: 'center', 
                resizeMode: Image.resizeMode.contain}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>6 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>7h ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/faces/p5.jpg')} />
                <Body>
                  <Text>Java</Text>
                  <Text note>John Doe</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/books/java.jpg')} 
                style={{height: 150, width: 150, flex: 0, alignItems: 'center', 
                resizeMode: Image.resizeMode.contain}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

                <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/faces/p7.jpg')} />
                <Body>
                  <Text>Practical C++ Programming</Text>
                  <Text note>Henry Spencer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/books/cplusplus2.jpg')} 
                style={{height: 150, width: 150, flex: 0, alignItems: 'center', 
                resizeMode: Image.resizeMode.contain}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>11 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>6 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>13h ago</Text>
              </Right>
            </CardItem>
          </Card>

                <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/faces/p3.jpg')} />
                <Body>
                  <Text>TensorFlow: Machine Learning</Text>
                  <Text note>Tamara Leo</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/books/tensor.png')} 
                style={{height: 150, width: 150, flex: 0, alignItems: 'center', 
                resizeMode: Image.resizeMode.contain}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>12 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>15h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
         
         );
    }
}

// const styles = StyleSheet.create({
//   book: {
//     borderRadius: 4,
//     borderWidth: 0.5,
//     borderColor: '#d6d7da',
  
//   }
// });
module.export = MarketPlace; 

