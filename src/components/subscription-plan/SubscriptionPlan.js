import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import "./SubscriptionPlan.css";
import { useNavigate } from 'react-router-dom';

const SubscriptionPlan = () => {

  const navigate = useNavigate();
  const handleChoosePlan = (planNum) => {
    navigate('/register', { state: { plan: planNum } });
  }


  const [plan1, setPlan1] = useState("");
  const [plan2, setPlan2] = useState("");
  const [plan3, setPlan3] = useState("");

  const clickActive = (x) => {
    if (x === 1) {
      setPlan1("activeplan");
      setPlan2("");
      setPlan3("");
    }
    if (x === 2) {

      setPlan1("");
      setPlan2("activeplan");
      setPlan3("");
    }
    if (x === 3) {
      setPlan1("");
      setPlan2("");
      setPlan3("activeplan");
    }
  }



  return (
    <>
      <section className="blog-page-V-1">
        <div className="container">
          <div className="section-title text-center">
            {/* <span className="section-title__tagline">Subscription Plan</span> */}
            <h2 className="section-title__title">Subscription Plan</h2>
          </div>
          <div className="row">
            <div className={`col-xl-4 col-lg-4 col-md-6 wow fadeInUp `} onClick={() => clickActive(1)} data-wow-delay="100ms">


              <div className={`blog-three__single `}>

                <div className={`blog-three__content ${plan1}`}>
                  <h3 className=" text-center">Free</h3>

                  <div className="p-3 d-flex justify-content-center align-items-center text-center">
                    <h1>$0</h1>
                    <p>/Month</p>
                  </div>
                  <hr />
                  <ul className='py-5'>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>Free access</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>Vestibulum blandit lorem quis</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>stibulum blandit</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>

                  </ul>

                  <div className="comment-form__btn-box d-flex justify-content-center">
                    <button
                      onClick={() => handleChoosePlan(1)}
                      type="submit"
                      className="thm-btn comment-form__btn btn-success full_button"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-xl-4 col-lg-4 col-md-6 wow fadeInUp `} onClick={() => clickActive(2)} data-wow-delay="100ms">


              <div className={`blog-three__single `}>

                <div className={`blog-three__content ${plan2}`}>
                  <h3 className=" text-center">Alumni</h3>

                  <div className="p-3 d-flex justify-content-center align-items-center text-center">
                    <h1>$10</h1>
                    <p>/Month</p>
                  </div>
                  <hr />
                  <ul className='py-5'>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>Free access</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>Vestibulum blandit lorem quis</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>stibulum blandit</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>

                  </ul>

                  <div className="comment-form__btn-box d-flex justify-content-center">
                    <button
                      onClick={() => handleChoosePlan(2)}
                      type="submit"
                      className="thm-btn comment-form__btn btn-success full_button"
                    >
                      Choose Plan
                    </button>                  </div>
                </div>
              </div>
            </div>
            <div className={`col-xl-4 col-lg-4 col-md-6 wow fadeInUp `} onClick={() => clickActive(3)} data-wow-delay="100ms">


              <div className={`blog-three__single `}>

                <div className={`blog-three__content ${plan3}`}>
                  <h3 className=" text-center">Alumni</h3>

                  <div className="p-3 d-flex justify-content-center align-items-center text-center">
                    <h1>$99</h1>
                    <p>/Year</p>
                  </div>
                  <hr />
                  <ul className='py-5'>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>Free access</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>Vestibulum blandit lorem quis</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>
                    <li>
                      <div className="d-flex justify-content-between py-2">
                        <p>stibulum blandit</p>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>

                    </li>

                  </ul>

                  <div className="comment-form__btn-box d-flex justify-content-center">
                    <button
                      onClick={() => handleChoosePlan(3)}
                      type="submit"
                      className="thm-btn comment-form__btn btn-success full_button"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>




          </div>

        </div>
      </section>
    </>
  );
}

export default SubscriptionPlan