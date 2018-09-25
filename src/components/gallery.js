import React, { Component } from 'react';

class Gallery extends Component {
    constructor() {
        super()

        this.onClickHandle.bind = this.onClickHandle.bind(this);
    }

    onClickHandle(){
        window.open('https://simmer.io/@Ch33ri0s/box-drop');
    }

    render() {
        return (
            <div className="projects" id="projects">
                <div className="gallery" onClick={this.onClickHandle}>
                    <div className="gallery-image">
                        <img src="https://i.postimg.cc/Px9tR1K4/Screenshot_2018-09-25_Unity_Web_GL_Player_Box_Drop.png" alt="img1" />
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