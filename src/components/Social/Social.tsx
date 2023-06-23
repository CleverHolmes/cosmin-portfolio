import Image from 'next/image'
import { useTheme } from 'next-themes'
import React from 'react'

export const Social = () => {
  const { theme } = useTheme()
  return (
    <ul className='w-48 sm:w-40 flex items-center justify-around sm:justify-between mx-auto sm:mx-0 mt-10 sm:mt-5'>
      <li>
        <a href='https://twitter.com/otacleT' target='_blank' rel='noopener noreferrer'>
          <Image
            alt='twitterのロゴ'
            src={theme === 'dark' ? '/logo-twitter--white.png' : '/logo-twitter.png'}
            width={25}
            height={25}
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/otacleT' target='_blank' rel='noopener noreferrer'>
          <Image
            alt='githubのロゴ'
            src={theme === 'dark' ? '/logo-github--white.png' : '/logo-github.png'}
            width={25}
            height={25}
          />
        </a>
      </li>
      <li>
        <a href='https://www.wantedly.com/id/otacleT' target='_blank' rel='noopener noreferrer'>
          <Image
            alt='wantedlyのロゴ'
            src={theme === 'dark' ? '/logo-wantedly--white.png' : '/logo-wantedly.png'}
            width={27}
            height={22}
          />
        </a>
      </li>
    </ul>
  )
}
