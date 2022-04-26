import { NextPage } from "next";
import { Container } from "@mui/material";
import { 
    AboutPage, 
    Header, 
    HomePage 
} from "../components";

const Profile: NextPage = () => {
    return (
        <Container fixed>
          <Header />
          <HomePage />
          <AboutPage />
        </Container>
      )
}

export default Profile