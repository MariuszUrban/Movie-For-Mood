import React, { Component } from 'react'
import SearchForm from "../containers/SearchFormCont";
import MoviesList from "../containers/MoviesListCont";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    MOVIE FOR MOOD
                </h1>
                <SearchForm/>
                <MoviesList />
            </div>
        )
    }
}
