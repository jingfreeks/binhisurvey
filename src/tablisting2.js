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
	Button,
	KeyboardAvoidingView,
	TouchableOpacity,
	ListView,
	RefreshControl
} from 'react-native';

const Realm = require('realm');
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

class Survey {}
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
			id_: {type: 'int', default: 0},
		}	
}


let realm = new Realm({schema: [Survey],schemaVersion: 2});
let Surveys = realm.objects('Survey'); 

const array = realm.objects('Survey'); 
const arrayResults = _.values(array);


var surveydata = JSON.stringify(Surveys);
finals1=surveydata.replace(/[{}]/g, "");


var arr = JSON.parse(surveydata);

class tablisting extends Component {
   constructor(props) {
    super(props);
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
	  dataSource: ds.cloneWithRows(arr),
    };
  }
  
 _onRefresh() {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  

  
	render() {
    //var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
        <Content>
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
        </Content>
      </Container>
    );
  }
}
export default tablisting;
