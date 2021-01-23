import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View,Text , TouchableOpacity,StyleSheet} from "react-native";


export default function Rate({ icon, text, onPress, style, color1,color2,color3,onPress2,onPress3 }) {
  if (icon) {
    return (
    
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={onPress} style={styles.smallButton}>
     
          <Icon
            style={{ textAlign: "center" }}
            name="star"
            size={20}
            color={color1}
          />
          
        </TouchableOpacity><TouchableOpacity onPress={onPress2} style={styles.smallButton}>
     
     <Icon
       style={{  textAlign: "center" }}
       name="star"
       size={20}
       color={color2}
     />
     
   </TouchableOpacity>
   <TouchableOpacity onPress={onPress3} style={styles.smallButton}>
     
          <Icon
            style={{ textAlign: "center" }}
            name="star"
            size={20}
            color={color3}
          />
          
        </TouchableOpacity>
     </View>
    );
  } else if (text) {
    return (
      <>
        <TouchableOpacity onPress={onPress} style={[styles.smallButton,{marginLeft:100,marginTop:170},style]}>
          <Text style={{ color: "#0009",  fontSize: 13,fontWeight:'bold' }}>{text}</Text>
          
        </TouchableOpacity>
       
      </>
    );
  }
}

const styles=StyleSheet.create({
    smallButton: {
        width: 25,
        height: 25,
      borderRadius: 20,
      left:120,
      marginLeft:10,
      
   //     color:'white',
        backgroundColor: "rgba(255,255,255,0.9)",
        justifyContent: "center",
        alignItems: "center",
       
      },
})