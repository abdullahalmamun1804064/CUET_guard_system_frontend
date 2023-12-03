

import React from 'react';
import { Link } from 'react-router-dom';

const EventThree = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  
  return (
    <>
      <section className="project-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Causes Events</span>
            <h2 className="section-title__title">Best events</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                <img src={publicUrl +  "assets/images/CUET_View/australia_partnership.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">Our Best Projects</p>
                    <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                  </div>
                </div>
              </div>
              <div className="project-one__single">
                <div className="project-one__img">
                <img src={publicUrl +  "assets/images/CUET_View/alumni_reunion_aus.png"} alt="" />

                  <div className="project-one__content">
                    <p className="project-one__sub-title">Our Best Projects</p>
                    <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                <img src={publicUrl +  "assets/images/CUET_View/alumni_reunion_aus_2.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">Our Best Projects</p>
                    <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                  </div>
                </div>
              </div>
              <div className="project-one__single">
                <div className="project-one__img">
                <img src={publicUrl +  "assets/images/CUET_View/15_august_2.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">Our Best Projects</p>
                    <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              {/* Project One Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                <img src={publicUrl +  "assets/images/CUET_View/15_august.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">Our Best Projects</p>
                    <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                  </div>
                </div>
              </div>
              <div className="project-one__single">
                <div className="project-one__img">
                <img src={publicUrl +  "assets/images/CUET_View/21_university_day.jpg"} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">Our Best Projects</p>
                    <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default EventThree;
