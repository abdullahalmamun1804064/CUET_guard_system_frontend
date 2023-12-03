import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleJobPost } from '../../redux/actions/jobPostAction';
import Loader from '../../common/Loader/Loader';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate';

const SingleJobPost = () => {
  const { id } = useParams();
  const { error, loading, singleJobPost } = useSelector(state => state.jobpost);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleJobPost(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (!singleJobPost) {
    return <div>No Job Post found.</div>;
  }

  console.log(singleJobPost);
  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="blog-details">

            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7">

                  <div className="blog-details__left">

                    {/* <div className="blog-details__img">
                      <img src={event.image?.url} alt={event.title} />
                      <div className="blog-details__date">


                        <p> <i className="far fa-calendar"></i> {formatDateTimeWithAMPM(event.start_time)}</p>
                      </div>
                    </div> */}
                    <div className="blog-details__content">

                      <h3 className="blog-details__title">{singleJobPost?.jobPost?.title}</h3>

                      <h3 className='pb-2'>Link </h3>
                      <Link to={singleJobPost?.jobPost.applicationUrl} target="_blank" className="blog-link">
                        <p className="event-details__venue pb-5">
                          <i className="fas fa-external-link-alt ml-2"></i> {singleJobPost?.jobPost.applicationUrl}
                        </p>
                      </Link>
                      <h3 className='pb-2'>Description </h3>
                      <p className="blog-details__text-1 pb-5">{singleJobPost?.jobPost.description} </p>

                    </div>

                    <div className="author-one">
                      <div className="author-one__image">
                        <img src={singleJobPost?.jobPost?.postedBy?.avatar?.url} alt={singleJobPost.user_id?.name} />
                      </div>
                      <div className="author-one__content">
                        <p className='mb-5'>Created by</p>
                        <h3>{singleJobPost?.jobPost?.postedBy?.name}</h3>

                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </section>
        )}
    </div>
  )
}

export default SingleJobPost