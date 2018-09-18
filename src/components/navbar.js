import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li>
                        <a className="nav-bar-text" href="#">Home</a>
                        <a className="nav-bar-text" href="#skills">Skills</a>
                        <a className="nav-bar-text" href="#projects">Projects</a>
                        <a className="nav-bar-text" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;