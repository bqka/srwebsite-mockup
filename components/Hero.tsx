import styles from '@/styles/styles'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import Image from 'next/image'
import srtitle from  '@/public/assets/srtitle.png'

const Hero = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.flexCenter} text-white`}>
      <div className="w-full h-[500px] flex justify-center items-center ">
        <div className="absolute flex flex-col items-center h-[260px] justify-around">
          {/* <span className="text-gradient font-bold text-[128px] font-minecraft tracking-[18px]">SR-DTU</span> */}
          <Image src={srtitle} alt='title' className='z-[2]' width={800}/>
          <p className='font-pixel z-[2] text-[24px]'>
            Revolutionizing the skies with precision, agility, and next-level
            drone innovation.
          </p>
        </div>
        <div className="absolute z-[0] size-[30%] top-10 right-0 pink__gradient" />
        {/* <div className="absolute z-[0] size-[30%] bottom-0 left-0 pink__gradient" /> */}
        {/* <div className="absolute z-[0] size-[40%] rounded-full bottom-40 white__gradient" /> */}
        <div className="absolute z-[1] h-[70%] w-[30%] left-0 bottom-60 blue__gradient" />
        <BackgroundBeams className={`${styles.boxWidth}`} />
      </div>
    </section>
  );
}

export default Hero