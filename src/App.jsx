import "./App.css";

import { Box, Fab, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  Header,
  Home,
  Skills,
  Experience,
  Contact,
  Projects,
} from "./containers/index";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [DarkMode, setDarkMode] = useState("dark");
  const handleChange = () => {
    setDarkMode(DarkMode === "light" ? "dark" : "light");
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: "Rubik, sans-serif",
    },
    palette: {
      mode: DarkMode,
      // type: darkMode ? "dark" : "light",
      ...(DarkMode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: "#212121",
            },
            secondary: {
              main: "#212121",
            },
            text: {
              primary: "#f8f8f8",
              secondary: "#f8f8f8",
            },
            background: {
              paper: "#212121",
              default: "#212121",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: "#F8F8F8",
            },
            secondary: {
              main: "#1A2F4B",
            },
            text: {
              primary: "#212121",
              secondary: "#2F8886",
            },
            background: {
              paper: "#f8f8f8",
              default: "#f8f8f8",
            },
          }),
    },
  });

  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      setShowBackToTop(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Header handleChange={handleChange} />
        <Home id="home" />
        <Skills id="skills" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </Box>
      {showBackToTop && (
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Fab
            sx={{
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.text.primary,
              },
            }}
            size="small"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <KeyboardArrowUpIcon
              sx={{
                fontSize: 32,
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            />
          </Fab>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
