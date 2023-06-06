import React, { useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import Typed from 'typed.js'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import prrockzed from '../assets/prrockzed.png'

const About = () => {
  const type = useRef(null)

  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: [
        'Welcome to my website. My name is Priyanshu Ranjan. I am a software developer with a passion for creating innovative solutions through code. I am currently a third year undergraduate student pursuing major in Physics from IIT Kharagpur. My skills span a wide range of programming languages and frameworks thus allowing me to adapt to various project requirements. And believe it or not, i am quite eager to make a meaningful impact on tech industry.',
      ],
      typeSpeed: 0,
      backSpeed: 300,
      showCursor: false,
      loop: false,
    })
  })

  // <img src={prrockzed} alt='My image' className='h-auto max-w-md ml-auto' />
  // className='h-auto max-w-md ml-auto'
  //   <span ref={type}></span>
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About</h2>
        <p className={styles.sectionSubText}>Know More About Me</p>
        <br />
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)}>
        <div className='flex'>
          <div className='max-w-[50%]'>
            <img src={prrockzed} alt='My image' />
          </div>
          <div className='pl-8 pt-10 text-secondary text-[27px] max-w-xl'>
            <p ref={type}></p>
          </div>
        </div>
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')
