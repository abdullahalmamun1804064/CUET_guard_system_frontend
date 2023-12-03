import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import latestNews from '../../db/latestNews.json';

const LatestNews = () => {
  const { data } = latestNews;
  let publicUrl = process.env.PUBLIC_URL + '/';

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="blog-three">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">Latest news</h2>
          </div>
          <Slider {...sliderSettings}>
            {data.map((post) => (
              <div key={post.id} className="col-xl-3 col-lg-3 wow fadeInUp px-2" data-wow-delay="100ms">
                {/* Blog Three Single */}
                <div className="blog-three__single">
                  <div className="blog-three__img">
                    <img src={publicUrl + post.url} alt="" />
                  </div>
                  <div className="blog-three__content">
                    <ul className="list-unstyled blog-three__meta">
                      <li><Link to={process.env.PUBLIC_URL + `/blog-details`}><i className="far fa-calendar"></i>{post.date}</Link></li>
                    </ul>
                    <h3 className="blog-three__title"><Link to={process.env.PUBLIC_URL + `/blog-details`}>{post.title}</Link></h3>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
