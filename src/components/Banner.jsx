import React from "react";
// images
import Image from "../assets/foto_ganteng-removebg.png";
// icons
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex-items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="text-[40px] font-bold leading-[0.8] lg:text-[55px] mt-[88px]">
              MUHAMMAD <span>HAIDAR</span>
            </motion.h1>
            <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[26px] lg:text-[35px] font-secondary font-semibold leading-1">
              <span className="text-white mr-1.5">I am a</span>
              <TypeAnimation sequence={["Developer", 2000, "Techology Enthusiast", 2000]} speed={50} className="text-accent" wrapper="span" repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quisquam?
            </motion.p>
            <motion.div variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portofolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} className="hidden lg:flex flex-1 max-w-[380px] lg-max-w-[482px]">
            <img src={Image} alt="Foto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
