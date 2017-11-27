import React, {Component} from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Container
} from 'react-native';
import {Content} from 'native-base';
import firebase from 'firebase';
import ActionButton from './Feed/ActionButton';
import ListItem from './Feed/ListItem';

    const config = {
        apiKey: "AIzaSyDBvpUmSwV5-vKIsnks3Hb50rkVIk3XM0E",
        authDomain: "bookswap-82a77.firebaseapp.com",
        databaseURL: "https://bookswap-82a77.firebaseio.com",
        projectId: "bookswap-82a77",
        storageBucket: "bookswap-82a77.appspot.com"
    };
  




class Feed extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('books');
  }

    getRef() {
        return firebaseApp.database().ref();
    }

    listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
 
    render(){
        return(

                <Container>
                <Header />
                 <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>
          <ActionButton onPress={this._addItem.bind(this)} title="Add" />
            </Container>
         );
    }

    _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
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

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }


}

export default Feed