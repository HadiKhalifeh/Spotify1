import React from 'react'
import {Text,View} from 'react-native'
import Rate from './Rate'

export default class Offre extends React.Component{
state={liked:false,liked2:false,liked3:false}
    render(){
        return(
            <View><Text>
           
            </Text>
            <Rate
                    icon={this.state.liked ? "star-o" : "star-o"}
                    color1={this.state.liked ? "yellow" : "#0001"}
                    color2={this.state.liked2 ? "yellow" : "#0001"}
                    color3={this.state.liked3 ? "yellow" : "#0001"}
                    style={{marginLeft:200}}
                    onPress={() => this.setState({ liked: !this.state.liked })}
                    onPress2={() => this.setState({ liked2: !this.state.liked2 })}
                    onPress3={() => this.setState({ liked3: !this.state.liked3 })}
                  />
            </View>

        )
    }
}