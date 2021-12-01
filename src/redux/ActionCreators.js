import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';



export const addComment = (campsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    campsiteId: campsiteId, 
    rating: rating,
    //es6 shorthanded property name, when the property name and its value have the same name.
    author,
    text
  }
});

/* Redux Thunk with nested function and returns a function instead of an action object */
export const fetchCampsites = () => dispatch => {

  dispatch(campsitesLoading());

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES));
  }, 1000);
}
//Standart action creator that returns an action object.
export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess
});

export const addCampsites = campsites => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites
});