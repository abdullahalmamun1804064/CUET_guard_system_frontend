import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterTwo from '../common/footer/FooterTwo';
import CreateGatePassPost from '../components/gatePass/CreateGatePassPost';

const GatePassPostCreate = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        heading="Gate pass Post Create "
        currentPage="Gate Pass Post Create"
      />
      <CreateGatePassPost />
      <FooterTwo />
    </>
  )
}

export default GatePassPostCreate;