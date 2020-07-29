import {GET_TITLE, GET_TITLE_SUCCESS, GET_TITLE_ERROR} from './actions'

const initialStat = {
    error: '',
    loading: false,
    movies: []
};

export default function searchReducer(state = initialStat, {type, payload}){
    if(type === GET_TITLE){
        return {
            ...state,
            loading: true
        }
    }
    if(type === GET_TITLE_SUCCESS){
        console.log(payload)
        return{
            ...state,
            loading: false,
            movies: payload,
        }
    }
    if(type === GET_TITLE_ERROR){
        return{
            ...state,
            loading: false,
            error: payload,
        }
    }

    return state;
}

// export default combineReducers({
//     movieTitleREDUCER: searchReducer,
// });