import axios from 'axios';
import * as types from '../constants/actionTypes';



function dogRequest() {
    return {
        type: types.DOG_REQUEST,
        isLoading: true,
        error: null
    };
}

function dogSuccess(json) {
    return{
        type: types.DOG_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function dogFailure(json) {
    return {
        type: types.DOG_FAILURE,
        isLoading: false,
        error: json
    };
}


export function fetchDogs() {
    return (dispatch) => {
        dispatch(dogRequest());
        axios.get('https://dog.ceo/api/breed/hound/images')
        .then((response) => {
            return response;
        })
        .then((items) => dispatch(dogSuccess(items)))
        .catch((error) => dispatch(dogFailure(error)));
    };
}

function savedogImg(index) {
    return {
        type: types.SAVE_IMG,
        dogsSelected: index
    };
}

export function selectImg(index) {
  return (dispatch) => {
    dispatch(savedogImg(index));
  };
}
