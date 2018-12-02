import React, { Component } from 'react';
import Navbar from './Navbar';

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section>
          <img
            class="img-fluid d-block mx-auto"
            src="http://placehold.it/200x200&text=Logo"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="mt-5">The Big Picture</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt voluptates rerum eveniet sapiente repellat esse,
                  doloremque quod recusandae deleniti nostrum assumenda vel
                  beatae sed aut modi nesciunt porro quisquam voluptatem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
