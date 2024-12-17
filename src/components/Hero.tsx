import { arrow, clutch, cnn, google, gradient, imageHero, slack, trustpilot } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='pt-4 lg:pt-10'>
            <div className='px-5 lg:px-[300px]'>
                <h1 className='text-center text-[#172026] text-[32px] leading-10 font-medium lg:text-[64px] lg:leading-[72px]'>
                    Start monitoring your website like a pro
                </h1>
                <p className='pt-6 text-[16px] font-normal leading-6 text-[#36485C] text-center lg:text-lg lg:leading-7'>Get a bird is eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

                <div className='flex w-full pt-8 justify-center gap-x-6'>
                    <button className='bg-[#4328EB] w-1/2 px-8 py-4 text-white rounded lg:w-fit'>Try for free</button>
                    <button className='w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit shadow-inherit px-3'>View Pricing
                        <span>
                            <Image src={arrow} alt='arrow-image'/>
                        </span>
                    </button>
                </div>
            </div>

            <div className='relative flex h-full w-full justify-center'>
                <Image src={gradient} alt='gradient' className='min-h-[500px] w-full object-cover lg:h-auto'/>

                <div className='absolute bottom-5 flex w-full flex-col items-center'>
                    <Image src={imageHero} alt='image hero' className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]'/>

                    <div className='flex w-full flex-col items-center lg:flex-row lg:justify-between lg:px-20'>
                        <p className='text-white text-center lg:text-lg'>Trusted by these companies</p>
                        <div className='grid grid-cols-3 items-center justify-center justify-items-center px-5 lg:grid-cols-5'>
                            <Image src={google} alt='google' />
                            <Image src={slack} alt='slack' />
                            <Image src={trustpilot} alt='trustpilot' />
                            <Image src={cnn} alt='cnn' />
                            <Image src={clutch} alt='clunth' />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero