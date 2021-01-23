import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import authHandler from "./AuthenticationHandler";

class LoginScreen extends Component {
    state = {  }
    render() {
        return (
            <View>

                <TouchableOpacity onPress={()=>authHandler.onLogin()}style={{backgroundColor:'#1DB954',marginTop:20,borderRadius:30,width:200,height:30,marginLeft:80}}><Text style={{color:'white',padding:5,marginLeft:30,fontWeight:'bold'}}>Login With Spotify</Text></TouchableOpacity>
            </View>
        );
    }
}

export default LoginScreen;