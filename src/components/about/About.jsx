

import React, { forwardRef } from 'react'
import './about.css';
import aboutImg from "../../assets/aboutinfo.png"
import { motion } from 'framer-motion'
import { fadeIn } from '../../varients';

// const About = ({ ref }) => {
const About = forwardRef((props, ref) => {
    console.log(ref);

    return (
        <section id='about' ref={ref}>
            <div className='about-outer'>
                <motion.div variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='about-heading'>
                    <p className='about-small-heading'>About Us</p>
                    <p className='about-big-heading'><span>SHORTS
                    </span> Business Services</p>
                </motion.div>
                <div className='about-content'>
                    <motion.div variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className='about-img'>
                        <img src={aboutImg} alt="aboutInfo" />

                    </motion.div>
                    <div className='about-content-text'>
                        <motion.div variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }} className='about-inner-content'>
                            <p>
                                SHORT Business Service is a one-stop corporate service provider dedicated to providing accounting, tax and corporate secretarial services to SMEs as well as individuals.
                            </p>
                            <br />
                            <p>
                                Connect eith us for all kinds of company secretarial services and taxation services, Singapore
                            </p>
                            <div className='btn' id='abouBtn'>
                                <p>
                                    Know More
                                </p>
                            </div>

                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }} className='about-numbers'>
                            <div className='about-number-box'>
                                <p>
                                    Experince
                                </p>
                                <h1>
                                    20 +
                                </h1>
                                <h3>
                                    Years Of Experience
                                </h3>

                            </div>
                            <div className='about-number-box'>
                                <p>
                                    success
                                </p>
                                <h1>
                                    20k+
                                </h1>
                                <h3>
                                    Happy Clients</h3>

                            </div>
                            <div className='about-number-box'>
                                <p>
                                    we provide
                                </p>
                                <h1>
                                    10 +
                                </h1>
                                <h3>
                                    Services
                                </h3>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    )
})

export default About