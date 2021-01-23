import {decode as atob, encode as btoa} from 'base-64'


const apiPrefix = 'https://accounts.spotify.com/api';

// DO NOT FORGET TO INPUT YOUR CLIENTID AND CLIENT SECRET HERE
const clientId = '4a74aa9fd209469cba492ad9a5993a81';
const clientSecret = '30a173ca2f144089ae466c4eeb6d5920';


// step (4) here
const base64Cred = btoa(`${clientId}:${clientSecret}`);
console.log('base64 cred = ' + base64Cred);


export default  async () => {
    console.log ('...retrieving token...');
    const apiTokenUrl = `${apiPrefix}/token`;
    const params = {
        method: 'POST',
        headers: {
            Authorization: `Basic ${base64Cred}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials',
    };

    const res = await fetch(apiTokenUrl, params);
    const jsonObj = await res.json();
    const theToken = jsonObj.access_token;


    console.log ('Your token is = ' + theToken);
    return theToken;

}