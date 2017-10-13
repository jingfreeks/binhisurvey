/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
//import Textarea from 'react-textarea-autosize';
//import ReactDOM from 'react-dom';
//import WriteBox from 'react-native-writebox'
//import { List, TextareaItem } from 'antd-mobile';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Realm = require('realm');
const currentVersion = Realm.schemaVersion(Realm.defaultPath);
alert(currentVersion);
class Surveys {}
Surveys.schema = {
		name: 'Survey',
		properties:{
			Eatery: "string",
			Ladd: "string",
			Eadd: "string",
			Otime_: "string",
			Ctime_: "string",
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
			Oname_:"string",
			Smartphone: "string",
			Otherinfo_: "string",
			Oname_:"string",
			lending:"bool",
			lendname_:"string",
			date_: "date",
			tag_:"bool",
			Contacts_: "string",
			Aveamt_: "int",
			id_: {type: 'int', default: 0},
		}	
}
/*class Survey {}
Survey.schema = {
		name: 'Survey',
		properties:{
			Contacts_: "string",
			Aveamt_: "int",
		}	
}*/
//let realm = new Realm({schema: [Surveys],schemaVersion:7});
	/*Realm.open({
	  schema: [Surveys],
	  schemaVersion: 8,
	  migration: (oldRealm, newRealm) => {
		// only apply this change if upgrading to schemaVersion 1
		if (oldRealm.schemaVersion < 1) {
		  const oldObjects = oldRealm.objects('Surveys');
		  const newObjects = newRealm.objects('Surveys');

		  // loop through all objects and set the name property in the new schema
		  for (let i = 0; i < oldObjects.length; i++) {
			newObjects[i] = oldObjects[i];
		  }
		}
	  }
	}).then(realm => {
	  //const fullName = realm.objects('Person')[0].name;
	});*/
	
export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
		<View>
			<DatePicker
					  style={{width: 200}}
					  date={this.state.time}
					  mode="time"
					  format="HH:mm"
					  confirmBtnText="Confirm"
					  cancelBtnText="Cancel"
					  minuteInterval={10}
					  onDateChange={(time) => {this.setState({time: time});}}
			/>
			<TextInput
				{...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
				editable = {true}
				multiline={true}
				numberOfLines = {4} editable = {true}
			/>
		</View>
    );
}		
}		
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>*/


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
