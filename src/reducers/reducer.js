import {
    DOG_REQUEST,
    DOG_SUCCESS,
    DOG_FAILURE,
    SAVE_IMG
} from '../constants/actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState.dogs, action) {
    switch (action.type) {
        case DOG_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
            };

        case DOG_SUCCESS:
            return {
              ... state,
              isLoading: false,
              error: null,
              data: action.data
            };

        case DOG_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.data
            };
        case SAVE_IMG:
            return {
              ...state,
              dogsSelected: [...state.dogsSelected, action.dogsSelected]
            };




        default:
            return state;
    }
}
