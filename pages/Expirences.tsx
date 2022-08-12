import { 
    ExpirencesPage, 
    Header, 
} from "../components";
import { ActiveTab } from "./_app";
import { Dispatch, SetStateAction, useEffect } from "react";
import Head from "next/head";

export interface IExpirences {
  activeTab: ActiveTab;
  setActiveTab: Dispatch<SetStateAction<ActiveTab>>
}

const Expirences = (props: IExpirences) => {
  const { activeTab, setActiveTab } = props
  useEffect(() => {
    setActiveTab(ActiveTab.EXPIRENCES)
  }, [])
    return (
        <>
        <Head>
          <title>Thanyalak Luamsai - Expirences</title>
          <meta name="description" content="My name is Thanyalak Luamsai and I am a front-end developer" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
          <Header activeTab={activeTab} />
          <ExpirencesPage />
        </>
      )
}

export default Expirences