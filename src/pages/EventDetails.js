import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleEventDetails from '../components/single-event/SingleEventDetails';
import FooterTwo from '../common/footer/FooterTwo';

const EventDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Event details"
        currentPage="Event details"
      />
      <SingleEventDetails />
      <FooterTwo />
    </>
  )
}

export default EventDetails;