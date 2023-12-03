import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { clearErrors, logout } from "../../redux/actions/userActions";
import Loader from "../Loader/Loader";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const { isAuthenticated, error, user, loading } = useSelector(
    (state) => state.auth,
  );
  //console.log(user);

  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, navigate]);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
    navigate("/");
  };

  return (
    <div>
        <div className="sticky main-menu text-center mr-5 pr-5">
          <nav className="d-flex ">
            <ul className="main-menu__list relevent ">
              <li>
                <Link to={`/member`}>Member</Link>
              </li>
              <li>
                <Link to={`/events`}>Events</Link>
              </li>
              <li>
                <Link to={`/blogs`}>Blog </Link>
              </li>
              <li>
                <Link to={`/gallery`}>Gallery</Link>
              </li>

               <li>
                <Link to={`/news`}>News</Link>
            </li> 
            <li>
              <Link to={`/all-alumni`}> Alumnis</Link>
            </li> 

              <li>
                <Link to={`/jobs`}>Jobs</Link>
              </li>

              <li
                className="dropdown"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <Link to={`#`}>
                  <span className="px-2">About us </span>
                  {isShown ? (
                    <i className="fa fa-angle-up"></i>
                  ) : (
                    <i className="fa fa-angle-down"></i>
                  )}
                </Link>
                <ul>
                  <li>
                    <Link to={`/about`}>Who We Are</Link>
                  </li>
                  <li>
                    <Link to={`#`}>History</Link>
                  </li>
                  <li>
                    <Link to={`#`}>Rulebook </Link>
                  </li>
                  <li>
                    <Link to={`/committee`}>Executive Committee </Link>
                  </li>
                  <li>
                    <Link to={`#`}>EC Council </Link>
                  </li>
                  <li>
                    <Link to={`/contact`}>Contact</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={`/notice`}>Notice</Link>
              </li>

              {user ? (
                <div className="">
                  {/* <ul className="main-menu__list relevent "> */}
                  <li className="dropdown">
                    {user.avatar ? (
                      <img
                        src={user.avatar.url}
                        alt={user.name}
                        onClick={handleShowMenu}
                      className="user-pic"
                      />
                    ) : (
                      <></>
                    )}

                    <ul className="profile-dropdown">
                      <li>
                        <Link to={`/profile`}>Profile</Link>
                      </li>
                      <li>
                        <Link to={`#`}>
                          {" "}
                          <p className=" " onClick={logoutHandler}>
                            Logout
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </div>
              ) : (
                // !loading && (
                  <ul className="main-menu__list relevent px-5">
                    <li>
                      <Link to={`/login`} className="">
                        Login
                      </Link>
                    </li>
                  </ul>
                // )
              )}
            </ul>
          </nav>
        </div>
   
    </div>
  );
};

export default Nav;
