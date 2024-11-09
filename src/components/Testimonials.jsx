import React from 'react'
import { TESTIMONIALS } from '../constants'
import { motion } from 'framer-motion'


const containVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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

const Testimonials = () => {
  return (
    <div id='testimonials' className='container mx-auto mt-20 py-16 tracking-tighter'>
        <h2 className='mb-12 text-center text-4xl font-semibold'>
            What People Say
        </h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containVariants}
        viewport={{once:false}}
        className="mx-auto max-w-3xl">
            {TESTIMONIALS.map((item,index)=>(
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1, delay: 0.1 * index}}
                key={index} className='mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row'>
                    <img src={item.image} alt={Testimonials.name} className='mb-4 mr-6 h-16 w-16 rounded-full md:mb-0' />
                    <div>
                        <p className='mb-4 italic'>{item.quote}</p>
                        <p className='font-bold'>{item.name}</p>
                        <p className='text-gray-400'>{item.title}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        
    </div>
  )
}

export default Testimonials