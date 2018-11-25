import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:120, height: 120}}
          			source={require('../images/logo.png')}/>
          			
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
      marginTop:'20%',
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  
});