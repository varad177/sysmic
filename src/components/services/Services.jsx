import React, { forwardRef } from "react";
import "./services.css";
import Slider from "./Slider";
import { fadeIn } from "../../varients";
import {motion} from "framer-motion"

const Services = forwardRef((props, serviceRef) => {
  return (
    <section id="wrapper" ref={serviceRef}>
      <motion.section variants={fadeIn('up' , 0.2)} 
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false , amount : 0.7}} id="services">
        <h3 className="servivesSmallHeading"><p>Our Services</p></h3>
        <h1 className="servicesLargeHeading">
          <p>
            {" "}
            Your only choice for
            <span>
              Conprehensive, Professional One-Stop <br />
              Business Services {" "}
            </span>
            in Singapore
          </p>
        </h1>
        <h3 className="servivesSmallHeading" id="servicesSmallHeading">
          <p> We provide transparent pricing with no hidden costs.</p>{" "}
        </h3>
      </motion.section>
      <Slider />
    </section>
  );
});

export default Services;
