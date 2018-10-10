import React, { Component } from 'react';
import Contact from './contact';
import Navbar from './navbar';
import Iconbar from './iconbar';
import Gallery from './gallery';
import Services from './services';

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <Iconbar/>
        <div className="container">
          <Navbar />
          <div className="cover">
            <img className="cover-img" src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="image_cover" />
            <div className="header-container">
              <h1 className="h1">Tenyson C. Partridge</h1>
              <h2 className="h2">Developer & Designer</h2>
            </div>
          </div>
          <Services/>
          <div className="main-img-divider">
            <div className="quote">
            <em>" The more you know,
            the more you know
            you don't know. " <br/>
            <br/>~ Aristotle</em></div>
          </div>
          <Gallery/>
          <h1 id="send-message-text">Shoot me a message!</h1>
          <Contact />
          <div className="footer">
            <hr />
            <ul>
              <li>
                <a id="up-arrow" href="#">
                  <i className="fas fa-arrow-circle-up"></i>
                </a>
                <p>Powered by Tenyson Partridge</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
