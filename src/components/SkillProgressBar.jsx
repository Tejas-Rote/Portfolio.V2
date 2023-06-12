import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 
      theme.palette.grey[theme.palette.mode === "light" ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.text.primary,
    //  theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const SkillProgressBar = ({ skills }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {skills.map((skill) => (
        <Box key={skill.skillName}>
          <Box sx={{
            display:'flex',
            flexDirection:'row'
          }}
          
          >
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.primary,
              }}
            >
              {skill.skillName}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                marginLeft:'1rem'
              }}
            >
              {skill.percentage}%
            </Typography>
          </Box>

          <BorderLinearProgress
            variant="determinate"
            value={skill.percentage}
            sx={{
              margin: "1rem 0rem",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SkillProgressBar;
