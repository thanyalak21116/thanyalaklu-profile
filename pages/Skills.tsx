import { Container } from "@mui/material";
import { 
  Header,
  SkillsPage,
} from "../components";
import { ActiveTab } from "./_app";
import { Dispatch, SetStateAction, useEffect } from "react";

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
        <Container fixed>
          <Header activeTab={activeTab} />
          <SkillsPage />
        </Container>
      )
}

export default Skills