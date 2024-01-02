import React, { useEffect } from "react";
import MemberCard from "./MemberCard";


const Member = () => {



  
  return (
    <section className="">
      <div className="container">
        <div className="text-center p-4">
          <h3 className="">Now we have <span className="text_basecolor"> 70</span> members <hr /></h3>
         
        </div>
       

        <div className="row">
       
          <div className="col-xl-12 px-5 pb-5">
           
       
            <div>
       
             
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
            </div>

          </div>

         
        
        </div>
      </div>
    </section>
  );
};

export default Member;

