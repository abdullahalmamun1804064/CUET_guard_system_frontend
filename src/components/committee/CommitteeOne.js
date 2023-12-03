import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getcommittee, clearErrors } from '../../redux/actions/committeeAction';
import Loader from '../../common/Loader/Loader';

const CommitteeOne = () => {
  const { committee, error, loading, } = useSelector(state => state.committee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcommittee());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

  }, [dispatch, alert, error])

// console.log(committee);

  return (
     <div>
            {
                loading ? <Loader /> : (
          <section className="team-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">Committee</span>
                <h2 className="section-title__title">Meet Our Committee.</h2>
              </div>
              <div className="row">
                {committee.map(committeeMember => (
                  <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms" key={committeeMember?._id}>
                  {/* Team One Single */}
                  <div className="team-one__single">
                    <div className="team-one__img">
                        <img src={committeeMember?.members?.avatar.url} alt={committeeMember?.members?.name} />
                    </div>
                    <div className="team-one__content">
                        <h4 className="team-one__name"><Link to={`/member-details/${committeeMember?.members?._id}`}>{committeeMember?.members?.name}</Link></h4>
                        <p className="team-one__title">{committeeMember?.designation}</p>
                        <p className="team-one__title"><b>{committeeMember?.start_date} - {committeeMember?.end_date}</b></p>
                      <div className="team-one__social">
                          <Link to={`/member-details/${committeeMember?.members?._id}`}>  <i className="far fa-envelope"></i></Link>
                        {committeeMember?.members?.linkedin && <Link to={committeeMember?.members?.linkedin} target='blank'>  <i className="fab fa-linkedin"></i></Link>}
                        {/* <Link to="/"><i className="fab fa-facebook"></i></Link>
                        <Link to="/"><i className="fab fa-pinterest-p"></i></Link>
                        <Link to="/"><i className="fab fa-instagram"></i></Link> */}
                      </div>
                    </div>
                  </div>
                </div>
                ))}
                

              </div>
            </div>
          </section>
                )}
        </div>
    
    
  );
}

export default CommitteeOne;
