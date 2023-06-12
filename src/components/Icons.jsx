import React from "react";

import githubDark from "../assets/githubDark.png";
import githublight from "../assets/githubLight.png";
import linkedinDark from "../assets/linkedinDark.png";
import linkedinlight from "../assets/linkedinLight.png";
import gmailDark from "../assets/gmailDark.png";
import gmaillight from "../assets/gmailLight.png";
import { Box, IconButton, useTheme } from "@mui/material";

const data = [
  { imgsrc1: githublight, imgsrc2: githubDark },
  { imgsrc1: linkedinlight, imgsrc2: linkedinDark },
  { imgsrc1: gmaillight, imgsrc2: gmailDark },
];

const Icons = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  return (
    <Box
      sx={{
        // margin: "0rem 0.5rem",
        padding: 0,
      }}
    >
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {mode === "dark" ? (
            <IconButton
              aria-label="logo"
              sx={{
                marginRight: 2,
                padding: 0,
              }}
            >
              <img
                src={item.imgsrc1}
                alt="logo"
                style={{
                  height: 32,
                  width: 32,
                }}
              />
            </IconButton>
          ) : (
            <IconButton
              aria-label="logo"
              sx={{
                marginRight: 2,

                padding: 0,
              }}
            >
              <img
                src={item.imgsrc2}
                alt="logo"
                style={{
                  height: 32,
                  width: 32,
                }}
              />
            </IconButton>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Icons;
