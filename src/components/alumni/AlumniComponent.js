import React from 'react'
import { Link } from 'react-router-dom';

const AlumniComponent = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="alumni col-xl-3 col-md-2">
            <div className='alumni-logo'>
              <img src={publicUrl + "assets/images/alumni_logo/austrilia.jpg"} alt="" />
              <h5 className="text-center py-1">Karom boros</h5>
              <p className="text-center py-1">Karom boros</p>
            </div>
            
          </div>
          <div className="alumni col-xl-3 col-md-2">
            <div className='alumni-logo'>
              <img src={publicUrl + "assets/images/alumni_logo/germany.png"} alt="" />
              <h5 className="text-center py-1">Karom boros</h5>
              <p className="text-center py-1">Karom boros</p>
            </div>

          </div>
          <div className="alumni col-xl-3 col-md-2">
            <div className='alumni-logo'>
              <img src={publicUrl + "assets/images/alumni_logo/cuet.png"} alt="" />
              <h5 className="text-center py-1">Karom boros</h5>
              <p className="text-center py-1">Karom boros</p>
            </div>

          </div>
          <div className="alumni col-xl-3 col-md-2">
            <div className='alumni-logo'>
              <img src={publicUrl + "assets/images/alumni_logo/usa.jpg"} alt="" />
              <h5 className="text-center py-1">Karom boros</h5>
              <p className="text-center py-1">Karom boros</p>
            </div>

          </div>
          <div className="alumni col-xl-3 col-md-2">
            <div className='alumni-logo'>
              <img src={publicUrl + "assets/images/alumni_logo/germany.png"} alt="" />
              <h5 className="text-center py-1">Karom boros</h5>
              <p className="text-center py-1">Karom boros</p>
            </div>

          </div>

        </div>



      </div>

    </div>
  )
}

export default AlumniComponent