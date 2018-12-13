import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';

export class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <section className="fon" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="jumbotron">
                  <img
                    className="img-fluid d-block mx-auto mb-5"
                    src="/img/logo.png"
                    alt="Magmer"
                  />
                  <h2>About this page</h2>
                  <p className="lead">
                    This is a great place to talk about your webpage. This
                    template is purposefully unstyled so you can use it as a
                    boilerplate or starting point for you own landing page
                    designs! This template features:
                  </p>
                  <ul>
                    <li>
                      Clickable nav links that smooth scroll to page sections
                    </li>
                    <li>
                      Responsive behavior when clicking nav links perfect for a
                      one page website
                    </li>
                    <li>
                      Bootstrap's scrollspy feature which highlights which
                      section of the page you're on in the navbar
                    </li>
                    <li>
                      Minimal custom CSS so you are free to explore your own
                      unique design options
                    </li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <Link
                      className="btn btn-outline-primary btn-lg mt-5"
                      to="/catalog"
                    >
                      Перейти в каталог
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fon-footer" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="jumbotron">
                  <h2>Contact us</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero odio fugiat voluptatem dolor, provident officiis, id
                    iusto! Obcaecati incidunt, qui nihil beatae magnam et
                    repudiandae ipsa exercitationem, in, quo totam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Magmer {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
