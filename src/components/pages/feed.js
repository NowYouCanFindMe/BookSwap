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
  Modal,
  Card, 
  CardItem, 
  Thumbnail, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right,
  Image
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
  const count = 0;

  
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

    // setModalVisible(visible){
    //     this.setState({modalVisible:visible});
    // }

    //function to return ref

    state = {
        modalVisible: false,
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
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
                console.log(items);
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
                this.setModalVisible(true)
                }}>
              
                <View>
                    <Text style ={styles.title}>{item.title}</Text>
                </View>

            </TouchableHighlight>
        );
    }

    addItem(){
        // this.setModalVisible(true);
        AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
    }
    render() {
        return (
            <View >
                <ListView
        
                    dataSource ={this.state.itemDataSource}
                    renderRow={this.renderRow}

                    />
                {/*<Toolbar title="ItemLister" />*/}
                     <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                        >
                        <View style={{marginTop: 22}}>
                        <View>
                            <Text style={styles.booktitle}>Java Programming</Text>
                               <Image  source={require('../../img/books/java.jpg')} 
                            
                                style={{height: 200, width: 200, flex: 0, alignItems: 'center', 
                                 resizeMode: Image.resizeMode.contain}}/>

                            <Text style= {{fontWeight:'bold'}}>
                            Title: Introduction to Java Programming
                            {"\n"}
                            Author:  Y Daniel Liang {"\n"}
                            ISBN: 978-0133761313{"\n"}
                            </Text>
            
                            <Text>Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible ~{"\n"}</Text>
                           
                            <Text>


                                This text is intended for a 1-, 2-, or 3-semester CS1 course sequence. {"\n"}Comprehensive coverage of Java and programming make this a useful reference for beginning programmers and IT professionals.{"\n"}
 
Daniel Liang teaches concepts of problem-solving and object-oriented programming using a fundamentals-first approach. Beginning programmers learn critical problem-solving techniques then move on to grasp the key concepts of object-oriented, GUI programming, advanced GUI and Web programming using Java. Liang approaches Java GUI programming using JavaFX, not only because JavaFX is much simpler for new Java programmers to learn and use but because it has replaced Sw...
 

  




                            </Text>
                            <TouchableHighlight onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                            }}>
                            <Text style={styles.close}>Close</Text>
                            </TouchableHighlight>

                        </View>
                        </View>
                     </Modal>
                     
                
                    
                   



                
            </View>
        );
    }
}
AppRegistry.registerComponent('feed', () => feed);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  booktitle:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 25,
      textAlign: 'center'
  },
  title:{
      fontWeight: 'bold',
      color: 'green',
      fontSize: 20
  },
    close:{
      fontWeight: 'bold',
      color: 'red',
      textAlign: 'center',
      fontSize: 20
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});