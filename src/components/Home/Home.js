import React, { Component } from 'react'
import SearchForm from "../../containers/SearchFormCont";
import MoviesList from "../../containers/MoviesListCont";
import '../../sass/components/_home.scss'


export default class Home extends Component {

constructor(props) {
    super(props)

    this.state = {
         
    }
}


    render() {
        return (
            <div className='homeWrapper'>
                <SearchForm props={this.props}/>
                <MoviesList />
            </div>
        )
    }
}
