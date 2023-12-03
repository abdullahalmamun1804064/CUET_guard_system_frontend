import React from 'react'
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import NewsDetailsComponent from '../components/news/NewsDetailsComponent';

const NewsDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="News Details" currentPage="News Details" />
      <NewsDetailsComponent />
      <FooterTwo />
    </>
  )
}



export default NewsDetails