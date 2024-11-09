import React from 'react'
import Card from './Card'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'


const containVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
}


const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

const Projects = () => {
  return (
    <div id='projects'>
        <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containVariants}
        viewport={{ once: false }}
        className='mt-20 text-center text-4xl font-semibold'>Projects</motion.h2>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containVariants}
        viewport={{ once: false }}
        className='flex flex-wrap justify-center py-8'>
            {PROJECTS.map((item,index)=>(
                <motion.div 
                variants={itemVariants}
                key={index}>
                    <Card image={item.image} title={item.title} subtitle={item.subtitle} link={item.link}/>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Projects