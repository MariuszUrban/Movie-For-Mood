import React, { Component } from 'react'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: ''
        }
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }

    getMovie = (e) => {
        e.preventDefault();
        const {title} = this.state;
        const {searchToProps} = this.props // to jest to - searchToProps
        searchToProps(title);
    }
    
    render() {
        return (
            <form onSubmit={this.getMovie}>
                <input 
                type='text' 
                placeholder='title' 
                value={this.state.title} 
                onChange={this.handleChange}></input>
                <button type='submit'>Szukaj</button>
            </form>
        )
    }
}
