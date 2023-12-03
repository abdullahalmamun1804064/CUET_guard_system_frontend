import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CounterOne from "../components/counter/CounterOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import Club from "../components/club-slider/Club";
import AboutCampus from "../components/about/AboutCampus";
import OurUniversity from "../components/alumniStory/OurUnivesity";
import FooterTwo from "../common/footer/FooterTwo";

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="About Us" currentPage="About" />
      <OurUniversity />
      <Club />
      <CounterOne />
      <AboutCampus />

      <TestimonialOne />

      <FooterTwo />
    </>
  );
};

export default About;
