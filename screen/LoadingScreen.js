import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'




export default class LoadingScreen extends React.Component{

    
    
    constructor() {
        super();
        this.state = {
          animating: false,
          align: 'center',
          alignsecond: false,
        };
        setTimeout(
          () =>
            this.setState({ align: 'flex-start' }, function() {
              this.setState({
                alignsecond: true,
              });
            }),
          4000
        );
      }
      componentDidMount(){this.props.navigation.navigate('SearchSpotify')}
    
      render() {
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: this.state.align,
           //   color:'3983C8'
             // marginHorizontal: 40,
              backgroundColor:'#1DB954'
            }}>
            <Image
              source={
               require('../assets/spotify.png')
              }
              style={{
                width: 110,
                height: 110,
                borderRadius: 100
              }
                          }            />
            {!this.state.alignsecond ? null : (
              <View style={{marginTop:40,width:150 }}>
                <Text
                  style={{color: '#0008', fontSize: 20, fontWeight:'900',fontStyle:'italic'}}>
               My Spotify..
                </Text>
              </View>
            )}
          </View>
        
        );  
        
        
           
}
            }
          
       
