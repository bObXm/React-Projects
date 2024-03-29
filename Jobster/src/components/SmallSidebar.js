import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import NavLinks from '../components/NavLinks'
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import {toggleSidebar} from '../features/user/userSlice'


const SmallSidebar = () => {
  const {isSidebarOpen}=useSelector((store)=>store.user)
  const dispatch=useDispatch()

  function toggle(){
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className={isSidebarOpen? "sidebar-container show-sidebar": 'sidebar-container'}>
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
