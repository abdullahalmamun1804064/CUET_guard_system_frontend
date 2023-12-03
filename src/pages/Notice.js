import React from 'react'
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import NoticeComponent from '../components/notice/NoticeComponent'

const Notice = () => {
  return (
     
    <div>
      <HeaderOne />
      <Breadcrumb heading="Notice" currentPage="Notice" />
      <NoticeComponent />

      <FooterTwo />
    </div>
  )
}

export default Notice