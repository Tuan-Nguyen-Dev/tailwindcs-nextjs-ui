import { arrow, check } from '@/assets'
import Image from 'next/image'
import React from 'react'

const features = [
  {
    id: 1,
    title: 'Sales Monitoring',
    titleColor: "text-[#0085FF]",
    linkColor: "text-[#0085FF]",
    heading: 'Simplify your sales monitoring',
    description: 'Stay on top of things and revamp your work process with our game-changing feature. Get a bird\'s eye view with our customizable dashboard.',
    image: "/assets/feature-1.svg",
    items: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore",
    ],
    isReversed: true,
  },
  {
    id: 2,
    title: 'Customer Support',
    titleColor: "text-[#00A424]",
    linkColor: "text-[#00A424]",
    heading: 'Get in touch with your customers',
    description: 'Stay on top of things and revamp your work process with our game-changing feature. Get a bird\'s eye view with our customizable dashboard.',
    image: "/assets/feature-2.svg",
    items: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore",
    ],
    isReversed: false, 
  },
  {
    id: 3,
    title: 'Growth Monitoring',
    titleColor: "text-[#EB2891]",
    linkColor: "text-[#EB2891]",
    heading: 'Monitor your site is new subscribers',
    description: 'Stay on top of things and revamp your work process with our game-changing feature. Get a bird\'s eye view with our customizable dashboard.',
    image: "/assets/feature-3.svg",
    items: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore",
    ],
    isReversed: true,
  },
];

const Feature = () => {
  return (
    <div className='flex flex-col gap-y-14 py-14 lg:py-[120px] lg:gap-y-[80px]'>
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex flex-col gap-y-6 sm:gap-x-6 sm:flex-row ${feature.isReversed ? 'sm:flex-row-reverse' : ''
            }`}
        >
          {/* Hình ảnh */}
          <Image
            src={feature.image}
            alt={feature.title}
            width={500}
            height={400}
            className={`w-full sm:w-1/2 lg:w-1/2`}
          />

          {/* Nội dung */}
          <div className='w-full sm:w-1/2 lg:py-14 lg:pr-14 sm:pl-4 lg:pl-14'>
            <h3 className={`font-medium lg:text-lg ${feature.titleColor}`}>{feature.title}</h3>
            <h1 className='pt-[12px] text-2xl text-[#172026] font-semibold lg:text-[42px] lg:leading-[58px]'>
              {feature.heading}
            </h1>
            <p className='py-6 text-[#36485C] font-normal leading-6 text-[16px]'>
              {feature.description}
            </p>

            <ul className='flex flex-col gap-y-3'>
              <li className='flex items-center gap-x-2 text-[#36485C]'>
                <span><Image src={check} alt='Check Mark' width={16} height={16} /></span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2 text-[#36485C]'>
                <span><Image src={check} alt='Check Mark' width={16} height={16} /></span>
                Consectetur adipiscing elit
              </li>
              <li className='flex items-center gap-x-2 text-[#36485C]'>
                <span><Image src={check} alt='Check Mark' width={16} height={16} /></span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>

            {/* Learn More */}
            <a
              className={`flex items-center gap-x-2 font-medium mt-4 ${feature.linkColor}`}
              href='#'
            >
              Learn More
              <span>
                <Image src={arrow} alt='Learn More' width={16} height={16} />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feature
