import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Search from '../Components/Search'
import ItemList from '../Components/ItemList'
import spotifyToken from "./spotifyToken";
import spotifySearch from "./spotifySearch";
import LoginScreen from './LoginScreen';
const PAGE=10;

export default class SearchSpotify extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            offset: 0,
            isFetching: false,
            query: 'Led Zeppelin',
            token: null,
        };

    }
    
    async componentDidMount() {
       await this.refreshToken();
        await this.loadNextPage();
    }
    async refreshToken() {
        const newToken = await spotifyToken();
        this.setState( {
            token: newToken,
        });
    }
    async loadNextPage() {

        if (this.state.isFetching) {
            console.log('Fetching In Progress');
            return;
        }

        this.setState({ isFetching: true });

        const newItems = await spotifySearch({
            offset: this.state.offset,
            limit: PAGE,
            q: this.state.query,
            token: this.state.token,
        });
        console.log('the items returned are \n' , newItems);
        console.log('Search completed.');

        this.setState({
            isFetching: false,
            offset: this.state.offset + PAGE,
            items: [
                ...this.state.items,
                ...newItems,
            ],
        });


    }
    handleSearchChange(text){
        console.log('the value to search is ', text);
        this.setState({
            query: text,
            items: [],
            offset: 0,
        }, () => {
            this.loadNextPage();
        });
    }

    handleEndReached() {
        this.loadNextPage();
    }
    render() {

        const { items, isFetching } = this.state;

            return (
                <View style={styles.container}>
                    <LoginScreen/>
                    <Text style={styles.text}>Spotify</Text>
                    <Search onChange={text => this.handleSearchChange(text)} />
                    {
                        (isFetching && items.length === 0)?null:
                            <ItemList items={items} onEndReached={ () => this.handleEndReached() } />
                    }
                </View>
            );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // light brown yellow 
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        
        
    },
    text: {
        padding:20,
        fontSize:50,
        backgroundColor:"black", 
        color:'white',
        textAlign:"center",
        fontFamily: "Verdana",
        

    }
});