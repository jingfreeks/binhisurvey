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
			id_: {type: 'int', default: 0},
		}	
}

let realm = new Realm({schema: [Survey]});
let Surveys = realm.objects('Survey'); 

const array = realm.objects('Survey'); 
const arrayResults = _.values(array);

var surveydata = JSON.stringify(Surveys);
finals1=surveydata.replace(/[{}]/g, "");
//var finals = surveydata.replace(/{|},|}/g, "\n").replace(/\[|\]|"/g, "").replace(/,/g, ',\n')
//var surveydata1 = JSON.parse(surveydata);
//var finalsurvey = surveydata1.Eatery;


/*var chartArrayFilter = surveydata.map(function(surveydata) {
  return {Eatery: surveydata.Eatery};
});*/

/*var jsonData = {
  "services": [
    { "id": 1, "name": "Hotels" },
    { "id": 2, "name": "Embassies" }
  ]
};

var data = jsonData.services.map(function(item) {
  return {
    key: item.id,
    label: item.name
  };
});*/

//console.log(data);

//alert(Surveys);

class tablisting extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Surveys),
    };
  }

    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
  render() {
    return (
	

      <Container>
        <Header />
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
	
	/*<ListView 
		dataSource={this.state.dataSource}
		renderRow={(rowData) => <Text>{JSON.stringify(rowData.Eatery)}</Text>}
	/>
	
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
	var Survey1 = surveydata.Eatery;*/

	//return (
    /* <Container>
        <Content>
          <List dataArray={data}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>*/
	 //<Container>
        /*<Content>
		<ListView 
			dataSource={this.state.dataSource}
			//renderRow={(rowData) => <Text>{rowData[0].Eatery}</Text>}
			renderRow={(rowData) => <Text>{JSON.stringify(rowData)}</Text>}
		/>	
        </Content>
      </Container>*/		
    );
  }
}
export default tablisting;
