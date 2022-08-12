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
        <>
          <Header activeTab={activeTab} />
          <HomePage />
          <AboutPage />
        </>
      )
}

export default Profile