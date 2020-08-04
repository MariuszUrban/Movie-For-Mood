import React, { Component } from 'react'
import { Fade } from '@material-ui/core';
import About from './About'

export default class AboutStyled extends Component {
    render() {
        return (
            <div>
                <Fade>
                    <About />
                </Fade>
            </div>
        )
    }
}
