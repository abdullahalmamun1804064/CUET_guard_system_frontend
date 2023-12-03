import React from 'react';
import { Link } from 'react-router-dom';

export default class MissionAndVission extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
          <>
            <section className="feature-two">
              <div className="container">
                <div className="section-title text-center">
                  {/* <span className="section-title__tagline">
                    Our Responsibility
                  </span> */}
                  <h2 className="section-title__title">
                    Mission & Vision
                  </h2>
                  <hr 
                  className="horizontal"
                  style={{
                    height: '3px'
                  }}
                  />
                </div>
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-3 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    {/* Feature Two Single */}
                    <div className="feature-two__single">
                      <div className="feature-two__img">
                        <img
                          src={
                            publicUrl +
                            "assets/images/CUET_View/15_august.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="feature-two__content">
                        <div className="feature-two__top">
                          <div className="feature-two__icon">
                            <span className="icon-help"></span>
                          </div>
                          <h3 className="feature-two__title">
                            <Link to={process.env.PUBLIC_URL + `/about`}>
                              Help Current Students
                            </Link>
                          </h3>
                        </div>
                        <p className="feature-two__text">
                          While building out a new website you literally no idea
                          of where to start.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    {/* Feature Two Single */}
                    <div className="feature-two__single">
                      <div className="feature-two__img">
                        <img
                          src={
                            publicUrl +
                            "assets/images/CUET_View/15_august_2.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="feature-two__content">
                        <div className="feature-two__top">
                          <div className="feature-two__icon">
                            <span className="icon-donation-1"></span>
                          </div>
                          <h3 className="feature-two__title">
                            <Link to={process.env.PUBLIC_URL + `/about`}>
                              Scholarship
                            </Link>
                          </h3>
                        </div>
                        <p className="feature-two__text">
                          While building out a new website you literally no idea
                          of where to start.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    {/* Feature Two Single */}
                    <div className="feature-two__single">
                      <div className="feature-two__img">
                        <img
                          src={
                            publicUrl +
                            "assets/images/CUET_View/15_august.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="feature-two__content">
                        <div className="feature-two__top">
                          <div className="feature-two__icon">
                            <span className="icon-heart"></span>
                          </div>
                          <h3 className="feature-two__title">
                            <Link to={process.env.PUBLIC_URL + `/about`}>
                              Build Our Community
                            </Link>
                          </h3>
                        </div>
                        <p className="feature-two__text">
                          While building out a new website you literally no idea
                          of where to start.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-3 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    {/* Feature Two Single */}
                    <div className="feature-two__single">
                      <div className="feature-two__img">
                        <img
                          src={
                            publicUrl +
                            "assets/images/CUET_View/15_august_2.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="feature-two__content">
                        <div className="feature-two__top">
                          <div className="feature-two__icon">
                            <span className="icon-help"></span>
                          </div>
                          <h3 className="feature-two__title">
                            <Link to={process.env.PUBLIC_URL + `/about`}>
                              Help Our University
                            </Link>
                          </h3>
                        </div>
                        <p className="feature-two__text">
                          While building out a new website you literally no idea
                          of where to start.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
}