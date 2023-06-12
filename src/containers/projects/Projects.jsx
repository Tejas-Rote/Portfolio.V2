import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomStepper from "../../components/CustomStepper";

const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        maxWidth: "100vw",
        width: "1550px",
        // backgroundColor: "blue",
        padding: "0rem 2rem",
        minHeight: 1000,
        marginTop: "-4rem",
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
          Projects
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <CustomStepper />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
