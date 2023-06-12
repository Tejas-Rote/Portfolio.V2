import {
  Avatar,
  Box,
  IconButton,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
// import Tejas from "../../assets/Tejas_Photo.jpg";
// import Tejas from "../../assets/tejasMemoji.png";
import Tejas from '../../assets/tejas.png'
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EventTwoToneIcon from "@mui/icons-material/EventTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: "100vw",
        width: "1550px",
        marginTop: "4rem",
        minHeight: 1000,
        // backgroundColor: "red",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",

          [theme.breakpoints.up("lg")]: {
            flexDirection: "row",
          },
          [theme.breakpoints.down("lg")]: {
            flexDirection: "column-reverse",
          },
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: 650,
          // backgroundColor: "blue",
        }}
      >
        <Box
          sx={{
            marginTop: "5rem",
            [theme.breakpoints.down("lg")]: {
              // width: "90%",
              padding: "0rem 1rem",
            },

            [theme.breakpoints.down("sm")]: {
              // width: "90%",
              marginTop: "2rem",
            },
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.text.primary}
            sx={{
              my: 3,
              fontWeight: 400,
              [theme.breakpoints.down("lg")]: {
                fontSize: 48,
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: 36,
              },

              [theme.breakpoints.down("xs")]: {
                fontSize: 32,
              },
            }}
          >
            I&apos;m{" "}
            <span
              style={{
                fontWeight: 600,
                textShadow: `4px 4px 6px ${alpha(
                  theme.palette.text.primary,
                  0.5
                )}`,
                transition: "text-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.textShadow = `8px 8px 12px ${alpha(
                  theme.palette.text.primary,
                  0.5
                )}`; // Change text shadow on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.textShadow = `4px 4px 6px ${alpha(
                  theme.palette.text.primary,
                  0.5
                )}`; // Reset text shadow on mouse leave
              }}
            >
              Tejas Ravindra Rote{" "}
            </span>
          </Typography>

          <Typography
            color={theme.palette.text.primary}
            variant="h4"
            sx={{
              my: 2,
              fontSize: 32,
              lineHeight: "52px",
              [theme.breakpoints.down("lg")]: {
                fontSize: 28,
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: 24,
                lineHeight: "42px",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: 22,
                lineHeight: "32px",
              },
            }}
          >
            🌱 I&apos;m currently learning Redux <br />
            💬 Ask me about ReactJs, HTML, CSS, JS <br />
            {/* 📫 How to reach me tejas292002@gmail.com */}
          </Typography>
        </Box>
        <Avatar
          sx={{
            bgcolor: theme.palette.primary.main,
            height: 400,
            width: 400,
            // borderRadius:2
            [theme.breakpoints.down("sm")]: {
              height: 300,
              width: 300,
            },
            [theme.breakpoints.down("xs")]: {
              height: 250,
              width: 250,
            },
          }}
          variant="rounded"
          src={Tejas}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0rem 2rem",
          width: "100%",

          [theme.breakpoints.down("xl")]: {
            justifyContent: "space-around",
          },

          [theme.breakpoints.down("lg")]: {
            flexWrap: "wrap",
          },

          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
          // backgroundColor:'red',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("lg")]: {
              width: "50%",
            },

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              justifyContent: "start",
            },
            // backgroundColor:'blue'
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
            sx={{
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
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("lg")]: {
              width: "50%",
              paddingRight: "4.7rem",
            },

            [theme.breakpoints.down("sm")]: {
              paddingRight: "0rem",
              width: "100%",
              justifyContent: "start",
            },
          }}
        >
          <IconButton color="inherit">
            <CallTwoToneIcon
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
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            +91 8968172912
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("lg")]: {
              width: "50%",
              paddingRight: "2.4rem",
              // backgroundColor:'red'
            },

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              paddingRight: "0rem",
              justifyContent: "start",
            },
          }}
        >
          <IconButton color="inherit">
            <EventTwoToneIcon
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
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            December 29, 2002
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("lg")]: {
              width: "50%",
            },

            [theme.breakpoints.down("sm")]: {
              paddingRight: "0rem",
              width: "100%",
              justifyContent: "start",
            },
          }}
        >
          <IconButton color="inherit">
            <HomeTwoToneIcon
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
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Panchkula, Haryana , India
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
