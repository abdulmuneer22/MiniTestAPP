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
class Home extends Component{
    render(){
        return(
            <View>
            
            <Image style = {styles.homeBgImage}
            source={require('../images/space_original.png')}>
            <View style={{
                flex : 1,
                height :window.height,
                alignItems:'center'
                
            
            }}>
            <Text style={{flex : 6}}></Text>
            
            <View  
            style = {{
                flex : 1,
                
            }}>
            
                <TouchableOpacity style={{
                    backgroundColor : 'rgba(0, 0, 0, 0.4)',
                    height : 50,
                    alignItems :'center',
                    justifyContent : 'center',
                    width : window.width*0.50}}
                    onPress={()=>{
                        //alert("test")
                        this.props.navigator.push({name:'SendMessage'})
                    
                    }}
                    >

                    <Text style={{
                        color : 'white',
                        fontSize : 20,
                        fontWeight : 'bold'
                    
                    }}>Send Message</Text>
                    
                </TouchableOpacity>

            </View>
            </View>
            </Image>

            </View>
        );
    }

}


const styles = StyleSheet.create({
homeBgImage : {
    flex : 1,
    width : null,
    height : null,
  }

})


export default Home
