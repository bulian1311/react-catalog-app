import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import CatalogButton from './CatalogButton';

export class Home extends Component {
  render() {
    return (
      <div className="landing">
        <Navbar />
        <section>
          <Logo />
          <div className="container">
            <div class="jumbotron mt-5">
              <h1 className="text-center">Navbar example</h1>
              <p className="lead text-center">
                This example is a quick exercise to illustrate how the
                top-aligned navbar works. As you scroll, this navbar remains in
                its original position and moves with the rest of the page.
              </p>
              <CatalogButton />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
