import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router";
import DrawerComponent from "./Drawer";
import Social from "../social";
import logo from "../../assets/logo-abbr.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0),
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up(1450)]: {
    paddingRight: theme.spacing(2),
    }
  },
  logo: {
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(1450)]: {
      marginRight: theme.spacing(3),
    }
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginRight: theme.spacing(2),
    // "&:hover": {
    //   borderBottom: "1px solid rgba(255,255,255,0.2)",
    // },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1186));
  const _xs = useMediaQuery(theme.breakpoints.down("xs"));
  const history = useHistory();

  return (
    <AppBar
      elevation={0}
      position="absolute"
      color="transparent"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    >
      <CssBaseline />
      <Toolbar style={{ marginTop: 16, paddingRight: 56 }}>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.root}>
            <div className={classes.nav}>
              <Link to="/mint" className={classes.link}>
                Buy a Jabroni
              </Link>
              <Link smooth to="/home#about" className={classes.link}>
                About
              </Link>
              <Link smooth to="/home#team" className={classes.link}>
                Team
              </Link>
              <Link smooth to="/home#roadmap" className={classes.link}>
                Roadmap
              </Link>
              <Link to="/tournament" className={classes.link}>
                Beer Pong Tournament
              </Link>
              <Link to="/jabroni" className={classes.link}>
                Jabronis Only
              </Link>
            </div>
            <div>
              <Social />
            </div>
          </div>
        )}
        {/* <Typography onClick={()=>{history.push('/')}} variant="h3" className={classes.logo}>
          JMH
        </Typography> */}
        <Box
          onClick={() => {
            history.push("/");
          }}
          className={classes.logo}
        >
          <img width={_xs ? 100 : 140} src={logo} alt="logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
