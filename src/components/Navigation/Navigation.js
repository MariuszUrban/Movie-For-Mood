import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";
import "../../sass/components/_navigation.scss";

export default class Navigation extends Component {


    render() {
        const active = { color: " #083c4d", fontWeight: "bold" };

        return (
            <div>
                <nav className="mainNav">
                  <ul className="list">
                    <li>
                      <Link exact to="/" activeStyle={active}>
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link  to="/watchlist" activeStyle={active}>
                        WATCHLIST
                      </Link>
                    </li>
                    <li>
                      <Link to="/signin" activeStyle={active}>
                        SIGN IN
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" activeStyle={active}>
                        ABOUT
                      </Link>
                    </li>
                  </ul>
                </nav>
            </div>
        )
    }
}
