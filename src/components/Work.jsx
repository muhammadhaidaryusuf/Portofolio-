import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// img
import Img1 from '../assets/Chill Film project.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-5 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />
            Work.</h2>
            <p className='max-w-sm mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quos!</p>
            <button className='btn btn-sm'>View all project</button>
          </div>
          {/* image */}
          <a href='https://tugas-front-end-1-b-harisenin.vercel.app/' target='_blank' rel="noopener noreferrer" className='group relative overflow-hidden border-2 border-white/50 rounded-xl block' onClick={(e) => e.stopPropagation()}>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-48 md:h-[200px] object-cover' src={Img1} alt="" />
            {/* pretititle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>"A React-based film browsing demo with MockAPI auth."</span></div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Chill Films streaming film</span></div>
          </a>
        </motion.div>
        <motion.div 
        variants={fadeIn('left',0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <a href="">
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-48 md:h-[200px] object-cover' src={Img2} alt="" />
            </a>
            {/* pretititle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>"A React-based film browsing demo with MockAPI auth."</span></div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Projects 2</span></div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500 w-full h-48 md:h-[200px] object-cover' src={Img3} alt="" />
            {/* pretititle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Front-end Developer</span></div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-3xl text-white'>Project Title</span></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
