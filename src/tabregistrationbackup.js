/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { 
Container, 
Header, 
Title, 
Content, 
Footer, 
FooterTab, 
Button, 
CardItem, 
Tabs, 
Left, 
Body, 
Right,
List,
ListItem,
InputGroup,
Input,
Radio,
Icon,
Picker,
Form,
Item,
} from 'native-base';
const Items = Picker.Item;
const Realm = require('realm');
import Moment from 'moment';
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
			date_:'date',
			tag_:'int',
			id_:'int',
		}	
}
//let realm = new Realm({schema: [Survey],schemaVersion: 5});

	
import Tablisting from '../src/tablisting';
let realm = new Realm({schema: [Survey],schemaVersion: 3});
/*let dogs = [ realm.objects('Dog') ];*/
let Surveys = [ realm.objects('Survey')]; 


class tabregistration extends Component {

  /*constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
	  isSelectyes: false,
	  isSelectno: false,
	  isDisabledShift:true,
	  selected2: undefined,
    };
  }*/
  

	state = {
			 isSelectyes: false,
			 isSelectno: false,
			 isDisabledShift:true,
			 selected2: '',
			 isCashregno:false,
			 isCashregyes:false,
			 isDisabledCashreg:true,
			 isBranchSelectyes:false,
			 isBranchSelectno:false,
			 isDisabledbranch:true,
			 Txteatery_:'',
			 Txtlocation_:'',
			 Txtelocation_:'',
			 Shifts:false,
			 TxtEnoshift:'',
			 Txtempnoshift:'',
			 Txtempnotables:'',
			 Txtempnochairs:'',
			 Cashregs:false,
			 Txtyofbusiness:'',
			 branches:false,
			 Txtbranchlocation: '',
			 selected3: '',
			 TxtOtime:'',
			 TxtCtime:'',
			 TxtDayclose:'',
			 Txttotalemp:'',
			 Txtotherinfo:'',
			 Eateryfocus:true,
			 Txtdt:'',
			 tags_:false,		 
	}
	  
	_onPressHandle = () => {
			this.setState({isSelectno: false})
			this.setState({isSelectyes: !this.state.isSelectyes})
			//this.setSate({isDisabledShift:false}) 
	}	
	
	_onPressHandle1 = () => {
			this.setState({isSelectyes: false})
			this.setState({isSelectno: !this.state.isSelectno})
			//this.setSate({isDisabledShift:true}) 
  }
    
    onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

    onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }

 InsertData = () => {

		const{ Txteatery_ } = this.state;
		const{ Txtlocation_ } = this.state;
		const{ Txtelocation_ } = this.state;
		const{ TxtOtime } = this.state;
		const{ TxtCtime } = this.state;
		const{ TxtDayclose } = this.state;
		const{ Txttotalemp } = this.state;
		const{ Shifts } = this.state;
		const{ TxtEnoshift } = this.state;
		const{ Txtempnoshift } = this.state;		
		const{ Txtempnotables } = this.state;	
		const{ Txtempnochairs } = this.state;	
		const{ Cashregs } = this.state;	
		const{ Txtyofbusiness } = this.state;	
		const{ branches } = this.state;	
		const{ Txtbranchlocation } = this.state;	
		const{ selected2 } = this.state;	
		const{ selected3 } = this.state;	
		const{ Txtotherinfo } = this.state;
		const{ Txtdt } = this.state;
		const{ tags_ } = this.state;
	
		Realm.open({schema:[Survey.schema],schemaVersion:3})
			.then(realm => {
			try{	
				realm.write(() => {
					realm.create('Survey',{
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
						cashreg_: Cashregs,
						Yofbusiness_: Txtyofbusiness,
						Branches_ : branches,
						Blocation_: Txtbranchlocation,
						Etalk_: selected2,
						Smartphone: selected3,
						date_: Txtdt,
						tag_:tags_,
						Otherinfo_: Txtotherinfo, 
					});		
				});
			} catch(e){
				console.log("error on creation");
				Alert.alert(e.message);
			}
				this.setState({ realm });
			});
		
			const query_= this.state.realm
			
			Alert.alert("Record has been saved");
	
    this._textInputEatery.setNativeProps({text: ''});
	this._textInputLocation.setNativeProps({text: ''});
	this._textInputeLocation.setNativeProps({text: ''});
	this._textInputOpening.setNativeProps({text: ''});
	this._textInputClosing.setNativeProps({text: ''});
	this._textInputDclosed.setNativeProps({text: ''});
	this._textInputNoEmp.setNativeProps({text: ''});
	this._textInputEmpshift.setNativeProps({text: ''});
	this._textInputNoEmpshift.setNativeProps({text: ''});
	this._textInputNoTable.setNativeProps({text: ''});
	this._textInputYrofbusiness.setNativeProps({text: ''});
	this._textInputBranchlocation.setNativeProps({text: ''});
	this._textInputOwnerName.setNativeProps({text: ''});
	this._textInputOtherInfo.setNativeProps({text: ''});
	this._textInputNoChairs.setNativeProps({text: ''});
	this.setState({isSelectno: false,
				   isSelectyes: false,
				   isCashregyes: false,
				   isCashregno: false,
				   Cashregs: false,
				   Shifts: false,
				   isBranchSelectyes: false,
				   isBranchSelectno: false,
				   Eateryfocus: true,
	});
	this._textInputEatery._root.focus();

}	

 _onRefresh() { 
	this.setState({refreshing: true});
	let realms = new Realm({schema: [Survey],schemaVersion: 3});
		let Surveys = realm.objects('Survey'); 
		
		var surveydata1 = JSON.stringify(Surveys);
		var arr1 = JSON.parse(surveydata1);
		
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(arr1)});
		this.setState({refreshing: false});
} 

  
  render() {
	Moment.locale('en');
	var dt = new Date(); 	  
    return (
			<Container style={{flex:1, height:2350,}}>	
				<List style={{marginLeft:10,marginRight:10,}}>
				
					<ListItem>
							<InputGroup>
								<Text style={{marginLeft:20,}}>Name of the eatery</Text>
							</InputGroup>
					</ListItem>
					
					<ListItem>
						<Item regular>
							<InputGroup>
								<Input autoFocus={this.state.Eateryfocus} 
									  onChangeText={ Txteatery_ => this.setState({Txteatery_})}
									  ref={component => this._textInputEatery = component}
								/>
							</InputGroup>
						</Item>
					</ListItem>
					
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Area location</Text>
						</InputGroup>
					</ListItem>		
					
					<ListItem>	
						<Item regular>					
							<InputGroup>
								<Input onChangeText={ Txtlocation_ => this.setState({Txtlocation_})}
									  ref={component => this._textInputLocation = component}
								/>
							</InputGroup>
						</Item>					
					</ListItem>		

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Exact address with landmark </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>					
						<Item regular>		
							<InputGroup>
								<Input onChangeText={ Txtelocation_ => this.setState({Txtelocation_})}	
									ref={component => this._textInputeLocation = component}								
								/>
							</InputGroup>	
						</Item>
					</ListItem>

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Opening time </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>	
						<Item regular>						
							<InputGroup>
								<Input 	onChangeText={ TxtOtime => this.setState({TxtOtime})}
										ref={component => this._textInputOpening= component}	/>
							</InputGroup>	
						</Item>
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Closing time </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>	
						<Item regular>						
							<InputGroup>
								<Input onChangeText={ TxtCtime => this.setState({TxtCtime})}
									ref={component => this._textInputClosing= component}
									
								/>
							</InputGroup>
						</Item>
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>What days are they closed? </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>	
						<Item regular>					
							<InputGroup>
								<Input  onChangeText={ TxtDayclose => this.setState({TxtDayclose})}
										ref={component => this._textInputDclosed= component} 
								/>
							</InputGroup>	
						</Item>
					</ListItem>		

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>What is the total number of employees? </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>	
						<Item regular>					
							<InputGroup>
								<Input onChangeText={ Txttotalemp => this.setState({Txttotalemp})}
									ref={component => this._textInputNoEmp= component} 
								/>
							</InputGroup>	
						</Item>
					</ListItem>	
					
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Do they have shifts? </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>							
						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isSelectyes} onPress={() => this.setState({isSelectyes: true, isSelectno:false,isDisabledShift:false,Shifts:true})} />
							 <Text>YES</Text>	
								<Radio style={{margin:20,}}  selected={this.state.isSelectno} onPress={() => this.setState({isSelectyes: false, isSelectno:true,isDisabledShift:true,Shifts:false})} />
							 <Text>NO</Text>			
						</InputGroup>
						
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>If yes, how many shifts? </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>	
						<Item regular>						
							<InputGroup>
							
								<Input onChangeText={ TxtEnoshift => this.setState({TxtEnoshift})} 
									  disabled={this.state.isDisabledShift} 
									  ref={component => this._textInputEmpshift= component}
								
								/>
								
							</InputGroup>
						</Item>
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many employees per shift? </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>		
						<Item regular>						
							<InputGroup>			
								<Input onChangeText={ Txtempnoshift => this.setState({Txtempnoshift})}
									   disabled={this.state.isDisabledShift} 
									   ref={component => this._textInputNoEmpshift= component}
								/>							
							</InputGroup>
						</Item>
						
					</ListItem>

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many tables are there? </Text>
						</InputGroup>
					</ListItem>	
					
					<ListItem>	
						<Item regular>						
							<InputGroup>
							
								<Input  onChangeText={ Txtempnotables => this.setState({Txtempnotables})} 
										ref={component => this._textInputNoTable = component}
								
								/>
								
							</InputGroup>
						</Item>							
					</ListItem>	
					
					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many chairs are there? </Text>
						</InputGroup>
					</ListItem>
					
					<ListItem>		
						<Item regular>						
							<InputGroup>
								<Input  
										onChangeText={ Txtempnochairs => this.setState({Txtempnochairs})}
										ref={component => this._textInputNoChairs = component}
							/>
							</InputGroup>	
						</Item>
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Do they have cash register? </Text>
						</InputGroup>
					</ListItem>
					
					<ListItem>		
					
						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isCashregyes} onPress={() => this.setState({isCashregyes: true, isCashregno:false, isDisabledCashreg:false, Cashregs:true})} />
							 <Text>YES</Text>	
								<Radio style={{margin:20,}} selected={this.state.isCashregno} onPress={() => this.setState({isCashregyes: false, isCashregno:true, isDisabledCashreg:true, Cashregs:false})} />
							 <Text>NO</Text>			
						</InputGroup>
						
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>How many years have they been in business? </Text>
						</InputGroup>
					</ListItem>
					
					<ListItem>
						<Item regular>						
							<InputGroup>
								<Input 	onChangeText={ Txtyofbusiness => this.setState({Txtyofbusiness})}
										ref={component => this._textInputYrofbusiness = component}	
								/>
							</InputGroup>	
						</Item>
					</ListItem>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Do they have other branches? </Text>
						</InputGroup>
					</ListItem>
					
					<ListItem>		
					
						<InputGroup>
								<Radio style={{margin:20,}} selected={this.state.isBranchSelectyes} onPress={() => this.setState({isBranchSelectyes: true, isBranchSelectno:false,isDisabledbranch:false,branches:true})} />
							 <Text>YES</Text>	
								<Radio style={{margin:20,}} selected={this.state.isBranchSelectno} onPress={() => this.setState({isBranchSelectyes: false, isBranchSelectno:true,isDisabledbranch:true,branches:true})} />
							 <Text>NO</Text>			
						</InputGroup>
						
					</ListItem>

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Where are the branches located? </Text>
						</InputGroup>
					</ListItem>
					
					<ListItem>
						<Item regular>						
							<InputGroup>
								<Input  onChangeText={ Txtbranchlocation => this.setState({Txtbranchlocation})}
										disabled={this.state.isDisabledbranch} 
										ref={component => this._textInputBranchlocation = component}	
								/>
							</InputGroup>	
						</Item>
					</ListItem>						
	
					<Form style={{marginLeft:20,}}>
						<Text style={{marginLeft:15,}}>Who did you Talk To?</Text>
						<Picker
							  mode="dropdown"
							  placeholder="Select One"
							  selectedValue={this.state.selected2}
							  onValueChange={this.onValueChange2.bind(this)}
								>
							 <Items label="None" value="No" />
							 <Items label="Manager/Supervisor" value="Manager/Supervisor" />
							 <Items label="Employee" value="Employee" />
							 <Items label="Owner" value="Owner" />
						</Picker>
					</Form>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>What is the name of the owner? </Text>
						</InputGroup>
					</ListItem>
					
					<ListItem>		
						<Item regular>						
							<InputGroup>
								<Input	onChangeText={ TxtDayclose => this.setState({TxtDayclose})} 
										ref={component => this._textInputOwnerName = component}
								/>
							</InputGroup>	
						</Item>
					</ListItem>	

					<Form style={{marginLeft:20,}}>
						<Text style={{marginLeft:15,}}>Does the owners owns a smartphone or tablet? </Text>
						<Picker
							  mode="dropdown"
							  placeholder="Select One"
							  selectedValue={this.state.selected3}
							  onValueChange={this.onValueChange3.bind(this)}
								>
							 <Items label="No" value="No" />
							 <Items label="Yes-Smartphone" value="Manager" />
							 <Items label="Yes-Tablet" value="Supervisor" />
							 <Items label="Yest-Both" value="Employee" />
						</Picker>
						
					</Form>	

					<ListItem>
						<InputGroup>
							<Text style={{marginLeft:20,}}>Other Information? </Text>
						</InputGroup>
					</ListItem>
					
                    <ListItem>
						<Item regular>
							<InputGroup >
							   <Input  onChangeText={ Txtotherinfo => this.setState({Txtotherinfo})}
									   ref={component => this._textInputOtherInfo = component}
							   />
							</InputGroup>
						</Item>
                    </ListItem>
						
						  <Button block success 
								  style={{ padding:20,margin:20, backgroundColor:'#f1c40f'}} 
								  onPress={this.InsertData} color='#2196F3'
								  onSubmitEditing={(event) => this.refs.Txteatery_.focus()}
						  >
							<Text style={{fontSize:16,}}>Save</Text>
						  </Button>			
						  
						  <Button block success style={{padding:20,margin:20,backgroundColor:'#f1c40f',}}
						  >
							<Text>Exit</Text>
						  </Button>		
						  
				</List> 
			</Container>		
    );
  }
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#f1c40f',

	},
	subtitle:{
		fontSize:24,
		fontWeight:'200',
		color: 'white',
	},
	buttoncontainer:{
		padding:20,
	},
	buttonlogin:{
		backgroundColor: '#2980b9',
		height: 80,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
	},
	buttonregister:{
		backgroundColor: '#2980b9',
		height: 80,
		marginBottom:20,
		marginLeft:10,
		marginRight:10,
	},
	buttonregisterinfo:{
		backgroundColor: '#2980b9',
		height: 80,
		marginLeft:10,
		marginRight:10,		
	},
	buttontext:{
		fontSize:25,
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		color: 'white',
		padding: 10,
		marginTop:10,
	},
	imagecontainer:{
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,		
	},
	imagecontainerregister:{
		alignItems: 'center',
		justifyContent: 'center',	
	},
	logo:{
		width: 150,
		height: 150,
	},
	logoregister:{
		width: 150,
		height: 150,		
	},
	input:{
		height: 50,
		backgroundColor: '#ecf0f1',
		marginBottom: 10,
		fontSize:25,
		marginLeft: 30,
		marginRight: 30,
	},
	icon: {
		width: 26,
		height: 26,
	  },
});

export default tabregistration;
