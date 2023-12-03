import React from "react";
import { Link } from "react-router-dom";
import RecentDonation from "../donate-sidebar/RecentDonation";

export default class AboutCampusextends extends React.Component {
  
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="donations-list">
          <div className="container">
            <div className="donations-list__inner">
              {/* Donations List Single */}
              <div className="donations-list__single">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="donations-list__right">
                      <div className="donations-list__content">
                        {/* <div className="donations-list__category">
                          <p>Education</p>
                        </div> */}
                        <h3 className="donations-list__title">
                          <a href="donation-details.html">Campus Tour</a>
                        </h3>
                        <p className="donations-list__text">
                          Aellentesque porttitor lacus quis enim varius sed
                          ipsum dnim veniam quis nos trud exercitation dolor
                          ullamco laboris nisi ut aliquip ex ea comaody
                          consequat duis aute irure dolor in voluptate lorem....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="donations-list__img">
                      <img
                        src={
                          publicUrl +
                          "assets/images/resources/donations-list-img-1.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Donations List Single */}
              <div className="donations-list__single">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="donations-list__img">
                      <img
                        src={
                          publicUrl +
                          "assets/images/resources/donations-list-img-2.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="donations-list__right">
                      <div className="donations-list__content">
                        {/* <div className="donations-list__category">
                          <p>medical</p>
                        </div> */}
                        <h3 className="donations-list__title">
                          <a href="donation-details.html">Powerful Alumni</a>
                        </h3>
                        <p className="donations-list__text">
                          Aellentesque porttitor lacus quis enim varius sed
                          ipsum dnim veniam quis nos trud exercitation dolor
                          ullamco laboris nisi ut aliquip ex ea comaody
                          consequat duis aute irure dolor in voluptate lorem....
                        </p>
                      </div>
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
}