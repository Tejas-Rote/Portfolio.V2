import { Box, Paper, Typography, alpha, useTheme } from "@mui/material";
import React from "react";

const ExpCard = (props) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        // minWidth:'500px',
        transition: "all 0.2s ease",
        backgroundColor: theme.palette.primary.main,

        "&:hover": {
          boxShadow: `1px 1px 4px ${alpha(theme.palette.text.primary, 0.5)}`,
        },
       
        padding: "0rem 1rem",
        margin:'1rem 0rem'
      }}
    >
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-around',
        // backgroundColor:'red',
        width:'100%',
        margin:'0.5rem 0rem',
        padding:'0.5rem 0rem'
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            margin: "0.5rem 0rem",
            color: theme.palette.text.primary,
          }}
        >
          {props.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 'normal',
            textAlign:'justify',
            // margin: "1rem 0rem",
            color: theme.palette.text.primary,
          }}
        >
          {props.content}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ExpCard;
