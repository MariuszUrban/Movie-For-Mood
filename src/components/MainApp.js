import React from 'react';
import SearchForm from '../containers/SearchFormCont';
import {Provider} from 'react-redux';
import store from '../redux/store'
import Movies from '../containers/MoviesListCont'

export default class App extends React.Component {

 
  render() {
    return (
      <Provider store={store}>
      <div>
        <h1>MOVIE BY MOOD </h1>
        <SearchForm />
        <Movies />
      </div>

      </Provider>
      
    )
  }
}


