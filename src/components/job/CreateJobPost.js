import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { createJobPost, clearErrors } from "../../redux/actions/jobPostAction";
import Loader from "../../common/Loader/Loader";

const CreateJobPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(undefined);

  const [titleValidation, setTitleValidation] = useState(false);
  const [descriptionValidation, setDescriptionValidation] = useState(false);
  const [urlValidation, setUrlValidation] = useState(false);

  const { user, error, loading } = useSelector((state) => state.auth);

  const alert = useAlert();
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, navigate]);

  const handleSubmit = (e) => {
    setTitleValidation(true);
    setDescriptionValidation(true);
    setUrlValidation(true);
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      applicationUrl: url,
      image: image,
      postedBy: user._id,
    };
    if (title && description && url) {
      dispatch(createJobPost(formData));
      setTitle("");
      setDescription("");
      setUrl("");
      setImage("");
      navigate("/jobs");
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className=" p-5 mt-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <div className="section-title text-left">
                    <h2 className="section-title__title text-center">
                      Create a Job Post{" "}
                    </h2>
                  </div>
                  <div className="contact-page__form">
                    <form
                      onSubmit={handleSubmit}
                      className="comment-one__form contact-form-validated"
                    >
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-form__input-box pb-2 my-3">
                            <input
                              type="text"
                              placeholder="Job Title"
                              name="jobtitle"
                              value={title}
                              onChange={handleTitleChange}
                            />
                          </div>
                          {title.length === 0 && titleValidation && (
                            <p className="pb-5 text-danger">
                              Title is empty !!
                            </p>
                          )}
                        </div>

                        <div className="col-xl-12">
                          <div className="comment-form__input-box pb-2 my-3">
                            <textarea
                              type="text"
                              placeholder="Job Description"
                              name="jobdescription"
                              value={description}
                              onChange={handleDescriptionChange}
                            />
                          </div>
                          {description.length === 0 &&
                            descriptionValidation && (
                              <p className="pb-5 text-danger">
                                Job Description is empty !!
                              </p>
                            )}
                        </div>

                        <div className="col-xl-12">
                          <div className="comment-form__input-box pb-2 my-3">
                            <input
                              type="text"
                              placeholder="Job URL"
                              name="joburl"
                              value={url}
                              onChange={handleUrlChange}
                            />
                          </div>
                          {url.length === 0 && urlValidation && (
                            <p className="pb-5 text-danger">
                              Job Url is empty!!
                            </p>
                          )}
                        </div>

                        <div className="col-xl-12">
                          <div className="comment-form__input-box">
                            <input
                              type="file"
                              placeholder="description"
                              name="description"
                              value={image}
                              onChange={handleImageChange}
                            />
                          </div>
                        </div>

                        <div className="col-xl-12 ">
                          <div className="comment-form__btn-box d-flex justify-content-center">
                            <button
                              type="submit"
                              onClick={(e) => handleSubmit(e)}
                              className="thm-btn comment-form__btn "
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default CreateJobPost;
