import React from 'react'
import './about.css'
import { Swiper, SwiperSlide } from "swiper/react";
import google from '../pic/google-logo.png'
import cc from '../pic/cc.png'
import hr from '../pic/hr.png'
import lc from '../pic/lc.png'
import { motion } from 'framer-motion/dist/framer-motion';
import git from '../pic/git.png'
import { HashLink as Link } from 'react-router-hash-link';

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  return (
    <div className='services' id='services'>
      <div data-aos="fade-right" className='left-services' >
        <h1>My Developer <span>Profiles</span></h1>
        <br />
        <p>I'm a certified developer. Feel free to contact me .</p>
        <br />
       <Link smooth to='#contact'><button className='hire'>Hire Me</button></Link>
      </div>
      <div className='right-services'>
      <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: Infinity, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={hr} alt="" style={{"width":"12rem"}} onClick={()=>{window.open("https://www.hackerrank.com/anikdutta0810")}}/>
          </div>
          <div className="w-secCircle">
            <img src={lc} alt="" style={{"width":"10rem"}} onClick={()=>{window.open("https://leetcode.com/anik08/")}}/>
          </div>
          <div className="w-secCircle">
            <img src={google} alt="" style={{"width":"12rem"}} onClick={()=>{window.open("https://www.cloudskillsboost.google/public_profiles/475cb8e3-a321-46d1-85fb-1df3b15b97b9")}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={git} alt="" style={{"width":"10rem"}} onClick={()=>{window.open("https://github.com/anik0810")}}/>
          </div>
          <div className="w-secCircle">
            <img src={cc} alt="" style={{"width":"12rem"}} onClick={()=>{window.open("https://www.codechef.com/users/anik0810")}}/>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
