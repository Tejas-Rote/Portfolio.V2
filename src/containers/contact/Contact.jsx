import { Box, IconButton, Typography, alpha, useTheme } from "@mui/material";
import Icons from "../../components/Icons";
import MapComponent from "../../components/MapComponent";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        maxWidth: "100vw",
        width: "1550px",
        // backgroundColor: "blue",
        padding: "2rem",
        minHeight: 1000,
        // marginTop: '-4rem',
      }}
    >
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
        Just say hi!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            // flexGrow: 1,
            width: "100%",
            // minHeight: 300,
            // backgroundColor: "red",
          }}
        >
          {" "}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              margin: "0.5rem 0rem",
              color: theme.palette.text.primary,
            }}
          >
            I&apos;m always open to discuss your project and talk about new
            things.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red",
            height: "450px",
            width: "100%",
            borderRadius: "10px",
            padding: "2rem 0rem",
            marginBottom: "2rem",
          }}
        >
          <MapComponent />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                [theme.breakpoints.down("sm")]: {
                  marginBottom: "1rem",
                },
              }}
            >
              <IconButton color="inherit">
                <EmailTwoToneIcon
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: 32,

                    transition: "all 0.1s ease-in-out",

                    "&:hover": {
                      boxShadow: `4px 4px 100px ${alpha(
                        theme.palette.text.primary,
                        0.5
                      )}`,
                    },
                  }}
                />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "normal",
                  textAlign: "justify",
                  color: theme.palette.text.primary,
                }}
              >
                tejas292002@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "0rem 0rem",
                  //   backgroundColor: "red",
                }}
              >
                <Icons />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
