import React from 'react'
import { motion } from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            // scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1, 1.0],
            borderRadius:["20%","30%","50%","80%","10%"]
        }}
        transition={{
            duration:2.0
        }}
        className='relative flex items-center justify-center '>
        <div className='absolute border-2 border-[#ffffff] rounded-full h-[180px] w-[180px] mt-[244px] animate-ping'/>
        {/* <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 '/> */}
        {/* <div className='absolute border border-[#15465F] rounded-full h-[500px] w-[500px] mt-52 '/> */}
        <div className='absolute border-[10px] border-[#164760] rounded-full h-[190px] w-[190px] mt-[244px] animate-pulse'/>
        {/* <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 '/>  */}
    </motion.div>
  )
}

export default BackgroundCircles