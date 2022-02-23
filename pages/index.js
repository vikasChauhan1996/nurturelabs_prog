import Head from "next/head";
import Image from "next/image";
import SidePannel from "../components/sidepanel/SidePannel";
// import sidepanel from './homepage'
import { Box, Grid } from "@material-ui/core";
import SectionComponent from "../components/Sectionfolder/SectionComponent";
import Staticinfo from "../components/Staticinformation/Staticinfo";

export default function Home() {
  return (
    <Box display="flex" bgcolor="#000000">
      <SidePannel />
      <Grid container spacing={0}>
        <Grid item sm={8}>
          <SectionComponent />
        </Grid>
        <Grid item sm={4}>
          <Staticinfo />
        </Grid>
      </Grid>
    </Box>
  );
}
