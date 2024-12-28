import React from "react";
import video from "../../assets/herobg.mp4";
import "./home.css";
import { fadeIn } from "../../varients";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <section id="home">
      <div className="background">
        <video
          autoPlay
          muted
          loop
          src={
            "https://res.cloudinary.com/do8ji7uqc/video/upload/v1703007931/gxskyup18yttldqfdfj7.mp4"
          }
        ></video>
      </div>

      <div className="homeContent">
        <motion.div variants={fadeIn('up' , 0.2)} 
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false , amount : 0.7}}  className="mainContent">
          <div className="mainHeading">
            <h1>
              Company <span>Secretarial, Accounting</span> and <span>Incorporation</span> Services,
              Singapore
            </h1>
          </div>
          <div className="smallheading">
            <p>
              SHORT Business Services is a one-stop corporate service provider
              dedicated to providing accounting, tax and corporate secreterial
              services to SMEs as well as indivisual
            </p>
          </div>
          <div className="smallheadint2">
            <p>
              Connect with us for all kinds of company secretarial service and
              taxation services, Singapore
            </p>
          </div>
          <button className="btn" id="homeBTN">
            <p>Learn More</p>
          </button>
        </motion.div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Home;
