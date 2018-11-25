import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler
} from 'react-native';

import Logo from '../components/Logo';
import FormSu from '../components/FormSu';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props> {
    goBack() {
        Actions.pop();
    }
  
    render() {
    return (
        
      
      <ImageBackground
        source = {require('../images/bg.jpg')}
        style = {styles.container}>
        <View style = {styles.overlayCon}>
        
        <View style = {styles.header}>
        <TouchableOpacity  onPress={this.exit_function} style ={styles.backbutton} >
                <Ionicons name ={'ios-arrow-back'} size = {28} 
                 color = {'#fafad2'} style = {styles.backicon}/>
        </TouchableOpacity>

        <Text style={styles.headerText}>Sign Up    </Text>
        </View>
        
        <Logo/>
        <FormSu type = "Signup"/>
        
        <View style = {styles.footer}>
        <Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Login </Text></TouchableOpacity>
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
        marginLeft:'66.4%',
        top:'5%',
        fontSize:18,
        color:'#fafad2',
        borderRightColor:'#fafad2',
        borderRightWidth:4,
        borderBottomRightRadius:3,
        borderTopRightRadius:3
    }
    

  });