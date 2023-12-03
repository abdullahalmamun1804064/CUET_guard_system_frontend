import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllJobPosts,getSingleJobPost, clearErrors } from '../../redux/actions/jobPostAction';
import Loader from '../../common/Loader/Loader';
import SingleJobCard from './SingleJobCard';
import { useAlert } from 'react-alert';


const JobPostOne = () => {
  const alert = useAlert();
  const { jobPosts, error, loading, } = useSelector(state => state.jobpost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobPosts());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, error])




  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="blog-page-V-1">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">Our Blog</span>
                <h2 className="section-title__title">Latest News & Update.</h2>
              </div>
              <div className="row">
              

                {jobPosts?.jobPosts?.map(jobpost => (
                  <div key={jobpost._id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="100ms">

                   <SingleJobCard jobpost={jobpost} />
                  </div>
                ))}

              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="blog-page__pagination">
                    <ul className="pg-pagination list-unstyled">
                      <li className="count"><a href="#">1</a></li>
                      <li className="count"><a href="#">2</a></li>
                      <li className="count"><a href="#">3</a></li>
                      <li className="next">
                        <a href="#" aria-label="Next"><i className="fa fa-angle-right"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
  );
}

export default JobPostOne;
