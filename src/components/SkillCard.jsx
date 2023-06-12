import { Avatar, Box, Paper, Typography, alpha, useTheme } from "@mui/material";
import React from "react";

const SkillCard = (props) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        maxWidth: "400px",
        transition: "all 0.2s ease",
        backgroundColor: theme.palette.primary.main,

        "&:hover": {
          boxShadow: `4px 4px 6px ${alpha(theme.palette.text.primary, 0.5)}`,
        },
        "&.MuiPaper-elevation2": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "black"
              : theme.palette.primary.main,
        },
        padding: "0rem 1rem",
        [theme.breakpoints.down("xs")]: {
          padding:'0.2rem'
        },
      }}
    >
      <Box>
        <Avatar
          variant="rounded"
          src={theme.palette.mode === "dark" ? props.imgsrc1 : props.imgsrc2}
          sx={{
            height: "72px",
            width: "72px",
            margin: "1rem 0.5rem",
            [theme.breakpoints.down("xl")]: {
              margin: "1rem 0.25rem",
              height: "64px",
              width: "64px",
            },

            [theme.breakpoints.down("xs")]: {
              margin: "0.5rem 0rem",
              height: "42px",
              width: "42px",
            },
          }}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          margin: "1rem 0.5rem",
          [theme.breakpoints.down("xl")]: {
            fontSize: 20,
          },

          [theme.breakpoints.down("xs")]: {
            fontSize: 18,
          },
        }}
      >
        {props.title}
      </Typography>
    </Paper>
  );
};

export default SkillCard;
