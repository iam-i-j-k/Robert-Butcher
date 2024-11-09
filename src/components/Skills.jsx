import React from 'react'
import { SKILLS } from '../constants'
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }

const Skills = () => {
  return (
    <div className='contsiner mx-auto' id='skills'>
        <h2 
        className='mb-12 mt-20 text-center text-4xl'>
            Skills
        </h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containVariants}
        viewport={{once: false}}
        className="mx-12 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20">
            {SKILLS.map((item,index)=>(
                <motion.div
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: false }}
                 key={index} className='mb-8 flex items-center justify-between'>
                    <div className="flex items-center">
                        {item.icon}
                        <h3 className='px-6 text-xl lg:text-3xl'>
                            {item.name}
                        </h3>
                    </div>
                    <div className='ml-auto text-md border-b-2 border-yellow-400 font-semibold lg:text-xl'>
                        <span>
                            {item.experience}
                        </span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Skills