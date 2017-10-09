/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React  from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Moment from 'moment';
const Realm = require('realm');

class Survey {}
Survey.schema = {
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
			Smartphone: "string",
			Otherinfo_: "string",
			id_: {type: 'int', default: 0},
		}	
}

export default class migration extends React.Component {
  render() {
	return (
	/*Realm.open({
		schema:[Survey.schema],
		schemaVersion: 1,
		migration: (oldRealm, newRealm) => {
			if(oldRealm.schemaVersion <1){
				const oldObjects = oldRealm.objects('Survey');
				const newObjects = newRealm.objects('Survey');
				
				for (let i=0; i < oldObjects.length; i++){
					
				}
			}
		}
	}).then(realm => {
		const Otime_ = realm.objects('Survey')[4].Otime_;
	});*/
<View style={styles.container}>
		<Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>	
	
    );
	
  }
}
			/*.then(realm => {
			try{	
				realm.write(() => {
					realm.create('Surveyinfo',{
						Eatery: Txteatery_,
						Ladd: Txtlocation_,
						Eadd: Txtelocation_,
						Otime_: TxtOtime,
						Ctime_: TxtCtime,
						DClose: TxtDayclose,
						Temp_: Txttotalemp,
						Shift_: Shifts,
						Enoshift_: TxtEnoshift,
						Enoempshift_: Txtempnoshift,
						Enotables_: Txtempnotables,
						Enochairs_: Txtempnochairs,
						Cashreg_: Cashregs,
						Yofbusiness_: Txtyofbusiness,
						EbranchesY_: isBranchSelectyes,
						Branches_ : branches,
						Blocation_: Txtbranchlocation,
						Etalk_: selected2,
						Smartphone_: selected3,
						Otherinfo_: Txtotherinfo, 
					});		
				});
			} catch (e){
				console.log("error on creation");
			}
				this.setState({ realm });
			});*/

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

AppRegistry.registerComponent('migration', () => migration);


         /* <List			
			dataArray={arr} 
            renderRow={(item)=>
              <ListItem>
                <Text>{item.Eatery}</Text>
              </ListItem>

            }>
			
			
          </List>*/
