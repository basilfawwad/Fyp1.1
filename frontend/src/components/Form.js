import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
    
} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

export default class Form extends Component<{}> {
	render(){
		return(
			<View style={styles.loginform}>
                <View>
                <TextInput style = {styles.textinput} placeholder = "Username"
                underlineColorAndroid = {'transparent'} placeholderTextColor='#fafad2'/> 

                <Ionicons name ={'ios-person'} size = {35} 
                 color = {'#fafad2'} style = {styles.inputIcon}/>
                </View>
                <View>
                <TextInput style = {styles.textinput} placeholder = "Password"
                underlineColorAndroid = {'transparent'} placeholderTextColor='#fafad2' secureTextEntry = {true}/> 
               

                <Ionicons name ={'md-key'} size = {35} 
                 color = {'#fafad2'} style = {styles.inputIcon}/>
                </View>

                <TouchableOpacity style ={styles.button} onPress={()=>Actions.Profile()} >
                <Ionicons name ={'ios-exit'} size = {35} 
                 color = {'#fafad2'} style = {styles.btnicon}/>
                </TouchableOpacity>
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  loginform : {
    flexGrow: 1,
    alignSelf: 'stretch',
    
    
  },
  textinput:{
      alignSelf:'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fafad2',
      fontSize:15,
      borderBottomColor: '#fafad2',
      borderBottomWidth: 1,
      width:'60%',
      left:'25%'
      
  },
  inputIcon:{
      position:'absolute',
      top:10,
      right:'77%'
  },
  button:{
      alignSelf:'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#0a80be',
      marginTop: '8%',
      width:'40%',
      height:'12%',
      borderRadius:20
      
  },
  btnicon:{
    alignSelf:'center',
    alignItems: 'center',
    bottom:10, 
    fontSize: 25
      
      

  }
});