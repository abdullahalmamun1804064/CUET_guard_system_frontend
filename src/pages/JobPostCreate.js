import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import CreateJobPost from '../components/job/CreateJobPost';

const JobPostCreate = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Gate pass Post Create "
        currentPage="Gate Pass Post Create"
      />
      <CreateJobPost />
      <FooterTwo />
    </>
  )
}

export default JobPostCreate;