import React, { useEffect } from "react";

const Club = () => {
  useEffect(() => {
    const $ = window.$;

    if ($(".club").length) {
      $(".club").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: true,
        dots: true,
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
            items: 4,
          },
          991: {
            items: 5,
          },
          1200: {
            items: 5,
          },
        },
      });
    }
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center pb-5">Clubs</h1>
          <div className="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel1 club">
            {/* Testimonial One single */}
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src={publicUrl + "assets/images/testimonial/club-1.png"}
                  alt=""
                />
              </div>
            </div>

            {/* Testimonial One single */}
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src={publicUrl + "assets/images/testimonial/club-2.png"}
                  alt=""
                />
              </div>
            </div>

            {/* Testimonial One single */}
            <div className="testimonial-one__single">
              <div className="testimonial-one__img">
                <img
                  src={publicUrl + "assets/images/testimonial/club-3.png"}
                  alt=""
                />
              </div>
            </div>
            {/* Testimonial One single */}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Club;
