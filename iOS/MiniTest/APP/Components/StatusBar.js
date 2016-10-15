
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 


import firebase from 'firebase'


class StatusBar extends Component {
    constructor(){
        super();
        this.state = {
            message: "Test"
        }
    }

    

    sendMessage(message,name,email){
        

        if(!message | !name | !email){
            alert("Please Enter Your Message and Details")
        }else{


            firebase.database().ref('testAPP/'+name+'/').update({
            _name: name,
            _message : message,
            _email : email
            });
            

            this.props.navigator.push({name:'Success'})
        }
        
        
        
        
    }


    render(){

        return(
            <View style={{
                flexDirection : 'row',
                flex : 1,
                
                height : 40,
                paddingTop : 10
            }}>

            <TouchableOpacity style={{flex : 3}}
            onPress={()=>{
                //alert("test")
                this.props.navigator.pop()
            
        }}
            >
            <View style={{flexDirection : 'row'}}>
            
            <Icon name="ios-arrow-back-outline" size={40} color="white" />
            <Text style={{
                fontSize : 20,
                padding :6,
                color :'white',
                fontWeight : 'bold'
                
                
            }}>Cancel</Text>
            
            </View>
            </TouchableOpacity>

            <View style={{flex : 6,alignItems : 'center',justifyContent : 'center'}}>
            
            </View>
            
            <TouchableOpacity style={{
                flex : 3,
                alignItems : 'flex-end',
                paddingRight : 5}}
                onPress={
                    
                    this.sendMessage.bind(this,this.props.message,this.props.name,this.props.email)
                }
                >
            <Text style={{
                fontSize : 20,
                padding :6,
                color :'white',
                fontWeight : 'bold'
                
            }}>Send</Text>
            </TouchableOpacity>
            
            
            </View>
            
           

        )
    }

}



export default StatusBar
