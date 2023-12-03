import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs, clearErrors } from '../../redux/actions/blogAction';
import Loader from '../../common/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate'
import { useAlert } from 'react-alert';
import ReactPaginate from 'react-paginate';
import { removeHTMLTags } from '../../utils/removeHTMLTags';
import ReactDOM from 'react-dom';


const BlogsCard = ({ itemsPerPage }) => {
  const alert = useAlert();
  const { blogs, error, loading, } = useSelector(state => state.blogs);
  const dispatch = useDispatch();
  const { data: blogData, links, meta } = blogs;

  console.log('meta', meta);


  const [currentBlogsPage, setCurrentBlogsPage] = useState(0);
  const [eventOffset, setEventOffset] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [update, setUpdate] = useState(0);
  const eventsPerPage = meta?.per_page;
  useEffect(() => {
    console.log("currentBlogsPage", currentBlogsPage)
    dispatch(getBlogs(currentBlogsPage + 1));

    console.log('hi.....');



    handlePageClick({ selected: currentBlogsPage });
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }


  }, [dispatch, alert, error, currentBlogsPage])


  useEffect(() => {
    console.log(`Loading events from      
      User requested page number2 -> ${meta?.from}, which is offset ${meta?.to}`
    );
    setCurrentBlogs(blogData);
  }, [blogData, currentBlogsPage]);


  const handlePageClick = (event) => {
    // console.log("meta",meta)
    console.log("event selected", event)

    setCurrentBlogsPage(event.selected);
    // const newOffset = event.selected * eventsPerPage;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}    
    //  `

    // );
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
            <div className="pagination-div" id="reactPaginate">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={parseInt(meta ? meta.last_page : 0)}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination modal-4"
                activeLinkClassName="active"
                previousLinkClassName="prev"
                nextLinkClassName="next"
                marginPagesDisplayed={2}

              />
            </div>

          </section>
        )}
    </div>
  );
}


export default BlogsCard;