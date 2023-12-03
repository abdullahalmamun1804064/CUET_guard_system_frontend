import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import MissionAndVission from "../components/missionAndVission/MissionAndVission";
import AlumniStory from "../components/alumniStory/AlumniStory";
import CounterOne from "../components/counter/CounterOne";
import FooterTwo from "../common/footer/FooterTwo";
import EventThree from "../components/events/EventThree";
import UpcomingEvents from "../components/events/UpcomingEvents";
import LatestNews from "../components/news/LatestNews";

const HomeDefault = () => {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <AlumniStory />
      <UpcomingEvents />
      <MissionAndVission />
      <CounterOne />
      <EventThree />
      <LatestNews />
      <FooterTwo />
    </>
  );
}

export default HomeDefault;