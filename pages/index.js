import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Head from "next/head";
import ThemeSwitch from "../components/themeSwitch";
import Navbar from "../components/navbar";
import AboutMe from "../components/aboutme";
import LinkContainer from "../components/linkcontainer";
import Socials from "../components/socials";

export default function Home() {
  const Container = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    margin: "4rem 10rem",
    [theme.breakpoints.down("xl")]: {
      margin: "1rem 4rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 2rem",
    },
  }));
  return (
    <>
      <Head>
        <title>Ashish Maurya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
        <AboutMe />
        <LinkContainer />
        <Socials />
      </Container>
    </>
  );
}
