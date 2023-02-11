import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import {toggleSidebar,logoutUser} from '../features/user/userSlice'

import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  //used for logout,toggle sidebar
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //used for toggle logout dropdown
  const [ceva, set] = useState(false);

  //Toggle Dropdown for logout
  const [showLogout, setShowLogout]=useState(false)

  function toggle(){
    dispatch(toggleSidebar())
  }
  
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={toggle}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {/* The optional chaining operator (?.) accesses an object's property. If the object is undefined or null, it returns undefined instead of throwing an error. */}
            {user?.name}
            <FaCaretDown />
          </button>

          {/* dropdown for logout */}
          <div className={showLogout? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
