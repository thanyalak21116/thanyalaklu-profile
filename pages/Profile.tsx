import { 
    AboutPage, 
    Header, 
    HomePage, 
} from "../components";
import Head from 'next/head'
import { Dispatch, SetStateAction, useEffect } from "react";
import { ActiveTab } from "./_app";

export interface IProfile {
  activeTab: ActiveTab;
  setActiveTab: Dispatch<SetStateAction<ActiveTab>>
}

const Profile = (props: IProfile) => {
  const { activeTab, setActiveTab } = props
  useEffect(() => {
    setActiveTab(ActiveTab.ABOUT)
  }, [])
    return (
        <>
        <Head>
          <title>Thanyalak Luamsai</title>
          <meta name="description" content="My name is Thanyalak Luamsai and I am a front-end developer" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
          <Header activeTab={activeTab} />
          <HomePage />
          <AboutPage />
        </>
      )
}

export default Profile