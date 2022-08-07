import { Container } from "@mui/material";
import { 
    AboutPage, 
    Header, 
    HomePage, 
} from "../components";
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
        <Container fixed>
          <Header activeTab={activeTab} />
          <HomePage />
          <AboutPage />
        </Container>
      )
}

export default Profile