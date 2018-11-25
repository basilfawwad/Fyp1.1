import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
             <ImageBackground
        source = {require('../images/pcov.jpg')}
        style = {styles.pcov}>
          <View style={styles.header}></View>
          </ImageBackground>
          <Image style={styles.avatar} source={require('../images/dp.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Usama</Text>
              <Text style={styles.info}>Mobile developer</Text>
              <Text style={styles.description}>abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Option 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Option 2</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
     height:'100%',
     width:'100%',
    backgroundColor:'#fafad2'
 },
 pcov:{
    height:200,
 },
    header:{
    backgroundColor: "rgba(24,204,255,0.8)",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
    
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#18ccff",
  },
});