import {
  Box,
  Button,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useHistory } from "react-router";
import DualHeading from "../../components/dualHeading";
import landingbg from "../../assets/landing.jpg";
import gif from "../../assets/trans.png";
import logoFN from "../../assets/logo-fullname.png";
import logoAbbr from "../../assets/logo-abbr.png";
import { landingData } from "../../utils";
import Social from "../../components/social";

export default function Landing() {
  const history = useHistory();
  const theme = useTheme();
  const _xs = useMediaQuery(theme.breakpoints.down(800));
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box position="relative">
        {/* <Typography variant="h3" align={_xs?"center":'left'} className={classes.heading}>
          Jabroni Moon House
        </Typography> */}
        <Box align={"left"} className={classes.heading}>
          <img
            width={_xs ? 150 : undefined}
            src={_xs?logoAbbr:logoFN}
            alt="logo full name"
          />
        </Box>
        <img
          className={classes.absolute}
          onClick={() => {
            history.push("/home");
          }}
          src={gif}
          alt="gif"
        />
        <img className={classes.fullpage} src={landingbg} alt="cover" />
      </Box>
      {_xs && (
        <Box mt={2}>
          <Box px="43px">
            <Button
              onClick={() => {
                history.push("/home");
              }}
              variant="contained"
              fullWidth
              className={classes.btn}
              color="primary"
              size="large"
            >
              ENTER THE METAVERSE
            </Button>
          </Box>
          <Box pl="28px" mt={6}>
            <DualHeading
              first={landingData.h1}
              second={landingData.h2}
              align="left"
            />
            <Box mt={1}>
              <Typography display="inline" style={{ fontSize: "1.14rem" }}>
                {landingData.description}
              </Typography>
            </Box>
          </Box>
          <Box marginTop={5} marginBottom={3}>
            <Social />
          </Box>
        </Box>
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      alignItems: "stretch",
    },
  },
  btn: {
    borderRadius: "15px",
    height: "61px",
  },
  fullpage: {
    width: "100vw",
    maxHeight: "100%",
    height: "100vh",
    maxWidth: "100%",
    [theme.breakpoints.down(800)]: {
      width: "100vw",
      height: "56.25vw",
      maxHeight: "100vh",
      maxWidth: "177.78vh",
    },
  },
  heading: {
    position: "absolute",
    zIndex: 1,
    top: 20,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      top: 5,
    },
  },
  absolute: {
    position: "absolute",
    top: "51.5%",
    left: "48.3%",
    transform: "translate(-50%, -50%)",
    width: "6.5%",
    clipPath: "circle(60% at 50% 50%)",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(186,174,0,0.2)",
    },
  },
}));
