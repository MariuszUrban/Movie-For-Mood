import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Navigation from './Navigation';
import '../../sass/components/_hamburger.scss'

export default class HamburgerNav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             open: false, 
        }
    }
    
    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div className='navWrapper'>                
                <div className='hamburgerWrapper'>

                    <HamburgerMenu 
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={25}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        color='#e1ebe3'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>
                


                {this.state.open ? 
                <div className='listWrapper'><Navigation /></div>
                 : 
                <h1 className='navHeader'>MOVIE FOR MOOD</h1>}

            </div>
        )
    }
}
