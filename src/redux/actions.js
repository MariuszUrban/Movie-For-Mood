export const GET_TITLE = 'GET_TITLE';
export const GET_TITLE_SUCCESS = 'GET_TITLE_SUCCESS';
export const GET_TITLE_ERROR = 'GET_TITLE_ERROR';


export const getTitle = () => {
    return {
        type: GET_TITLE,
    }
}

export const getTitleSuccess = (response) => {
    return {
        type: GET_TITLE_SUCCESS,
        payload: response
    }
}

export const getTitleError = (error) => {
    return {
        type: GET_TITLE_ERROR,
        payload: error
    }
}


export const fetchData = (title) => (dispatch) => {
    dispatch(getTitle());
    fetch(`http://www.omdbapi.com/?apikey=a010aa1f&s=${title}&page=2`) // tutaj zmienna odpowiedzialna za tytuł filmu
    .then((response) => {
         return response.json()
     })
     .then(data => {
        dispatch(getTitleSuccess(data.Search));
     })
     .catch((error) => {
        dispatch(getTitleError(error));
     })
}