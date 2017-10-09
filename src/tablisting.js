/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { 
	AppRegistry,
	StyleSheet,
	TextInput, 
	View, 
	Alert, 
	
	KeyboardAvoidingView,
	TouchableOpacity,
	ListView,
	RefreshControl,
	ScrollView,
} from 'react-native';
const Realm = require('realm');
import { Button,Container, Header, Content, List, ListItem, Text,Right,Radio,InputGroup } from 'native-base';

/*class Survey {}
Survey.schema = {
		name: 'Survey',
		properties:{
			Eatery: "string",
			Ladd: "string",
			Eadd: "string",
			Otime_:"string",
			Ctime_:"string",
			DClose: "string",
			Temp_: "string",
			Shift_: "bool",
			Enoshift_: "string",
			Enoempshift_: "string",
			Enotables_: "string",
			Enochairs_: "string",
			cashreg_: "bool",
			Yofbusiness_: "string",
			Branches_ : "bool",
			Blocation_: "string",
			Etalk_: "string",
			Smartphone: "string",
			Otherinfo_: "string",
			date_:"date",
			tag_:"bool",
			id_: {type: 'int', default: 0},
		}	
}


let realm = new Realm({schema: [Survey],schemaVersion: 3});
let Surveys = realm.objects('Survey'); 

const array = realm.objects('Survey'); 
const arrayResults = _.values(array);


var surveydata = JSON.stringify(Surveys);
finals1=surveydata.replace(/[{}]/g, "");


var arr = JSON.parse(surveydata);*/

export default class tablisting extends Component <{}>{
  /* constructor(props) {
    super(props);
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
	  dataSource: ds.cloneWithRows(arr),
    };
  }*/
  
 /*_onRefresh() {
    this.setState({refreshing: true});
    /*fetchData().then(() => {
      this.setState({refreshing: false});
    });*/
	/*alert('test');
	this.setState({refreshing: false});
  }*/
 
	render() {
    //var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
	  /*<ScrollView>
      	<ListView 
			refreshControl={
			<RefreshControl
			refreshing={this.state.refreshing}
			onRefresh={this._onRefresh.bind(this)}
			/>
			}		
			dataSource={this.state.dataSource}
			//renderRow={(rowData) => <Text>{rowData[0].Eatery}</Text>}
			renderRow={(rowData) => <Text>{rowData.Eatery}</Text>}
		/>	
	</ScrollView>*/
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//export default tablisting;
