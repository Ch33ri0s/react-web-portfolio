import React, { Component } from 'react';

class Iconbar extends Component {
    render() {
        return (
            <div className="icon-bar">
                <a href="https://www.facebook.com/tenyson.partridge" className="facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/tenysonpartridge/" className="linkedin">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/tenyson11" className="instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        );
    }
}

export default Iconbar;