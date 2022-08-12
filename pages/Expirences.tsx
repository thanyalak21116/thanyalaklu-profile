import { 
    ExpirencesPage, 
    Header, 
} from "../components";
import { ActiveTab } from "./_app";
import { Dispatch, SetStateAction, useEffect } from "react";

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
          <Header activeTab={activeTab} />
          <ExpirencesPage />
        </>
      )
}

export default Expirences