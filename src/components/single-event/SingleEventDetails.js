import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleEvent } from '../../redux/actions/eventAction';
import Loader from '../../common/Loader/Loader';
import { formatDateTimeWithAMPM } from '../../utils/timeDateFormate';

const SingleEventDetails = () => {
  const { id } = useParams();
  const { error, loading, event } = useSelector(state => state.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleEvent(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (!event) {
    return <div>No event found.</div>;
  }

  return (
    <div>
      {
        loading ? <Loader /> : (
          <section className="blog-details">

            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7">

                  <div className="blog-details__left">

                    <div className="blog-details__img">
                      <img src={event.image?.url} alt={event.title} /> 
                      <div className="blog-details__date">


                        <p> <i className="far fa-calendar"></i> {formatDateTimeWithAMPM(event.start_time)}</p>
                      </div>
                    </div>
                    <div className="blog-details__content">
                     
                      <h3 className="blog-details__title">{event.title}</h3>

                      <h3 className='pb-2'>Start time </h3>
                      <p> <i className="far fa-calendar pb-5"></i> {event.end_time ? formatDateTimeWithAMPM(event.start_time) : '-'}</p>

                      <h3 className='pb-2'>End time </h3>
                      <p> <i className="far fa-calendar pb-5"></i> {event.end_time? formatDateTimeWithAMPM(event.end_time) : '-'}</p>

                      <h3 className='pb-2'>Vanue </h3>
                      <p className="event-details__venue pb-5"><i className="fas fa-map-marker-alt"></i> {event.venue} </p>
                      
                      <h3 className='pb-2'>Description </h3>
                      <p className="blog-details__text-1 pb-5">{event.description} </p>

                    </div>

                    <div className="author-one">
                      <div className="author-one__image">
                        <img src={event.user_id?.avatar?.url} alt={event.user_id?.name} />
                      </div>
                      <div className="author-one__content">
                        <p className='mb-5'>Created by</p>
                        <h3>{event.user_id?.name}</h3>

                      </div>
                    </div>

                  </div>

                </div>
              
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default SingleEventDetails;
