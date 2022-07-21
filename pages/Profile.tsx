import { NextPage } from "next";
import { Container } from "@mui/material";
import { 
    AboutPage, 
    ExpirencesPage, 
    Header, 
    HomePage, 
    SkillsPage,
} from "../components";

const Profile: NextPage = () => {
    return (
        <Container fixed>
          <Header />
          <HomePage />
          <AboutPage />
          <SkillsPage />
          <ExpirencesPage />
        </Container>
      )
}

export default Profile