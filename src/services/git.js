import axios from 'axios';
import { getAuthToken } from './auth';

const baseUrl = `http://apiproxy.nl-demo.com/github/users`;
const searchUrl = `http://apiproxy.nl-demo.com/github/users`;
const searchdata=`http://apiproxy.nl-demo.com/github/search/users`

const axiosOptions = {
    timeout: 10000
};

const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth': getAuthToken()
    }
});

export function getUsers(value) {
    console.log('value',value)
    return axios.get(`${baseUrl}?page=1&per_page=10`, getAxiosAuthenticatedEnpointOptions())
        .then( response => response.data )
       
};
export function getUsersSearch(value){
    return axios.get(`${searchdata}?q=${value}`, getAxiosAuthenticatedEnpointOptions())
        .then( response => response.data.items);
            
}
export function getUsersDetails( id ) {
    return axios.get( `${searchUrl}/${id}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data );
}

export function getUsersRepo( id ) {
    return axios.get( `${baseUrl}/${id}/repos`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data );
}

// export function getUserPagination (page){
//     return axios.get( `` , getAxiosAuthenticatedEnpointOptions() )
//     .then(response => response.data);
// }