import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleJobPost } from '../../redux/actions/gatePassPostAction';
import Loader from '../../common/Loader/Loader';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate';

const GatePassDetailsComponent = () => {
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
    return <div>No Post found.</div>;
  }

  console.log(singleJobPost);
  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="blog-details">

            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">

                  <div className="blog-details__left">

                    <div className="blog-details__content">

                      <h2 className="blog-details__title">{singleJobPost?.post?.title}</h2>

                      <h4 className='pb-2'>Description : </h4>
                      <p className="blog-details__text-1 pb-5">{singleJobPost?.post?.description} </p>

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

export default GatePassDetailsComponent;