import React from 'react'
import { ABOUT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='container mx-auto' id="about">
        <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-4xl mt-20 text-center font-semibold'>
            About
        </motion.h2>
        <motion.h3 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className='p-4 text-6xl uppercase lg:text-[8rem]'>
            {ABOUT.text1}
        </motion.h3>
        <motion.p className='mr-24 pl-4 text-lg leading-loose'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}>
            {ABOUT.text2}
        </motion.p>
    </div>
  )
}

export default About