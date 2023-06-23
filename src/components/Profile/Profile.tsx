import Image from 'next/image'
import React from 'react'

import { Social } from '../Social'

export const Profile = () => {
  return (
    <div>
      <p className="text-[12px] py-2.5">WELCOME TO MY WORLD</p>
      <h2 className="font-bold text-[28px] md:text-[36px] mt-2">Hi, I am Cosmin Rusu</h2>
      <div className='w-full sm:w-auto sm:order-1'>
        <p className='text-sm sm:text-base text-[#888888] dark:text-[#dadada] tracking-wide sm:text-left sm:mt-1'>
          I am a highly skilled individual with a passion for technology and solving complex problems. Over the past 8+ years, I have honed my skills as a frontend developer, specializing in creating visually appealing and responsive websites that provide a great user experience.

          In addition to my experience in web development, I am also well-versed in the world of blockchain technology. Over the past 3+ years, I have developed several decentralized applications (dApps) using various blockchain technologies such as Ethereum, Solana, Solidity, Rust and IPFS.

          With my strong attention to detail, excellent problem-solving skills, and ability to work effectively in a team, I am confident in my ability to deliver high-quality work on time and within budget.
        </p>
        <Social />
      </div>
    </div>
  )
}
