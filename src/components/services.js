import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="service">

                <div id="skills" className="service-style">
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
                    <p>Agile testing, test plans, cases, processes. </p>
                </div>
            </div>

        );
    }
}

export default Services;