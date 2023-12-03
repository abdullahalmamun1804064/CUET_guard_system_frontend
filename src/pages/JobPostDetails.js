import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import SingleJobPost from '../components/job/SingleJobPost';

const BlogVersionOne = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Jop Details"
        currentPage="Job Details"
      />
      <SingleJobPost />
      <FooterTwo />
    </>
  )
}

export default BlogVersionOne;