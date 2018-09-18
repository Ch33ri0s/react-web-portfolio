import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
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
        );
    }
}

export default Gallery;