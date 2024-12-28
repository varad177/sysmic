import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { fadeIn } from "../../varients";
import {motion} from "framer-motion"


const Footer = () => {
  return (
    <footer>
      <div className="topFooter">
        <div className="footerontent">
          <motion.div variants={fadeIn('up' , 0.2)} 
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false , amount : 0.7}}   className="topLeft">
            <div className="footerlogo">
              <img src={logo} alt="" srcset="" />
            </div>
            <p className="footerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit molestiae deleniti totam dolorem doloremque iusto
              odio excepturi nihil, aspernatur, sequi amet? Voluptate ad atque
              quas. Porro magni aut repellendus illum.
            </p>
            <div className="footerIcons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('up' , 0.2)} 
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false , amount : 0.7}}   className="topRight">
            <div className="quickLinks">
              <ul>
                <li id="quick_links_head">Company</li>
                <li>About</li>
                <li>Services</li>
                <li>Support</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="quickLinks">
              <ul>
                <li id="quick_links_head">Accounting Services</li>
                <li>Accounting</li>
                <li>Accounting and Bookkeeping Services</li>
                <li>SME Accounting</li>
                <li>Outsourced Accounting</li>
              </ul>
            </div>
            <div className="quickLinks">
              <ul>
                <li id="quick_links_head">Our Services</li>
                <li>Company Incorporation</li>
                <li>Secretarial Services</li>
                <li>Taxation Services</li>
                <li>HR & Payroll Services</li>
                <li>Goods and Service Tax &#40; GST &#41; </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div variants={fadeIn('up' , 0.2)} 
                initial= "hidden"
                whileInView={"show"}
                viewport={{once:false , amount : 0.7}}  className="bottomFooter">
        <div className="footerBottomLeft">
          <p> &#169; 2024 SHORTS Pte Ltd. All Rights Reserved</p>
        </div>
        <div className="footerBottonRight">
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Site Map</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
