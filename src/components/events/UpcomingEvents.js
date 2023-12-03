import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UpcomingEvents = () => {
    let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <>
      {/* <!-- Start Events Area --> */}
      <section className="events-area bg-color ptb-100">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="events-content mr-15">
               
                <h2 className="text-center"> Upcoming events</h2>

                <ul className="events-list">
                  <li>
                    <div className="events-date">
                      <span className="mb-2">01 May</span>
                      <span>2023</span>
                    </div>

                    <span>Conference</span>
                    <h3>
                      <a href="event-details.html">
                        Universities admission conference 2023
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href="event-details.html" className="read-more">
                      Find out more
                      {/* <i className="ri-arrow-right-line"></i> */}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ marginLeft: "0.4rem" }}
                      />
                    </a>
                    <hr/>
                  </li>

                  <li>
                    <div className="events-date">
                      <span className="mb-2">02 May</span>
                      <span>2023</span>
                    </div>

                    <span>Conference</span>
                    <h3>
                      <a href="event-details.html">
                        History and culture open day conference 2023
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href="event-details.html" className="read-more">
                      Find out more
                      {/* <i className="ri-arrow-right-line"></i> */}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ marginLeft: "0.4rem" }}
                      />
                    </a>
                    <hr />

                  </li>

                  <li>
                    <div className="events-date">
                      <span className="mb-2">03 May</span>
                      <span>2023</span>
                    </div>

                    <span>Conference</span>
                    <h3>
                      <a href="event-details.html">
                        Undergraduate and postgraduate open days 2023
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <a href="event-details.html" className="read-more">
                      Find out more
                      {/* <i className="ri-arrow-right-line"></i> */}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ marginLeft: "0.4rem" }}
                      />
                    </a>

                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="events-timer ml-15">
                <div className="event-img">
                  <img src={publicUrl + "assets/images/project/project-1-2.jpg"
                  } alt="Image" />
                </div>

                <span>Next Event</span>

                <div id="timer">
                  <div id="days">08 Days</div>
                  <div id="hours">06 Hrss</div>
                  <div id="minutes">23 Mint</div>
                  <div id="seconds">20 Secs</div>
                </div>

           
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Events Area --> */}
    </>
  );
};

export default UpcomingEvents;
