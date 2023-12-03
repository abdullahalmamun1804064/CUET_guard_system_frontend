import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs, clearErrors } from '../../redux/actions/blogAction';
import Loader from '../../common/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate'
import { useAlert } from 'react-alert';
import ReactPaginate from 'react-paginate';
import { removeHTMLTags } from '../../utils/removeHTMLTags';
import Pagination from "react-js-pagination";

const BlogsCardTwo = () => {
  const alert = useAlert();
  const { blogs, error, loading, } = useSelector(state => state.blogs);
  const dispatch = useDispatch();
  const { data: blogData, links, meta } = blogs;

  console.log('meta', meta);


  const [currentBlogsPage, setCurrentBlogsPage] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState([]);

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    console.log("currentBlogsPage", currentBlogsPage)
    dispatch(getBlogs(currentBlogsPage ));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, error, currentBlogsPage])

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="recent-event">
            <div className="container">

              <div className="row">
                {currentBlogs?.map((blog) => (
                  <div className="recent-event__single  col-lg-6 wow fadeInUp " data-wow-delay="100ms" key={blog.id}>
                    <div className="recent-event__img ">
                      <img src={blog.image} alt="" />
                      <div className="recent-event__btn-box">
                        <Link to={`/blogs/${blog.id}`} className="thm-btn recent-event__btn">Read More</Link>
                      </div>
                    </div>
                    <div className="recent-event__content">
                      <ul className="list-unstyled recent-event__meta">
                        <li>
                          <p> <span className="icon-calendar"></span> {formatDateTimeWithAMPM(blog.date)?.slice(0, 16)}</p>
                        </li>
                        <li>
                          <p> <span className="icon-back-in-time"></span> {formatDateTimeWithAMPM(blog.date)?.slice(19)} </p>
                        </li>
                      </ul>
                      <h3 className="recent-event__title"><Link to={`/blogs/${blog.id}`}>{blog.title?.slice(0, 35)} {blog?.title?.length >= 36 ? "..." : ""}</Link></h3>
                      <p className="recent-event__text justyfy-content" >{removeHTMLTags(blog.description).slice(0, 90)} ...</p>

                    </div>
                  </div>
                ))}

              </div>
            </div>
            <div className="pagination-div">
              <div>
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={2}
                  totalItemsCount={parseInt(meta ? meta.last_page : 0)}
                  pageRangeDisplayed={3}
                  onChange={handlePageChange}
                />
              </div>
            </div>

          </section>
        )}
    </div>
  );
};

export default BlogsCardTwo;

