import React, { useEffect } from "react";
import AlumniStories from '../../db/admin/alumniStories.json'
 const AlumniStorie = () => {
   useEffect(() => {
     const $ = window.$;

     if ($(".video-popup").length) {
       $(".video-popup").magnificPopup({
         type: "iframe",
         mainClass: "mfp-fade",
         removalDelay: 160,
         preloader: true,
         fixedContentPos: false,
       });
     }
   }, []);

   let publicUrl = process.env.PUBLIC_URL + "/";
   let alumniStories = AlumniStories.data
  

   return (
     <>
       <section className="about-one about-three">
         <div className="container">
           <div className="row">
             <div className="col-xl-6">
               <div
                 className="about-one__left wow slideInLeft"
                 data-wow-delay="100ms"
                 data-wow-duration="2500ms"
               >
                 <div className="about-one__img-box">
                   <div className="about-one__img">
                     <img
                       src={
                       publicUrl+ alumniStories.alumniImages[1].url
                       }
                       alt=""
                     />
                   </div>
                   <div
                     className="about-one__small-img wow zoomIn animated animated"
                     data-wow-delay="500ms"
                     data-wow-duration="2500ms"
                   >
                     <img
                       src={
                         publicUrl + alumniStories.alumniImages[0].url
                       }
                       style={{
                         height: "280px",
                         width:"350px"
                      }}
                       alt=""
                     />
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-xl-6">
               <div className="about-one__right">
                 <div className="about-one__right-content">
                   <div className="section-title text-left">
                     {/* <span className="section-title__tagline">About Us</span> */}
                     <h2 className="section-title__title text-center">{ alumniStories.title}</h2>
                   </div>
                   <p className="about-one__text py-4">
                    {alumniStories.description}
                   </p>
                   {/* <ul className="list-unstyled about-one__points">
                     <li>
                       <div className="icon">
                         <span className="icon-comment"></span>
                       </div>
                       <div className="text">
                         <h4>It service for business network.</h4>
                         <p>
                           ill give you a complete account of the system, and
                           expound the actual teachings...
                         </p>
                       </div>
                     </li>
                     <li>
                       <div className="icon">
                         <span className="icon-comment"></span>
                       </div>
                       <div className="text">
                         <h4>Business success rate solving.</h4>
                         <p>
                           ill give you a complete account of the system, and
                           expound the actual teachings...
                         </p>
                       </div>
                     </li>
                   </ul> */}
                   {/* <div className="about-one__bottom-video-box">
                     <div className="about-one__btn-box">
                       <a href="about.html" className="thm-btn about-one__btn">
                        KNOW MORE
                       </a>
                     </div> */}
                     {/* <div className="about-one__video-link">
                       <a
                         href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                         className="video-popup"
                       >
                         <div className="about-one__video-icon">
                           <span className="fa fa-play"></span>
                           <i className="ripple"></i>
                         </div>
                       </a>
                     </div> */}
                   {/* </div> */}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
 };

export default AlumniStorie;
