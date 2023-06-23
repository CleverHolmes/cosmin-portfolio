import type { NextPage } from 'next'
import React from 'react'
import { Profile } from 'src/components/Profile'
import { Skills } from 'src/components/Skills'
import { RepositoryType } from 'src/type/RepositoryType'

type PageProps = {
  repository: RepositoryType[]
}

const Home: NextPage<PageProps> = () => {

  return (
    <div className='max-w-3xl mx-auto px-4 pt-3 sm:pt-10'>
      <Profile />
      <Skills />
    </div>
  )
}

export default Home