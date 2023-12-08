import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const NoticeComponent = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="container">
      <table className="styled-table">
        <thead>
          <tr>

            <th colspan="2" scope="col">Research Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td ClassName="notice-thumbnail">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank">
                <img src={publicUrl + "assets/images/alumni_logo/bookicon.png"} alt="" />

              </Link>
            </td>

            <td ClassName="product-name">
              <Link to="https://ieeexplore.ieee.org/document/10272691" target="_blank">
                <span className='notice-title'> An FPGA Implementation of Multiclass Disease Detection from
                  PPG", IEEE Sensors Letters,
                  Volume 7, Issue 11, Article
                  Sequence Number: 6007604, 2023</span>
                </Link>
            </td>

            <td ClassName="pdf-link-td">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank" ClassName="">
                <span className='pdf-icon '><FontAwesomeIcon icon={faFilePdf} /></span></Link>
            </td>
          </tr>

          <tr>
            <td ClassName="notice-thumbnail">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank">
                <img src={publicUrl + "assets/images/alumni_logo/bookicon.png"} alt="" />

              </Link>
            </td>

            <td ClassName="product-name">
              <Link to="https://ieeexplore.ieee.org/document/10272691" target="_blank">
                <span className='notice-title'> An FPGA Implementation of Multiclass Disease Detection from
                  PPG", IEEE Sensors Letters,
                  Volume 7, Issue 11, Article
                  Sequence Number: 6007604, 2023</span>
              </Link>
            </td>

            <td ClassName="pdf-link-td">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank" ClassName="">
                <span className='pdf-icon '><FontAwesomeIcon icon={faFilePdf} /></span></Link>
            </td>
          </tr>

          <tr>
            <td ClassName="notice-thumbnail">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank">
                <img src={publicUrl + "assets/images/alumni_logo/bookicon.png"} alt="" />

              </Link>
            </td>

            <td ClassName="product-name">
              <Link to="https://ieeexplore.ieee.org/document/10272691" target="_blank">
                <span className='notice-title'> An FPGA Implementation of Multiclass Disease Detection from
                  PPG", IEEE Sensors Letters,
                  Volume 7, Issue 11, Article
                  Sequence Number: 6007604, 2023</span>
              </Link>
            </td>

            <td ClassName="pdf-link-td">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank" ClassName="">
                <span className='pdf-icon '><FontAwesomeIcon icon={faFilePdf} /></span></Link>
            </td>
          </tr>


          <tr>
            <td ClassName="notice-thumbnail">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank">
                <img src={publicUrl + "assets/images/alumni_logo/bookicon.png"} alt="" />

              </Link>
            </td>

            <td ClassName="product-name">
              <Link to="https://ieeexplore.ieee.org/document/10272691" target="_blank">
                <span className='notice-title'> An FPGA Implementation of Multiclass Disease Detection from
                  PPG", IEEE Sensors Letters,
                  Volume 7, Issue 11, Article
                  Sequence Number: 6007604, 2023</span>
              </Link>
            </td>

            <td ClassName="pdf-link-td">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank" ClassName="">
                <span className='pdf-icon '><FontAwesomeIcon icon={faFilePdf} /></span></Link>
            </td>
          </tr>

          <tr>
            <td ClassName="notice-thumbnail">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank">
                <img src={publicUrl + "assets/images/alumni_logo/bookicon.png"} alt="" />

              </Link>
            </td>

            <td ClassName="product-name">
              <Link to="https://ieeexplore.ieee.org/document/10272691" target="_blank">
                <span className='notice-title'> An FPGA Implementation of Multiclass Disease Detection from
                  PPG", IEEE Sensors Letters,
                  Volume 7, Issue 11, Article
                  Sequence Number: 6007604, 2023</span>
              </Link>
            </td>

            <td ClassName="pdf-link-td">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank" ClassName="">
                <span className='pdf-icon '><FontAwesomeIcon icon={faFilePdf} /></span></Link>
            </td>
          </tr>

          <tr>
            <td ClassName="notice-thumbnail">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank">
                <img src={publicUrl + "assets/images/alumni_logo/bookicon.png"} alt="" />

              </Link>
            </td>

            <td ClassName="product-name">
              <Link to="https://ieeexplore.ieee.org/document/10272691" target="_blank">
                <span className='notice-title'> An FPGA Implementation of Multiclass Disease Detection from
                  PPG", IEEE Sensors Letters,
                  Volume 7, Issue 11, Article
                  Sequence Number: 6007604, 2023</span>
              </Link>
            </td>

            <td ClassName="pdf-link-td">
              <Link to="https://www.mdpi.com/2079-9268/13/4/61" target="_blank" ClassName="">
                <span className='pdf-icon '><FontAwesomeIcon icon={faFilePdf} /></span></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NoticeComponent