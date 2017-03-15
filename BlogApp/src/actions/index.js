import axios from 'axios'; 

export const FETCH_POSTS = 'FETCH_POSTS'; 

const ROOT_URL = 'http://reduxblog.heroku.com/api';
const API_KEY = '?key=hsaidfsjchskng' ; 

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    
    return {
        type: FETCH_POSTS, 
        payload: request
    };
}