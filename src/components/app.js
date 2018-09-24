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
            <img className="cover-img" src="https://images.pexels.com/photos/459642/pexels-photo-459642.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="image_cover" />
            <h1 className="h1">Tenyson C. Partridge</h1>
            <h2 className="h2">Developer & Designer</h2>
          </div>
          <Services/>
          <div className="main-img-divider">
            <img className="img-divider" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="img-divider" width="100%" height="600vh" />
          </div>
          <Gallery/>
          <h1 id="send-message-text">Shoot me a Message!</h1>
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
