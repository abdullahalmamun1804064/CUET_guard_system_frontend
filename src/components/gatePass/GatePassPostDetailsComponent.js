import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleJobPost } from '../../redux/actions/gatePassPostAction';
import Loader from '../../common/Loader/Loader';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate';

const GatePassDetailsComponent = () => {
  const { id } = useParams();
  const { loading, singleJobPost } = useSelector(state => state.jobpost);
  const { user } = useSelector(state => state.auth);


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

  console.log(user);
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

                      <h4 className='pb-2'>Date : </h4>
                      <p className="blog-details__text-1 pb-4">{formatDateTimeWithAMPM(singleJobPost?.post?.date) } </p>

                      <h4 className='pb-2'>Description : </h4>
                      <p className="blog-details__text-1 pb-4">{singleJobPost?.post?.description} </p>

                    </div>

                  </div>

                </div>
                <div>
                  <h4 className='pb-2'>Application From </h4>
                  <p className="blog-details__text-1 pb-2">{singleJobPost?.post?.postedBy?.name
                  } </p>

                </div>

                {singleJobPost?.post?.isApprove === "no" && user?.role === "officer" ?
                  <div className='p-5 d-flex align-items-center justify-content-center bg-light'>
                    <Link to="#" className='btn btn-outline-primary mx-2'> Approve </Link>
                    <Link to="#" className='btn btn-outline-danger mx-2'> Cancel </Link>
                  </div>
                : <></>}
              

              </div>
            </div>
          </section>
        )}
    </div>
  )
}

export default GatePassDetailsComponent;