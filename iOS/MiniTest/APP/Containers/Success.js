
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
const window = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons'; 


class Success extends Component{
    constructor(){
        super()
        this.state = {
            status : 'Sending'
        }
    }

    componentDidMount(){
    
    setTimeout(()=>
    {
    this.setState({status :'Sent !'})
    },
    3000

    );
    }

    render(){
        return(
            <Image source={require('../images/space.png')} style={styles.homeBgImage}>
            <View style={styles.container}>
            
            <View style={{
                backgroundColor :'rgba(0, 0, 0, 0.4)',
                height : 180,
                width : window.width * 0.7,
                alignItems : 'center',
                justifyContent :'center'
        }}>
            
            <Text style = {{color : 'white',fontSize : 18}}>
            {this.state.status}
            </Text>

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
    alignItems: 'center',
    
    
    
    
  },


})
export default Success