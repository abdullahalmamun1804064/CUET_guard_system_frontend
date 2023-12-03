import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import FooterTwo from '../common/footer/FooterTwo';
import CausesFour from '../components/causes/CausesFour';
import BrandTwo from '../components/brand/BrandTwo';
import SkillsOne from '../components/skills/SkillOne';
import TeamOne from '../components/team/TeamOne';
import VideoOne from '../components/video/VideoOne';



const Contact = () => {
  return (
    <>

      <HeaderOne />
      <Breadcrumb heading="Contact Us" currentPage="Contact" />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <FooterTwo />

      <CausesFour />
      <BrandTwo />
      <SkillsOne />
      <TeamOne />
      <VideoOne />
    </>
  );
}

export default Contact;