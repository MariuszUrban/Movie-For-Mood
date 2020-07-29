import React from 'react';
import SearchForm from '../containers/SearchFormCont';
import {Provider} from 'react-redux';
import store from '../redux/store'
import Movies from '../containers/MoviesListCont'

export default class App extends React.Component {

  componentDidMount(){
    fetch("http://www.omdbapi.com/?apikey=a010aa1f&t={'guardian'}")
    .then(res=>res.json())
    .then(data=>{
      console.log('nasze filmy', data)
    })
  }

  render() {
    return (
      <Provider store={store}>
      <div>
        <h1>URBANATOR  </h1>
        <SearchForm />
        <Movies />
      </div>

      </Provider>
      
    )
  }
}


