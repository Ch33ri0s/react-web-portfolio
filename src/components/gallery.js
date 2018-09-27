import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <div className="gallery">
                    <div className="gallery-image" onClick={() => window.open('https://simmer.io/@Ch33ri0s/box-drop')}>
                        <img src="https://i.postimg.cc/Px9tR1K4/Screenshot_2018-09-25_Unity_Web_GL_Player_Box_Drop.png" alt="img1" />
                    </div>

                    <div className="gallery-image" onClick={() => window.open('https://mirandacolorist.com/')}>
                        <img src="https://i.postimg.cc/ZKZ25739/Screenshot_2018-09-27_The_Hair_Colorist_Professional_Services.jpg" alt="img1" />
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