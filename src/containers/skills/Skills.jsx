import React from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import SkillCard from "../../components/SkillCard";
import gitDark from "../../assets/gitDark.png";
import gitLight from "../../assets/gitLight.png";
import cplusplusLight from "../../assets/cpluscplusLight.png";
import cplusplusDark from "../../assets/cplusplusDark.png";
import javaDark from "../../assets/javaDark.png";
import javaLight from "../../assets/javaLight.png";
// import arduinoDark from "../../assets/arduinoDark.png";
// import arduinoLight from "../../assets/arduinoLight.png";
import reactDark from "../../assets/reactDark.png";
import reactLight from "../../assets/reactLight.png";
import html5Dark from "../../assets/html5Dark.png";
import html5Light from "../../assets/html5Light.png";
import css3Dark from "../../assets/css3Dark.png";
import css3Light from "../../assets/css3Light.png";
import jsDark from "../../assets/jsDark.png";
import jsLight from "../../assets/jsLight.png";
import flutterDark from "../../assets/flutterDark.png";
import flutterLight from "../../assets/flutterLight.png";
import pythonDark from "../../assets/pythonDark.png";
import pythonLight from "../../assets/pythonLight.png";
import figmaDark from "../../assets/figmaDark.png";
import figmaLight from "../../assets/figmaLight.png";
import illustratorDark from "../../assets/illustratorDark.png";
import illustratorLight from "../../assets/illustratorLight.png";
import SkillProgressBar from "../../components/SkillProgressBar";

const data = [
  { imgsrc1: cplusplusLight, imgsrc2: cplusplusDark, title: "C++" },
  { imgsrc1: javaLight, imgsrc2: javaDark, title: "Java" },
  // { imgsrc1: arduinoLight, imgsrc2: arduinoDark, title: "Arduino" },
  { imgsrc1: pythonLight, imgsrc2: pythonDark, title: "Python" },
  { imgsrc1: reactLight, imgsrc2: reactDark, title: "ReactJs" },
  { imgsrc1: flutterLight, imgsrc2: flutterDark, title: "Flutter" },
  { imgsrc1: html5Light, imgsrc2: html5Dark, title: "HTML5" },
  { imgsrc1: css3Light, imgsrc2: css3Dark, title: "CSS3" },
  { imgsrc1: jsLight, imgsrc2: jsDark, title: "JavaScript" },
  { imgsrc1: gitLight, imgsrc2: gitDark, title: "Git" },
  {
    imgsrc1: illustratorLight,
    imgsrc2: illustratorDark,
    title: " Illustrator",
  },
  { imgsrc1: figmaLight, imgsrc2: figmaDark, title: "Figma" },
];

const skillsData = [
  { skillName: "Web Development", percentage: 85 },
  { skillName: "Machine Learning", percentage: 70 },
  { skillName: "Graphic Designing", percentage: 75 },
];

const Skills = () => {
  const theme = useTheme();
  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        maxWidth: "100vw",
        width: "1550px",
        // backgroundColor: "blue",
        padding: "2rem",
        minHeight: 1000,
        margin: 0,
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            // margin: "4rem 0rem",
            marginBottom: "2rem",
            color: theme.palette.text.primary,
            [theme.breakpoints.down("md")]: {
              fontSize: 44,
            },
          }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            // backgroundColor:'orange',
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",

              // justifyContent: "center",
              // alignItems:'center'
            },
          }}
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="95%"

            // backgroundColor="blue"
            // marginRight='2rem'
          >
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Box
                  width="33.33%"
                  padding={1}
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      // height: "400px",
                      width: "50%",
                      padding: "1rem 0rem",
                    },
                  }}
                >
                  <SkillCard
                    // key={index}
                    imgsrc1={item.imgsrc1}
                    imgsrc2={item.imgsrc2}
                    title={item.title}
                  />
                </Box>
              </React.Fragment>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "red",
              height: "600px",

              [theme.breakpoints.down("xl")]: {
                height: "400px",
                width: "95%",
                padding: "2rem 0rem",
              },
              width: "45%",
              borderRadius: "10px",
              padding: "2rem 4rem",
            }}
          >
            <SkillProgressBar skills={skillsData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
