import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import Item from "./Item";



export default ({ items , onEndReached }) => (
    <View>
    <FlatList data={items}
              renderItem={ (info) =>  <Item item={info.item} /> }
              listEmptyComponent = { f => f }
              ItemSeparatorComponent={() => <View style={{height:1,backgroundColor:'white', marginTop: 10,
              marginBottom: 10}} />}
              keyExtractor={ (item,index) => item.id.toString() }
              onEndReached={ onEndReached }
            />
    </View>
);

