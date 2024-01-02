import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Member from "./pages/Member";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';
import JobPost from './pages/JobPost';
import JobPostDetails from './pages/JobPostDetails';
import JobPostCreate from './pages/JobPostCreate';
import Profile from './pages/Profile';
import MemberProfile from './pages/MemberProfile';
import Login from './pages/Login';

import Register from './pages/Register';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import { loadUser } from './redux/actions/userActions'
import store from './store'


function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
    store.dispatch(loadUser())
  }, []
  );
  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route path={`/`} exact element={<HomeDefault />} />
        <Route path={`/about`} exact element={<About />} />
        <Route path={`/post`} exact element={<JobPostCreate/>} />
        <Route path={`/contact`} exact element={<Contact />} />
        <Route path={`/member`} exact element={<Member />} />
    




        {/* Authentication */}
        <Route path={"/login"} exact element={<Login />} />
        
        <Route path={"/register"} exact element={<Register />} />
        <Route path={"/profile"} exact element={<Profile />} />
        <Route path={"/member-details/:id"} exact element={<MemberProfile />} />

        
        <Route path={`/*`} exact element={<Error />} />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;