import { 
  Header,
  SkillsPage,
} from "../components";
import { ActiveTab } from "./_app";
import { Dispatch, SetStateAction, useEffect } from "react";
import Head from "next/head";

export interface ISkills {
  activeTab: ActiveTab;
  setActiveTab: Dispatch<SetStateAction<ActiveTab>>
}

const Skills = (props: ISkills) => {
  const { activeTab, setActiveTab } = props
  useEffect(() => {
    setActiveTab(ActiveTab.SKILLS)
  }, [])
    return (
        <>
        <Head>
          <title>Thanyalak Luamsai - Skill</title>
          <meta name="description" content="My name is Thanyalak Luamsai and I am a front-end developer" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
          <Header activeTab={activeTab} />
          <SkillsPage />
        </>
      )
}

export default Skills