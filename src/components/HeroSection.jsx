import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className='w-full bg-blue bg-hero h-[33.625rem] md:h-[50rem] pt-[4.5419rem] md:pt-[7.7919rem]'>
            <h1 className='pt-[4.5rem] pb-[1.9375rem] md:pb-[4.5rem] text-center text-[2.375rem] md:text-[3.375rem] text-white font-fraunces font-black uppercase tracking-[.5313rem] md:tracking-[.7188rem] leading-tight'>We are creatives</h1>
            <img className='mx-auto mt-[1.3125rem]' src="./images/icon-arrow-down.svg" alt="icon narrow" />
        </div>
    </section>
  )
}

export default HeroSection