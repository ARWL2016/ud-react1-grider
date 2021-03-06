import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null }; // the array of posts and an active post

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POST: 
    return {...state, post: action.payload.data };
  case FETCH_POSTS:
    return {...state, all: action.payload.data }; //api response

  default:
    return state;
  }
}