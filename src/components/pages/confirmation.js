import React, {Component} from 'react';
import { StyleSheet, Container, Header, Content, Card, CardItem, 
    Thumbnail, Text, Button, Icon, Left, Body, Right,Grid, Col, Row } from 'native-base';
import {AppRegistry, Image, TextInput, View, TouchableHighlight} from 'react-native';
import TextIn from './textInput';

import {Actions} from 'react-native-router-flux';

export default class Confirmation extends Component {
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
            <CardItem
            style={{marginBottom: 0}}>

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
              <View
              style={{justifyContent: 'center'}}>
                   <Text style={{
                       color:'blue',
                       justifyContent: 'center',
                       textAlign: 'center',
                       marginTop: 0,
                        fontSize: 38}}> $26 </Text>
            </View>
            <Text
            
            style={{
                color: 'green',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold'

            }}> Confirmation on Agreement {"\n"} </Text>
            <Body>
            <CardItem cardBody>

               <TouchableHighlight active onPress={Actions.home}
                   
                     >
                      <Thumbnail source={require('../../img/completed.png')} 
                        style={{height: 250, width: 250,
                       
                        }}/>
                </TouchableHighlight>



            
            </CardItem>
            </Body>
            
            
            <CardItem>
               
      
                <Button 
                    active onPress={Actions.marketplace}
                    style={{
                    flex:1, flexDirection: 'row',
                    justifyContent: 'center'}}>
                  <Text>Cancel</Text>
                </Button>
           
            </CardItem>

            

          

          </Card>
            </Content>
        </Container>
           
         );
    }
}

module.export = Confirmation; 

