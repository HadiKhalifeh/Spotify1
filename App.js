


import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,createAppContainer,createSwitchNavigator } from '@react-navigation/native';

import LoadingScreen from './screen/LoadingScreen';
import LoginScreen from './screen/LoginScreen';
import SearchSpotify from './screen/SearchSpotify';


const Stack = createStackNavigator();



  export default function App() {
    return (
       <NavigationContainer >
       <Stack.Navigator initialRouteName='Loading'   headerMode='none'>
     

       <Stack.Screen name='SearchSpotify' component={SearchSpotify}/>
      

       </Stack.Navigator>
      </NavigationContainer>
 
 )
 }