import React, {Component} from 'react';
import { StyleSheet, Container, Header, Content, Card, CardItem, 
    Thumbnail, Text, Button, Icon, Left, Body, Right,Grid, Col, Row } from 'native-base';
import {AppRegistry, Image, TextInput} from 'react-native';
import TextIn from './textInput';
import {Actions} from 'react-native-router-flux';

export default class Sell extends Component {
    constructor() {
        super();
    }

    render(){
        return(

            //  <Container>
            //     <Content>
            //   
            //     </Content>
            // </Container>
            <Container>

             <Content>
                      <Card>
            <CardItem>

                      <Grid>
                    <Col style={{  height: 200, justifyContent:'center', alignItems:'center' }}>
                        
                           <Thumbnail source={require('../../img/faces/p2.jpg')} />
                            <Body>
                            <Text style={{fontSize: 20, color: 'green', alignItems:'center'}}>Seller</Text>
                            <Text note>Jane Doe</Text>
                            </Body> 
                        
                        
                        
                        </Col>
                        <Col style={{ height: 200, alignItems: 'center' }}>
                             
                           <Thumbnail source={require('../../img/faces/p5.jpg')} />
                            <Body>
                            <Text  style={{fontSize: 20, color: 'green', alignItems:'center'}}>Buyer</Text>
                            <Text note>Robert Mwaniki</Text>
                            </Body> 
                        
                        
                        
                        
                        
                        </Col>
                   </Grid>


              
            </CardItem>
            <Body>
            <CardItem cardBody>
              <Thumbnail source={require('../../img/books/cplusplus.jpg')} 
                style={{height: 250, width: 250,
                }}/>
            </CardItem>
            </Body>
            
            <CardItem>
              <Left>
                
                <Text> Price </Text>
              </Left>
              <Body>
                <Button transparent>
                <Text> $26 </Text>
                </Button>
              </Body>
            
            </CardItem>
            <CardItem>
               
      
                <Button active onPress={Actions.confirmation}
                 style={{
                    flex:1, flexDirection: 'row',
                    justifyContent: 'center'}}>
                  
                  <Text>Agree to Meet</Text>
                </Button>
           
            </CardItem>

            

          

          </Card>
            </Content>
        </Container>
           
         );
    }
}

module.export = Sell; 