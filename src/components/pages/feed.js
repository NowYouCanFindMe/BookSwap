import React, {Component} from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Container,
  setModalVisible,
  Modal
} from 'react-native';
import {Content} from 'native-base';
import firebase from 'firebase';
import ActionButton from './Feed/ActionButton';
import ListItem from './Feed/ListItem';

    // const config = {
    //     apiKey: "AIzaSyDBvpUmSwV5-vKIsnks3Hb50rkVIk3XM0E",
    //     authDomain: "bookswap-82a77.firebaseapp.com",
    //     databaseURL: "https://bookswap-82a77.firebaseio.com",
    //     projectId: "bookswap-82a77",
    //     storageBucket: "bookswap-82a77.appspot.com"
    // };
    // firebase.initializeApp(config);
  

  
  export default class Feed extends Component{
    // componentWillMount() {
    //     firebase.auth().onAuthStateChanged(function(user) {
    //             if (user) {
    //                 // User is signed in.
    //                 console.log(user + 'is logged in');
    //             } else {
    //                 // No user is signed in.
    //                 console.log('No user is logged in');
    //         }
    //     }
    // }
    

    constructor(){
        super();
        let ds = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
      this.state = {
          text: ' ',
          itemDataSource: ds,
          modalVisible: false
      }
      this.itemsRef = this.getRef().child('items');
      console.log(this.getRef().child('items'));
      this.renderRow = this.renderRow.bind(this);
      this.pressRow = this.pressRow.bind(this);
    }

    setModalVisible(visible){
        this.setState({modalVisible:visible});
    }

    //function to return ref
    getRef(){
        return firebase.database().ref();
    }

    componentWillMount(){
        //pass in items reference
        this.getItems(this.itemsRef);
    }

    componentDidMount(){
        this.getItems(this.itemsRef);
    }

    getItems(itemsRef){
        itemsRef.on('value', (snap) => {
            let items = [];
            snap.forEach((child) => {
                items.push({
                    title: child.val().title,
                    _key: child.key
                });
            });
           this.setState({
            itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        });
    });
    }

    pressRow(item){
        console.log(item);
    }
    renderRow(item){
        return(
            <TouchableHighlight onPress={() => {
                this.pressRow(item);
                }}>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    addItem(){
        this.setModalVisible(true);
    }
    render() {
        return (
            <View >

                {/*<Toolbar title="ItemLister" />*/}
                    <ListView
                        dataSource ={this.state.itemDataSource}
                        renderRow={this.renderRow}
                        />
                    <Modal
                
                    animationType={'slide'}
                    transparemt={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert('Modal has been closed.')}}
                    >
                <View>

                    <View>
                        <ActionButton onPress={this._addItem.bind(this)} title="Add"
                        
                         />
           

                        <Text> Hello World</Text>
                        <TouchableHighlight onPress={() => {
                            //push text input onto firebase
                            this.itemsRef.push({title: this.state.text});
                            this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text> Hide Modal </Text>
                            </TouchableHighlight>
                    </View>
                </View>


                </Modal>






                
            </View>
        );
    }
}
AppRegistry.registerComponent('feed', () => feed);
  