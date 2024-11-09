import React from 'react'
import video from '../assets/video.mp4'
import { ACHIEVEMENT } from '../constants'
import { motion } from 'framer-motion'

const containVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  }

  
const itemVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  }


const AchievementShowcase = () => {
  return (
    <div id='award'>
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className='mb-12 mt-20 text-center text-4xl font-semibold '>
            Award
        </motion.h2>
        <div
        
        className="mx-auto flex max-w-6xl flex-wrap">
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containVariants}
            viewport={{ once: false }}
            className="w-full p-2 sm:w-1/2">
                <video className='w-full rounded-lg' autoPlay muted loop>
                    <source src={video} typeof='video/mp4' />
                </video>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{once:false}}
            className="w-full p-4 text-center sm:w-1/2">
                <h2 className='mb-4 text-3xl'>
                    {ACHIEVEMENT.title}
                </h2>
                <span className='mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400'>
                    {ACHIEVEMENT.award}
                </span>
                <p className='m-4 p-2 italic'>
                    {ACHIEVEMENT.description}
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default AchievementShowcase