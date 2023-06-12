import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import ExpCard from "../../components/ExpCard";

const data = [
  {
    title: "Avionic Engineer - TeamUav CreationLabs (March 2021 - Present)",
    content:
      "As an avionics engineer at TeamUAV of Creation Labs, the autonomous drone team at VIT Vellore. One of my primary responsibilities was to create software solutions that would facilitate seamless communication between the drone and its camera. By utilizing the MERN Stack, including Sockets.IO, I developed a real-time remote access system that allowed users to control the drone and view live footage from a webpage.     Through the integration of Sockets.IO, I enabled bidirectional communication between the drone and the remote access system, ensuring smooth data transfer and responsiveness. In addition to remote access and camera integration, I contributed to the development of various software projects aimed at deepening our understanding of drone principles.",
  },
  {
    title:
      "Front-end Developer/Graphic designer - TeamUav CreationLabs (March 2021 - Present)",
    content:
      "As a Front-end Developer/Graphic Designer at TeamUAV of Creation Labs, VIT Vellore's autonomous drone team, I had a multifaceted role that encompassed both web development and marketing responsibilities. In the Web Development department, I played a crucial role in creating and maintaining the team's recruitment website. Leveraging my expertise in React.js,  Using graphic design tools and software, I created visually appealing content for various social media platforms to promote the team's projects, events, and achievements. I collaborated closely with the marketing department to understand their requirements and translate them into visually compelling designs.",
  },
  {
    title: "Web Developer Intern - GNSN Alvero (15th March 23 -15th June 23)",
    content:
      "I was responsible for creating the brand website and launch webpage. Utilizing the MERN Stack, I developed a modern and dynamic website for GNSN Alvera's brand. My role involved collaborating with the design team to ensure a visually appealing and user-friendly website. I utilized my expertise in HTML, CSS, and JavaScript to create interactive and engaging web pages.   By leveraging React.js, I developed a highly efficient and interactive user interface for the brand website.",
  },
];

const Experience = () => {
  const theme = useTheme();
  return (
    <Box
      id="experience"
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
            marginBottom: "2rem",
            color: theme.palette.text.primary,

            [theme.breakpoints.down("md")]: {
              fontSize: 44,
            },
          }}
        >
          Experience
        </Typography>
        <Box>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <ExpCard title={item.title} content={item.content} />
              <div
                style={{
                  margin: "3rem auto",
                  width: "50%",
                  borderTop: "1px solid",
                  color: theme.palette.text.primary,
                  //   margin: "3rem 0rem",
                }}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
