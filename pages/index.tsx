import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Profile from './Profile'
import { ActiveTab } from './_app'

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.ABOUT)
  return (
    <div>
      <Head>
        <title>Thanyalak Luamsai</title>
        <meta name="description" content="My name is Thanyalak Luamsai and I am a front-end developer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Profile activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  )
}

export default Home
