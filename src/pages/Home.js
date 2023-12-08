import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import FooterTwo from "../common/footer/FooterTwo";

import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AllApprovePost from "../components/gatePass/AllPost";


const HomeDefault = () => {
  return (
    <>
      
      <HeaderOne /> 
      <Breadcrumb heading="Home" currentPage="home" />

      <AllApprovePost />

      <FooterTwo />
    </>
  );
}

export default HomeDefault;