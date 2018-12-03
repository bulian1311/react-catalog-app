import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

export class About extends Component {
  render() {
    return (
      <div className="landing">
        <Navbar />
        <section>
          <Logo />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="mt-5">About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
