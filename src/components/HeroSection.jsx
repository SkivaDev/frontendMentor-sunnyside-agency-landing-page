import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className='w-full bg-blue bg-hero h-[538px] md:h-[800px] pt-[72.67px] md:pt-[124.67px]'>
            <h1 className='pt-[72px] pb-[31px] md:pb-[72px] text-center text-[38px] md:text-[54px] text-white font-fraunces font-black uppercase tracking-[8.5px] md:tracking-[11.5px] leading-tight'>We are creatives</h1>
            <img className='mx-auto mt-[21px]' src="./images/icon-arrow-down.svg" alt="icon narrow" />
        </div>
    </section>
  )
}

export default HeroSection