import React, { useState } from "react";
import "./Nav.css";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { Box, Drawer, List } from "@mui/material";
import styled from "styled-components";

const HamNames = styled("nav")(({ theme }) => ({
  height: "100%",
  "& ul": {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  "& li": {
    textAlign: "left",
    margin: "0 auto",
    width: "100%",
  },
  "& a": {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: "0.75rem 1rem",
    display: "block",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#1E40AF", // Navy Blue
      color: "white",
    },
  },
}));

const Nav = ({about , service , ability}) => {

  
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const list = () => (
    <Box
      style={{
        width: 250,
        background: "linear-gradient(145deg, #13235B, #1A3A82)",
        color: "white",
        height: "100%",
        padding: "1.5rem 1rem",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      onClick={handleClose}
    >
      <List>
        <HamNames>
          <ul>
           
            <li onClick={()=>scrollToSection(about)} >
              <a href="#">About Us</a>
            </li>
            <li onClick={()=>scrollToSection(service)}>
              <a href="#">Our Business Services</a>
            </li>
            <li onClick={()=>scrollToSection(ability)}>
              <a href="#">Why Choose Us</a>
            </li>
          </ul>
        </HamNames>
      </List>
    </Box>
  );

  return (
    <nav>
      <div className="navTop">
        <div className="navTopLeft">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="navTopRight">
          <div className="media">
            <div className="mediaIcon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="info">
              <p className="infoName">Mail Us</p>
              <p className="MainInfo">Info@Short.com.sg</p>
            </div>
          </div>
          <div className="media">
            <div className="mediaIcon2">
              <FiPhoneCall className="callIcon" />
            </div>
            <div className="info">
              <p className="infoName">Have a question?</p>
              <p className="MainInfo">+65 86124114</p>
            </div>
          </div>
          <i
            onClick={handleOpen2}
            className="fa-solid fa-address-book contacts"
          ></i>
          <Drawer anchor="right" open={open2} onClose={handleClose2}>
            <Box
              style={{
                width: 250,
                background: "linear-gradient(145deg, #13235B, #1A3A82)",
                color: "white",
                padding: "1.5rem 1rem",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={handleClose}
            >
              <div className="hammedia">
                <div className="mediaIcon2">
                  <FiPhoneCall className="callIcon" />
                </div>
                <div className="info">
                  <p className="infoName">Have a question?</p>
                  <p className="MainInfo">+65 86124114</p>
                </div>
              </div>
              <div className="hammedia">
                <div className="mediaIcon2">
                  <i
                    style={{ color: "#E3B209" }}
                    className="fa-regular fa-envelope"
                  ></i>
                </div>
                <div className="info">
                  <p className="infoName">Mail Us</p>
                  <p className="MainInfo">Info@Short.com.sg</p>
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
      </div>
      <div className="navBottom">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navNamesWrapper">
          <div className="navNames">
            <ul className="nav-list">
              <li onClick={()=>scrollToSection(about)}>
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li onClick={()=>scrollToSection(service)}>
                <a href="#" className="nav-link">Our Business Services</a>
              </li>
              <li onClick={()=>scrollToSection(ability)}>
                <a href="#" className="nav-link">Why Choose Us</a>
              </li>
              <li>
                <i onClick={handleOpen} className="fa-solid fa-bars ham"></i>
                <Drawer open={open} onClose={handleClose}>
                  {list()}
                </Drawer>
              </li>
            </ul>
          </div>

          <div className="btn" id="navbtn">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
