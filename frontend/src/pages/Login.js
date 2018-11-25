import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import {createStackNavigator} from 'react-navigation';



type Props = {};
export default class App extends Component<Props> {
    signup() {
		Actions.Signup()
	}

  
    render() {
    return (
        
      
      <ImageBackground
        source = {require('../images/bg.jpg')}
        style = {styles.container}>
        <View style = {styles.overlayCon}>
        <View style = {styles.header}>
        <TouchableOpacity style ={styles.backbutton} >
                <Ionicons name ={'ios-arrow-back'} size = {28} 
                 color = {'#fafad2'} style = {styles.backicon}/>
        </TouchableOpacity>

        <Text style={styles.headerText}>Login      </Text>
        </View>
        <Logo/>
        <Form type = "Login"/>
        <View style = {styles.footer}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Register </Text></TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
        
       
    );
  }
}

const styles = StyleSheet.create({
    otstuff: {
        justifyContent:'center',
        alignItems: 'center'
    },
    container:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    overlayCon:{
        flex:1,
        
        backgroundColor:'rgba(44,87,178,0.8)',
        width:'100%',
        height:'100%'
        
    },
    signupText: {
       
        color:'#fafad2',
        fontSize:12
    },
    signupButton: {
        
        color:'#fafad2',
        fontSize:12,
        fontWeight:'500'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        flexGrow:1,
        marginBottom:'5%'
        
    },
    backbutton:{
        marginLeft:'8%',
        top:'5%'
    },
    header:{
        flexDirection:'row'
    
    },
    headerText:{
        marginLeft:'68.4%',
        top:'5%',
        fontSize:18,
        color:'#fafad2',
        borderRightColor:'#fafad2',
        borderRightWidth:4,
        borderBottomRightRadius:3,
        borderTopRightRadius:3
    }
    

  });