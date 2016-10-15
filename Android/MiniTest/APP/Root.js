import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';


import Home from './Containers/Home'
import SendMessage from './Containers/SendMessage'
import Success from './Containers/Success'

class Root extends Component {

renderScene(route,navigator){
switch(route.name){
    case 'Home':
    return <Home  navigator={navigator} />
    case 'SendMessage':
    return <SendMessage  navigator={navigator} />
    case 'Success':
    return <Success  navigator={navigator} />

    default :
    return <Home  navigator={navigator} />
}

}



configureScene(route){
    switch(route.name){
    case 'Home':
      return Navigator.SceneConfigs.FloatFromBottom
    case 'SendMessage':
      return Navigator.SceneConfigs.FloatFromBottom
    
    case 'Success':
      return Navigator.SceneConfigs.FloatFromBottom


    default : 
      return Navigator.SceneConfigs.FloatFromBottom
    
}
}


render(){
    return(
            
            <Navigator
            initialRoute={{name: 'Home'}}
            renderScene={this.renderScene.bind(this)}
            //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}
            configureScene={this.configureScene.bind(this)}
            />
            

    )
}



}


export default Root