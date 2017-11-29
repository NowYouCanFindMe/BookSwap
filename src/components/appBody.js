import React, {Component} from 'react';
import { StyleSheet, Container, Header, Content, Card, CardItem, Item,Input,
    Thumbnail, Text, Button, Icon, Left, Body, Right,Grid, Col, Row } from 'native-base';
import {AppRegistry, Image, TextInput, View} from 'react-native';


import {Actions} from 'react-native-router-flux';
import AppBodyData from './appBodyData';

import dataIn from './data/market.json';

export default class AppBody extends Component {




constructor(){
        super()
        this.state ={
            data:[]
        }
    }

    setData(){
        this.setState({data: dataIn});
    }
   

    componentDidMount() {
        this.setData();
    }
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
                        
                      <Grid>
                    <Col style={{  height: 200, justifyContent:'center', alignItems:'center' }}>
                        
                           <Thumbnail source={require('../img/faces/p5.jpg')} />
                            <Body>
                            <Text style={{fontSize: 20, color: 'green', alignItems:'center'}}>New User</Text>
                            <Text note>Robert Mwaniki</Text>
                            </Body> 
                        
                        
                        
                        </Col>
                        <Col style={{ height: 200, alignItems: 'center' }}>
                           <Left><Text>Books purchased</Text>
                           <Text style={{textAlign: 'center', justifyContent: 'center'}}>0</Text>
                           
                            <Text>Books Sold</Text>
                           <Text style={{textAlign: 'center'}}>0</Text>
                           </Left>
                        
                        
                        
                        </Col>
                        
                   </Grid>  
                               
                          
                        </Body>
                    </CardItem>
                </Card>


                <Card>
                    <CardItem>
                        <Body>
                        
                      <Grid>
                    <Col style={{  height: 200, justifyContent:'center', alignItems:'center' }}>
                        
                           <Image source={require('../img/completed.png')} 
                           
                           style={{height: 100, width: 100, flex: 0, alignItems: 'center', 
                               resizeMode: Image.resizeMode.contain}}/>
                            <Body>
                            <Text style={{fontSize: 15, color: 'grey', alignItems:'center'}}>It looks like you have not purchased a book yet...</Text>
                            
                            </Body> 
                        
                        
                        
                        </Col>
                        <Col style={{ height: 200, alignItems: 'center' }}>
                           <Left><Text style={{fontWeight:'bold'}}>Post Book to Sell</Text>
                              <Image 
                                source={require('../img/book_found.png')} 
                               style={{height: 100, width: 100, flex: 0, alignItems: 'center', 
                               resizeMode: Image.resizeMode.contain}}/>
                            <Button active onPress={Actions.confirmation}
                               active onPress={Actions.sell}
                                style={{
                                    marginTop: 15,
                                    flex:0, flexDirection: 'row',
                                    justifyContent: 'center'}}>
                        
                            <Text style={{fontWeight: '200'}}>Post Book</Text>
                            </Button>
                           </Left>
                        
                        
                        
                        </Col>
                        
                   </Grid>  
                               
                          
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container> 
       
        );
    }
}

module.export = AppBody;