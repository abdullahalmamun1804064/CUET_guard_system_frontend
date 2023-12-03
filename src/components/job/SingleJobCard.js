import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { deleteJobPost,updateJobPost } from '../../redux/actions/jobPostAction';



const SingleJobCard = ({ jobpost }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [jobpostId, setJobPostId] = useState("");




  useEffect(() => { }, []);
  

  const handleDelete = async () => {

    try {
      await dispatch(deleteJobPost(jobpostId, user?._id ));
      setIsFormSubmitted(!isFormSubmitted);
      setShowDeleteModal(!showDeleteModal);
      navigate("/jobs");
    
    } catch (error) {
      console.error('Error Delete comment:', error);
    }

  };

  const clickDeleteButton = (jobPostId, e) => {
    e.preventDefault();
    setJobPostId(jobPostId);
    setShowDeleteModal(!showDeleteModal);
    setIsFormSubmitted(!isFormSubmitted);
 
  }

  // console.log(jobpost);

  return (
    <>
      <section className="">
        <div className="container">
          <div className="testimonial-one__single my-2 p-3">
            {jobpost?.postedBy?._id.toString() === user?._id && (
              <div className="team-one__social pb-2 mt-0 justify-content-end">
                <Link to="#" className="text-right" >
                  {" "}
                  <i className="fas fa-pencil-alt" ></i>
                </Link>
                <Link to="#" className="text-right" onClick={(e) => clickDeleteButton(jobpost._id, e)}>
                  <i className="fas fa-trash-alt"></i>
                </Link>
              </div>
            )}

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Are you sure delete this comment? : </Modal.Title>
                <button type="button" className="btn-lg btn btn-outline-info m-2 px-4" onClick={(e) => { e.preventDefault(); setShowDeleteModal(false); }}>no</button>
                <button type="button" className="btn-lg btn btn-outline-danger" onClick={(e) => { e.preventDefault(); handleDelete(); }}>yes</button>

              </Modal.Header>
            </Modal>

            <div className="testimonial-one__img">
              <img src={jobpost?.image.url} alt="" />
            </div>
            <h3 className=" m-3">{jobpost?.title}</h3>
            <p className="">{jobpost.description.slice(0, 140)}...</p>
            <Link to={`/jobs/${jobpost._id}`} className="blog-link">
              <button
                type="submit"
                className="thm-btn comment-form__btn my-5 px-5 py-3"
              >
                View Job
              </button>
            </Link>
          </div>




        </div>
      </section>
    </>
  );
};

export default SingleJobCard;
