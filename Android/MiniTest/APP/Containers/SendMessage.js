import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
const window  = Dimensions.get('window')

import StatusBar from '../Components/StatusBar'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBOK_RQn9_3rHgKHfgO6iKdbiFWMChp6Zc",
    authDomain: "finon-9e0de.firebaseapp.com",
    databaseURL: "https://finon-9e0de.firebaseio.com",
    storageBucket: "finon-9e0de.appspot.com",
    messagingSenderId: "310502793636"
  };




class SendMesage extends Component{

    constructor(){
        super()
        this.state = {
        message : '',
        name : '',
        email : ''
       
        }
    }

    componentWillMount(){

        if(firebase.apps.length === 0){
        firebase.initializeApp(config);
        }

        var email = "test@test.com"
        var password = "123456789"
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result=> {console.log(result)}))
    }

    render(){
        return(
            

            <Image source={require('../images/space.png')} style={styles.homeBgImage}>
            
            <View style={{padding : 20,flex : 1}}>

            <View style={{flexDirection :'row'}}>
            <StatusBar 
            navigator={this.props.navigator} 
            message={this.state.message} 
            name = {this.state.name}
            email = {this.state.email}
            {...this.props}
            />
            </View>

            <View style={styles.formWrapper}>
            <TextInput
            style={styles.messageInput}
            placeholder="Type Your Message Here"
            onChangeText = {(text) => this.setState({message:text})}
            value={this.state.message}
            multiline={true}
            //color = {'white'}
            placeholderTextColor = 'grey'
            autoFocus={true}
            
            />

            </View>

            <View style={styles.formWrapperMessage}>
            <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText = {(text) => this.setState({name:text})}
            value={this.state.name}
            //multiline={true}
            //color = {'white'}
            placeholderTextColor = 'grey'
            />
            </View>

            <View style={styles.formWrapperMessage}>
            <TextInput
            style={styles.input}
            placeholder="EMail"
            onChangeText = {(text) => this.setState({email:text})}
            value={this.state.email}
            //multiline={true}
            //color = {'white'}
            placeholderTextColor = 'grey'
            keyboardType = "email-address"
            />

            
            </View>
            
            </View>
            </Image>

            
        );
    }

}


const styles = StyleSheet.create({
homeBgImage : {
    flex : 1,
    width : null,
    height : null,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  messageInput : {
      alignItems : 'flex-start',
      alignSelf : 'center',
      width : window.width*0.8,
      height : 200,
      fontSize : 20,
      textAlign : 'left',
      justifyContent : 'center',
  },
  input :{

      alignItems : 'flex-start',
      alignSelf : 'center',
      width : window.width*0.8,
      height : 50,
      fontSize : 20,
      textAlign : 'left',
      justifyContent : 'center',
      
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  },
  
  formWrapper:

  {
    marginTop : 20,
    backgroundColor : 'rgba(20, 24, 0, 0.3)',
    height : 200
  },

  formWrapperMessage:

  {
    marginTop : 6,
    backgroundColor : 'rgba(20, 24, 0, 0.3)',
    height : 50
  },

})


export default SendMesage
