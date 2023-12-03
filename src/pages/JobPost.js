import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import JobPostOne from '../components/job/JobPostOne';

const BlogVersionOne = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Jop Post"
        currentPage="Job Post"
      />
      <JobPostOne />
      <FooterTwo />
    </>
  )
}

export default BlogVersionOne;