import "../../sass/components/_about.scss";

import React from 'react'


export default function About() {
  
  return (
    <div  className="about" >
      <h1> MOOVIE FOR MOOD </h1>
      <span className="aboutSpan">
        <p>
          movie search app which purpose is to find movie suggestions that are
          based on user's emotions or feelings. It gives a new way of finding
          a suitable movie proposition, matching to user's moods or atmoshpere
          they are in at the moment. Also, the goal of the app is to propose
          unique findings of movies you have never heard before and which are
          definiately worth to watch.
        </p>
      </span>
      <span className="aboutSpan">
        <p>
          {" "}
          After creating an account, you can set up your profile and add
          movies to a watchlist, or just go for quick search. But first,
          express yourself!
        </p>
      </span>
      <button type="submit" className="btn">
        <a href="#"> Back to main</a>
      </button>
    </div>
  );
}



