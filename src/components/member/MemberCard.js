

import React from "react";
import { Link } from "react-router-dom";

const MemberCard = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  return (
    <div>

      <div className=" p-1  row testimonial-one__single  justify-content-between align-item-center text-center ">
        <div className="row">
          <div className="testimonial-one__img col-xl-3 member-frofile-card">
          <img src={publicUrl + "assets/images/testimonial/testimonial-1-1.jpg"} alt="" />
        </div>


        <div className=" col-xl-4 p-1 m-2 ">
            <h5 className="">Karom boros</h5>
            <p className=" testimonial-one__client-title">Founder</p>
            <p className=" testimonial-one__client-title">Founder</p>
          
          
        </div>

        <div className=" col-xl-4 py-3 profile-button-div">
            <div>
                <Link to="/profile" className="thm-btn comment-form__btn full_button profile-button">
              Profile
            </Link>  
         </div>
                  
         
        </div>
        </div>
       


      </div>

    </div>
  )
}

export default MemberCard;