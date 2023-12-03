import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const JobCard = () => {
  useEffect(() => {
    const $ = window.$;

    if ($(".testimonial-one__carousel").length) {
      $(".testimonial-one__carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplayTimeout: 2000,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          991: {
            items: 4,
          },
          1200: {
            items: 4,
          },
        },
      });
    }
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <section className="">
        <div className="container">
          <h1 className="text-center p-5 mt-3 display-1 text-bold font-weight-bold">
            Recent Jobs
          </h1>
          
          <div className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel">
            {/* Testimonial One single */}
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src={
                    publicUrl + "assets/images/testimonial/testimonial-1-1.jpg"
                  }
                  alt=""
                />
                {/* <div className="testimonial-one__quote">
                  <span className="fas fa-quote-left"></span>
                </div> */}
              </div>
              <h6 className=" m-3">
                Urgently Need Five Data Center Specialist
              </h6>
              <p className="">
                Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                incididunt ut labore et dolore aliqua.
              </p>

              <a href="#" className="btn btn-success m-3 mt-4">
                View Job
              </a>
            </div>

            {/* Testimonial One single */}
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src={
                    publicUrl + "assets/images/testimonial/testimonial-1-2.jpg"
                  }
                  alt=""
                />
                {/* <div className="testimonial-one__quote">
                  <span className="fas fa-quote-left"></span>
                </div> */}
              </div>
              <h6 className=" m-3">
                Urgently Need Five Data Center Specialist
              </h6>
              <p className="">
                Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                incididunt ut labore et dolore aliqua.
              </p>

              <a href="#" className="btn btn-success m-3 mt-4">
                View Job
              </a>
            </div>

            {/* Testimonial One single */}
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src={
                    publicUrl + "assets/images/testimonial/testimonial-1-3.jpg"
                  }
                  alt=""
                />
                {/* <div className="testimonial-one__quote">
                  <span className="fas fa-quote-left"></span>
                </div> */}
              </div>
              <h6 className=" m-3">
                Urgently Need Five Data Center Specialist
              </h6>
              <p className="">
                Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor
                incididunt ut labore et dolore aliqua.
              </p>

              <a href="#" className="btn btn-success m-3 mt-4">
                View Job
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn  ">
            All Job List
          </Link>
        </div>
      </section>
    </>
  );
};

export default JobCard;
