import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDateTimeWithAMPM } from "../../utils/timeDateFormate";


import { useDispatch, useSelector } from 'react-redux';
import { getAllJobPosts, getSingleJobPost, clearErrors } from '../../redux/actions/jobPostAction';
import Loader from '../../common/Loader/Loader';

const AllApprovePost = () => {
  const { jobPosts, error, loading, } = useSelector(state => state.jobpost);
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllJobPosts());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, error])

  console.log(jobPosts);

  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="events-area_event events-area bg-color ptb-100">
            <div className="container">
              <div>
                <h1 className="text-center pt-5">All Approve Application</h1><hr />
              </div>
              <div className="row align-items-center">
                <div className="">
                  <div className="events-content events-content_event">
                    <ul className="events-list">
                      {jobPosts?.jobPosts?.map((post, index) => (
                        <li key={index} className="d-flex my-5 pb-3 ">
                          <div className="events-date">
                            <span className="mb-2">{formatDateTimeWithAMPM(post?.date).slice(0, 3)}</span>
                            <span>{formatDateTimeWithAMPM(post?.date).slice(9,16)}</span>
                          </div>

                          <div>
                            <h3>
                              <a href="event-details.html">
                                {post?.title}
                              </a>
                            </h3>
                            <p>
                              {post?.description?.slice(0, 250)}
                            </p>

                            <Link to={`event-details/${post.id}`} className="read-more">
                              Find out more
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ marginLeft: "0.4rem" }}
                              />
                            </Link>
                          </div>
                        
                        </li>
                     
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
  )
}

export default AllApprovePost