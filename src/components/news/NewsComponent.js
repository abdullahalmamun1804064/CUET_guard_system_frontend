import React from "react";
import latestNews from "../../db/latestNews.json";
import { Link } from "react-router-dom";

const NewsComponent = () => {
  const { data } = latestNews;
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <section className="blog-three">
      <div className="container">
        <div className="row">
          {data.map((post, index) =>
            index === 0 ? (

              
              <div
                key={post.id}
                className="col-xl-6 col-lg-6 wow fadeInUp px-2"
                data-wow-delay="100ms"
              >
                <Link to={process.env.PUBLIC_URL + `/news-details`} className="news_big_title">
                  {post.title}
             
                <div className="blog-three__single">
                  <div className="blog-three__img">
                    <img src={publicUrl + post.url} alt="" />
                  </div>
                  <div className="blog-three__content news_big_card">
                    <ul className="list-unstyled blog-three__meta">
                      <li>
                        
                          <span className="news_big_clander">
                            <i className="far fa-calendar pr-2"></i>
                            {post.date}
                          </span>
                      </li>
                    </ul>
                    <h3 className="blog-three__title ">
                        <span className="news_big_title"> {post.title}</span>

                    </h3>
                  </div>
                  </div>
                     </Link>
              </div>
            ) : (
              <div
                key={post.id}
                className="col-xl-3 col-lg-3 wow fadeInUp px-2"
                data-wow-delay="100ms"
                >
                  <Link to={process.env.PUBLIC_URL + `/news-details`} className="news_big_title">
                    {post.title}
                <div className="blog-three__single">
                  <div className="blog-three__img">
                    <img src={publicUrl + post.url} alt="" />
                  </div>
                  <div className="blog-three__content">
                    <ul className="list-unstyled blog-three__meta">
                      <li>
                     
                            <span>
                              <i className="far fa-calendar pr-2"></i>
                              {post.date}
                            </span>
                      </li>
                    </ul>
                    <h3 className="blog-three__title">
                       <span> {post.title}</span>
                    </h3>
                  </div>
                    </div>
                    </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsComponent;
