import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
      <motion.div 
      variants={fadeIn('right',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3}}
      className='flex-1 flex justify-start items-center'>
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />Together!</h2>
        </div>
      </motion.div>
      {/* form */}
      <motion.form 
      variants={fadeIn('left',0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3}}
      className='flex-1 border rounded-2xl fkex fkex-col gap-y-6 pb-24 p-6 items-start' action="">
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Name' />

        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Email' />

        <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your Message'></textarea>
        <button className='btn btn-lg'>Send Message</button>
      </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
