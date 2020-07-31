import React, { Component } from "react";
import "../sass/utils/style.scss";
import '../sass/components/_about.scss'

export default class About extends Component {
  render() {
    return (
      <div className='about'>

        <h1> MOOVIE FOR MOOD </h1>
          <span>
            <p>movie search app which purpose is to find movie suggestions that are
            based on user's emotions or feelings. It gives a new way of finding
            a suitable movie proposition, matching to user's moods or atmoshpere
            they are in at the moment. Also, the goal of the app is to propose
            unique findings of movies you have never heard before and are
            definiately worth to watch, spreading at the same time knowlege of
            cinema history.</p>
          </span>
          <span>
          <p> After creating an account, you can create your profile or start to
            browse, adding propostions to a watchlist. Or you can just go for
            quick search. But first, express yourself!</p>
          </span>
      </div>
    );
  }
}
