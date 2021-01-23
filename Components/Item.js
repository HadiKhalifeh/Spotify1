import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Show from './Show'
export default  ({ item: {imageUri, title,} }) => (
<View>
    <View style={styles.container}>
        <Image
            source={{ uri: imageUri }}
            style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
 
    </View>
    <Show />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:20,marginLeft:10
        
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius:50,
    },
    text: {color:'white'},
});