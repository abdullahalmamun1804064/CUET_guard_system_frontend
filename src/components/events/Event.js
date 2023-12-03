import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { getAllEvents, clearErrors } from '../../redux/actions/eventAction';
import Loader from '../../common/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';

const Events = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  const { events, error, loading } = useSelector(state => state.events);
  const dispatch = useDispatch();

  const [eventOffset, setEventOffset] = useState(0);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const eventsPerPage = 1;

  useEffect(() => {
    dispatch(getAllEvents());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  useEffect(() => {
    const endOffset = eventOffset + eventsPerPage;
    console.log(`Loading events from ${eventOffset} to ${endOffset}`);
    setCurrentEvents(events.slice(eventOffset, endOffset));
    setPageCount(Math?.ceil(events.length / eventsPerPage));
  }, [events, eventOffset]);



  const handlePageClick = (event) => {
    const newOffset = event.selected * eventsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setEventOffset(newOffset);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className="events-area_event events-area bg-color ptb-100">
          <div className="container py-5">
            <div className="row align-items-center">
              
                <div>
                  <div className="d-flex ">
                    <ul className="main-menu__list relevent d-flex  list-unstyled ">
                      <li>
                        <Link to={`#`}>
                          <p className="active pr-5 pb-5">Recent Event</p>
                        </Link>
                      </li>
                      <li>
                        <Link to={`#`}>
                          <p className={` px-5 pb-5`}> Past Event</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              <hr />
              <div className="">
                <div className="events-content  events-content_event">
                  <ul className="events-list">
                    {currentEvents.map((event, index) => (
                      <li key={index} className="d-flex">
                        <li className="d-flex  ">
                          <div className="events-date">
                            <span className="mb-2">01 May</span>
                            <span>2023</span>
                          </div>

                          <div>
                            {/* <span>Conference</span> */}
                            <h3>
                              <a href="event-details.html">
                                Universities admission conference 2023
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.
                            </p>

                            <a href="event-details.html" className="read-more">
                              Find out more
                              {/* <i className="ri-arrow-right-line"></i> */}
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ marginLeft: "0.4rem" }}
                              />
                            </a>
                          </div>
                          <div className="event_image">
                            <img src={publicUrl + "assets/images/resources/logo.png"} className="" alt="" />
                          </div>

                        </li>
                        <hr />
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
                <div className="pagination-div">
                <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                 pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="previous"
                renderOnZeroPageCount={null}     
                containerClassName="pagination modal-4"	
                activeLinkClassName="active"
                previousLinkClassName="prev"
                nextLinkClassName="next"
                marginPagesDisplayed={2}
                  
              />
              </div>
             
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
