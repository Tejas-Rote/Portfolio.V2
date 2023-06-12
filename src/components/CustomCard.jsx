import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useTheme } from "@mui/material";

const CustomCard = (props) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: "1100px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={props.imgsrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            {props.label}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            {props.tech}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
      
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
