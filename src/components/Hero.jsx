import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center '>
          <div className='w-5 h-5 rounded-full bg-[#ea580c]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-orange-400 via-orange-800 to-slate-900' />
          <div
            className={`absolute inset-0 top-[8px] left-[83px] h-1 sm:w-80 w-40 bg-gradient-to-r from-orange-400 via-orange-800 to-slate-900`}
          />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white pt-3`}>
            Hi, I'm <span className='text-[#ea580c]'>Priyanshu Ranjan</span>
          </h1>
          <h3 className={`${styles.heroMediumText}`}>
            aka <span className='text-[#ea900a]'>prrockzed</span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate programmer
            <br />
            <span className='hidden sm:block'>
              pursuing Physics from IIT Kharagpur
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center hidden sm:flex'>
        <a href='#about'>
          <div className='w-[25px] h-[44px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
