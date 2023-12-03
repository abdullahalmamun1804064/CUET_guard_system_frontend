import React from 'react'
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from "../common/footer/FooterTwo";
import NewsComponent from '../components/news/NewsComponent';

const News = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="News" currentPage="News" />
      <NewsComponent />
      <FooterTwo />
    </>
  )
}

export default News