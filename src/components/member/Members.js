import React, { useEffect } from "react";
import FilterOne from "../filter/FilterOne";
import MemberCard from "./MemberCard";
import { useSelector, useDispatch } from "react-redux";
import { getBatches } from "../../redux/actions/batchAction";
import { getDepartments } from "../../redux/actions/departmentAction";
import { getJobFields } from "../../redux/actions/jobFieldAction";
import { getJobOrgs } from "../../redux/actions/jobOrgAction";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Member = () => {

  const dispatch = useDispatch();
  const { batches } = useSelector(state => state.batch)
  const { departments } = useSelector(state => state.department)
  const { jobFields } = useSelector(state => state.jobFields)
  const { jobOrgs } = useSelector(state => state.jobOrgs)

 

  useEffect(() => {
    dispatch(getBatches())
    dispatch(getDepartments())
    dispatch(getJobFields())
    dispatch(getJobOrgs())
  }, [dispatch]);
  return (
    <section className="">
      <div className="container">
        <div className="text-center p-4">
          <h3 className="">Now we have <span className="text_basecolor"> 485274</span> member <hr /></h3>
         
        </div>
       

        <div className="row">
          <div className="col-xl-4 px-5">
            <div>
              <FilterOne filterTitle={"Batch"} dataArray={batches} />
              <FilterOne filterTitle={"Department"} dataArray={departments} />
              <FilterOne filterTitle={"Job Field"} dataArray={jobFields} />
              <FilterOne filterTitle={"Job Organizations"} dataArray={jobOrgs} />

            </div>
            <div className="py-5">

              <button
                type="submit"
                className="thm-btn comment-form__btn  full_button"
              >
                Apply Filter
              </button>

            </div>

          </div>
          <div className="col-xl-8 px-5">
            <div className="pb-4">
              <div className="row w-100 justify-content-end align-items-end ">
                <div className="col-xl-12 input-group search-box  w-sm-50 ">
                  <input className="form-control px-3   searchbar" type="search" placeholder="Search..." aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="fa fa-search p-2 "></i>
                  </button>
                </div> 
              </div>
            </div>
       
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
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
              < MemberCard />
            </div>
          <div className="py-5">
            <Stack spacing={2}>
              <Pagination count={10} color="secondary" />
            </Stack>
          </div>

          </div>

         
        
        </div>
      </div>
    </section>
  );
};

export default Member;

