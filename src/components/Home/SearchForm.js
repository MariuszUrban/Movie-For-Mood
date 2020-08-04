import React, { Component } from "react";
import {adjectives}  from '../Search/Adjectives'
import '../../sass/components/_searchForm.scss'
export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      adjectives: adjectives,
    };
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  getMovie = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { searchToProps } = this.props;
    const { adjectives } = this.state;
    const adj = adjectives.map((v) => v.toLowerCase());
    const adjLow = adj.includes(title);
    const adjUp = adjectives.includes(title);
    console.log("ADJ ", adjUp);
    if (adjLow && !adjUp) {
      searchToProps(title);
    }
  };

  searchRandom = () => {
    const { adjectives } = this.state;
    const random = adjectives[Math.floor(Math.random() * adjectives.length)];
    console.log("RANDOM", random);
    const { searchToProps } = this.props;
    searchToProps(random);
  };

  render() {
    return (
      <div className='searchWrapper'>
        <form 
        onSubmit={this.getMovie}
        className='formWrapper'
        >
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
          <button className='btn search' type="submit">Search</button>
          <button  className='btn search'type="button" onClick={this.searchRandom}>
            Random search
          </button>
        </form>
      </div>
    );
  }
}
