import { arrow, check, feature_1 } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Feature1 = () => {
  return (
    <div className='flex flex-col gap-y-14 py-14 lg:py-[120px] lg:gap-y-[80px]'>

      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image src={feature_1} alt='Feature' className='hidden w-1/2 sm:block' />
        <div className='sm:w-1/2 lg:py-14 lg:pr-14'>
          <h3 className='font-medium text-[#0085FF]'>Sales Monitoring</h3>
          <h1 className='pt-[12px] text-2xl text-[#172026] font-semibold'>Simplify your sales monitoring</h1>
          <Image src={feature_1} alt='feature1' className='pt-6 sm:hidden' />
          <p className='py-6 text-[#36485C] font-normal leading-6 text-[16px]'>
            Stay on top of things and revamp your work process with our game-changing feature. Get a bird is eye view with our customizable dashboard.
          </p>

          <ul className='flex flex-col gap-y-3'>
            <li className='flex items-center gap-x-2 text-[#36485C]'>
              <span><Image src={check} alt='Check Mark' /></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-[#36485C]'>
              <span><Image src={check} alt='Check Mark' /></span>
              Consectetur adipiscing elit
            </li> <li className='flex items-center gap-x-2 text-[#36485C]'>
              <span><Image src={check} alt='Check Mark' /></span>
              Sed do eiusmod tempor incididunt ut labore
            </li>

            <a
              className='flex items-center gap-x-2 text-[#0085FF] font-medium px-3 py-2 rounded-md w-[150px] h-[42px]'
            >
              Learn More
              <span>
                <Image src={arrow} alt='Learn More' />
              </span>
            </a>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Feature1