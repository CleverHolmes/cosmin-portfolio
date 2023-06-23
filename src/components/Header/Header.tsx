/* eslint-disable jsx-a11y/anchor-is-valid */
import { Bars3CenterLeftIcon, SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'
import { Menu } from '@mantine/core'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React from 'react'
import { useState } from 'react'
import { pagesPath } from 'src/lib/$path'

const items = [
  { href: pagesPath.$url().pathname, label: 'Home' },
  { href: pagesPath.works.$url().pathname, label: 'Works' },
]

export const Header = () => {
  const [opened, setOpened] = useState<boolean>(false)
  const { setTheme, theme } = useTheme()
  return (
    <div className='w-full h-16 py-3 fixed top-0 left-0 backdrop-blur-sm z-50'>
      <div className='w-full mx-auto px-4 flex items-center justify-between'>
        <ul className='w-40 hidden sm:flex justify-between items-center'>
          {items.map(({ href, label }) => {
            return (
              <li key={href}>
                <Link href={href}>
                  <a className='dark:text-[#F5FFFA] px-3 py-2 rounded-md hover:bg-[#E6F0EB] dark:hover:bg-[#3d3d3d]'>
                    {label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
        <Menu
          width={220}
          radius='sm'
          position='bottom-start'
          onOpen={() => setOpened(true)}
          onClose={() => setOpened(false)}
          closeOnItemClick={true}
        >
          <Menu.Target>
            <button
              className={`h-10 w-10 flex sm:hidden items-center justify-center rounded-md hover:bg-[#E6F0EB] dark:hover:bg-[#3d3d3d] ${opened &&
                'border border-[#DCE6E1] bg-[#E6F0EB] dark:border-[#464646] dark:bg-[#3d3d3d]'
                }`}
            >
              <Bars3CenterLeftIcon className='w-9 h-7 dark:text-[#F5FFFA]' />
            </button>
          </Menu.Target>

          <Menu.Dropdown className='sm:hidden dark:bg-[#151515] dark:border-[#464646]'>
            {items.map(({ href, label }) => {
              return (
                <Menu.Item
                  key={href}
                  className='text-sm flex items-center h-11 rounded-[4px] p-3 hover:decoration-1 hover:underline dark:text-[#F5FFFA] dark:hover:bg-[#3d3d3d]'
                  component='a'
                  href={href}
                >
                  {label}
                </Menu.Item>
              )
            })}
            <p className='block p-3 text-sm text-[#888888]'>coming soon</p>
          </Menu.Dropdown>
        </Menu>
        <button
          className='h-10 w-10 rounded-md bg-[#805AD5] dark:bg-[#FBD38D] flex items-center justify-center'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <MoonIcon className='h-5 w-5 text-[#F5FFFA] dark:hidden' />
          <SunIcon className='h-5 w-5 text-black hidden dark:block' />
        </button>
      </div>
    </div>
  )
}
