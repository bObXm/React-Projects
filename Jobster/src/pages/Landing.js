import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from "../components";



const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Job-hunting apps make it easy to hunt for your next opportunity from
            anywhere, day or night. You can sign up and you can zap your résumé
            to a hiring manager straight from your device.The big players in the
            area of online job boards are CareerBuilder and Monster, and they've
            been around for many years. But there are several free up-and-comers
            definitely worth considering. One of them is <b>Jobster</b>
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};




export default Landing;
