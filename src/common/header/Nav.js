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
              <Link to={`/`}>Home </Link>
            </li>
              <li>
                <Link to={`/member`}>Roster</Link>
              </li>
              <li>
                <Link to={`/post`}>Post</Link>
            </li>
            <li>
              <Link to={`/application`}>Applications</Link>
            </li>
            <li>
              <Link to={`/about`}>About Us</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
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
                      <Link to={`/my-application`}>My application</Link>
                    </li>
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
