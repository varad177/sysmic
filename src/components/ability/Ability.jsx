import React, { forwardRef } from "react";
import "./ability.css";
import statsinfo from "../../assets/statsinfo.png";
import { fadeIn } from "../../varients";
import { motion } from "framer-motion"


const Ability = forwardRef((props, ref) => {
  return (
    <section id="ability" ref={ref}>
      <div className="abilityWrapper">
        <div className="ability_content">
          <motion.p variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} >Why Choose Us</motion.p>
          <motion.h1 variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            We provide <span>transparent <br /> pricing</span> with <span>no hidden cost</span>
          </motion.h1>
          <motion.p variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            Make use of opportunity to have your financial and corporate <br />
            services in singapore evaluated bt filling out our online <br />
            form and bok a session with us{" "}
          </motion.p>

          <motion.div variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} className="contentBox">
            <div className="box">
              <div className="cirleWrapper">
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="95, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      95%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="BoxContent">
                <p>Clients</p>
                <h3>Quick Response</h3>
              </div>
            </div>
            <div className="box">
              <div className="cirleWrapper">
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="85, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      85%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="BoxContent">
                <p>Projects</p>
                <h3>Finish Jobs</h3>
              </div>
            </div>

          </motion.div>

          <motion.p variants={fadeIn('up' , 0.2)} 
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false , amount : 0.7}} id="getInTouch" >Get In Touch</motion.p>
          <div className="line"></div>
        </div>
        <div className="abilityImage">
          <img src={statsinfo} alt="" />
        </div>
      </div>
    </section>
  );
});

export default Ability;
