import React, { Component } from 'react'
import SearchForm from "../../containers/SearchFormCont";
import MoviesList from "../../containers/MoviesListCont";
import '../../sass/components/_home.scss'


export default class Home extends Component {
    render() {
        return (
            <div className='homeWrapper'>
                <h1 className='header'>
                    MOVIE FOR MOOD
                </h1>
                <SearchForm/>
                <MoviesList />
            </div>
        )
    }
}
