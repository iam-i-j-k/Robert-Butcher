import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'


const containVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.25,
        staggerChildren: 0.5,
      },
    },
  }

  
const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }
 
const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
        <div className="flex items-center justify-center">
            <motion.figure
            initial="hidden"
            whileInView="visible"
            variants={containVariants}
            viewport={{once:false}}
            >
                <img src={logo} alt="logo" width={200} className='mb-2' />
                <div className="mb-10 h3 w-12 bg-yellow-400">

                </div>
            </motion.figure>
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((item,index)=>(
                <motion.a
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.5 * index}}
                key={index} href={item.href} target="_blank" rel='noopener noreferrer'>
                    {item.icon}
                </motion.a>
            ))}
        </div>
        <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;Developer. All rights reserved.
        </p>
    </div>
  )
}

export default Footer