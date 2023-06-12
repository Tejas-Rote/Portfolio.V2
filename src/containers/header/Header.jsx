import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LogoLight from "../../assets/logoLight.png";
import LogoDark from "../../assets/logoDark.png";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { Slide, useScrollTrigger, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

function ElevationScroll(props) {
  const { children } = props;
  const [elevation, setElevation] = useState(0);
  const trigger = useScrollTrigger();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setElevation(isTop ? 0 : 0);
      //change this to add elevation effect here
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, {
        elevation: elevation,
      })}
    </Slide>
  );
}

const pages = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Header(props) {
  const theme = useTheme();

  const mode = theme.palette.mode;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // <ElevationScroll {...props}>
    <AppBar
      // position="static"
      elevation={0}
      color="primary"
      sx={{
        //   backgroundColor: theme.palette.primary.main,
        maxWidth: "100vw",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "#212121"
            : theme.palette.primary.main,
        "&.MuiPaper-elevation0": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#212121"
              : theme.palette.primary.main,
        },
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            padding: "0rem 2.5rem",
            [theme.breakpoints.down("xs")]: {
              padding: "0rem 1rem",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              [theme.breakpoints.down("xs")]: {
                flexGrow: 0,
              },
            }}
          >
            {mode === "dark" ? (
              <IconButton aria-label="logo">
                <img
                  src={LogoLight}
                  alt="logo"
                  style={{
                    ...(theme.breakpoints.down("xs") && {
                      height: "32px",
                      // width: "32px",
                    }),
                  }}
                />
              </IconButton>
            ) : (
              <IconButton aria-label="logo">
                <img
                  src={LogoDark}
                  alt="logo"
                  style={{
                    ...(theme.breakpoints.down("xs") && {
                      height: "32px",
                      // width: "32px",
                    }),
                  }}
                />
              </IconButton>
            )}
          </Box>

          <Box
            sx={{
              marginLeft: 0,
              [theme.breakpoints.down("xs")]: {
                marginLeft: 1,
              },
              // backgroundColor: theme.palette.primary.main,
            }}
          >
            <IconButton color="inherit" onClick={props.handleChange}>
              {theme.palette.mode === "dark" ? (
                <DarkModeTwoToneIcon
                  sx={{
                    color: "white",
                  }}
                />
              ) : (
                <LightModeTwoToneIcon />
              )}
            </IconButton>
          </Box>

          {/* menu bar  */}
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              [theme.breakpoints.down("xs")]: {
                display: "flex",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {mode === "dark" ? (
                <MenuIcon
                  sx={{
                    color: "#f8f8f8",
                  }}
                />
              ) : (
                <MenuIcon
                  sx={{
                    color: "#212121",
                  }}
                />
              )}
            </IconButton>
            <Menu
              id="menu-appbar"
              elevation={1}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    key={page.id}
                    activeClass="active"
                    to={page.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleCloseNavMenu}
                    style={{
                      margin: "0 10px",
                      textDecoration: "none",
                      cursor: "pointer",
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    <Button
                      sx={{
                        color: theme.palette.text.primary,
                        textTransform: "none",
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "20px",
                        fontWeight: "normal",
                      }}
                    >
                      {page.label}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              [theme.breakpoints.down("xs")]: {
                display: "none",
              },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.id}
                activeClass="active"
                to={page.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleCloseNavMenu}
                style={{
                  margin: "0 10px",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                <Button
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: "none",
                    fontFamily: theme.typography.fontFamily,
                    fontSize: "20px",
                    fontWeight: "normal",
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // {/* </ElevationScroll> */}
  );
}

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Header;
