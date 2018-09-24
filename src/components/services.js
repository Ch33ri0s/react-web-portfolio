import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="service">
                <div id="skills" className="service-style">
                    <h2>Develop</h2>
                    <hr />
                    <p>Wordpress, HTML5, CSS & SCSS, JavaScript, MySQL, React, C#, and Python.</p>
                </div>
                <div className="service-style">
                    <h2>Design</h2>
                    <hr />
                    <p>Adobe Creative Suite, GIMP, Sketch and Creative Strategies.</p>
                </div>
                <div className="service-style">
                    <h2>Testing</h2>
                    <hr />
                    <p>Efficient test plans, cases, processes, performance. </p>
                </div>
            </div>

        );
    }
}

export default Services;