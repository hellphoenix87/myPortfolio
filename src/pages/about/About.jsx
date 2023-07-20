import { Stack } from "@mui/material";
import AboutMeDev from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({brand}) => {
  return (
    <div className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <Stack direction="row">
        <AboutMeDev brand={brand} />

      </Stack>
    </div>
  );
};

export default About;
