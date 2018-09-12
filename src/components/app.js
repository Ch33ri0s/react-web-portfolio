import React, { Component } from 'react';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
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
        <div className="container">
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
          <div className="cover">
            <img className="cover-img" src="https://images.pexels.com/photos/459642/pexels-photo-459642.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="image_cover" />
            <h1 className="h1">Tenyson C. Partridge</h1>
            <h2 className="h2">Developer & Designer</h2>
          </div>

          <div className="service">

            <div className="service-style">
              <h2>Developer</h2>
              <hr />
              <p>Wordpress, HTML5, CSS & SCSS, JavaScript, React, C#, and Python.</p>
            </div>
            <div className="service-style">
              <h2>Designer</h2>
              <hr />
              <p>Proficient in Adobe Creative Suite and Creative Strategies.</p>
            </div>
            <div className="service-style">
              <h2>TESTING</h2>
              <hr />
              <p>Agile testing methodologies. Creating test plans, cases, processes. </p>
            </div>
          </div>

          <div className="main-img-divider">
            <img id="skills" className="img-divider" src="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="img-divider" width="100%" height="600vh" />
          </div>

          <div className="projects" id="projects">
            <div className="gallery">

              <div className="gallery-image">
                <img src="https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img1" />
              </div>

              <div className="gallery-image">
                <img src="https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&h=350" alt="img1" />
              </div>

              <div className="gallery-image">
                <img src="https://images.pexels.com/photos/265047/pexels-photo-265047.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img1" />
              </div>

              <div className="gallery-image">
                <img src="https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img1" />
              </div>

              <div className="gallery-image">
                <img src="https://images.pexels.com/photos/267484/pexels-photo-267484.jpeg?auto=compress&cs=tinysrgb&h=350" alt="img1" />
              </div>

              <div className="gallery-image">
                <img src="https://images.pexels.com/photos/838869/pexels-photo-838869.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="img1" />
              </div>
            </div>
          </div>

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
