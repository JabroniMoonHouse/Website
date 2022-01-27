import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import bg from "../../assets/tournament.png";
import frame from "../../assets/frame.png";
import eth from "../../assets/eth.png";

export default function Home() {
  const classes = useStyles();

  let items = [
    "Jabronis can enter the tournament for free by connecting your MetaMask.",
    "The tribunal will take a snapshot the moment the tournament begins to identify all participants.",
    "For example, if you hold 69 Jabronis, you receive 69 entries to the tournament. There’s no limit to the number of entrants.",
    "Each Jabroni NFT gives you one entry.",
    "Teams of 2: teammates will be randomly matched.",
    "Your team’s combined rarity increases your chance of winning.",
    "Every team has a chance to win. Hopefully your teammate doesn’t suck.",
    "The winning team splits the ETH prize pool.",
    "Bracket seating with single elimination.",
  ];

  const _sm = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <>
      <Box className={classes.fullpage}>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          style={{ fontStyle: "italic", fontSize: _sm ? "1rem" : "2rem" }}
        >
          ENTER THE TOURNAMENT
        </Button>
      </Box>
      <Box
        style={{
          backgroundImage: _sm ? undefined : `url(${frame})`,
          backgroundSize: "100% 100%",
          padding: _sm ? 20 : "100px",
          fontFamily: "'Gloria Hallelujah', cursive",
          backgroundColor: "white",
        }}
      >
        <Typography
          style={{
            fontSize: _sm ? "1.5rem" : "2.5rem",
            fontFamily: "'Gloria Hallelujah', cursive",
            color: "red",
          }}
        >
          Beer Pong House Rules
        </Typography>
        <Box style={{ fontSize: _sm ? "1rem" : "1.5rem" }} component="ol">
          {items.map((item, i) => (
            <Box
              key={i}
              style={{
                fontSize: _sm ? "1rem" : "1.5rem",
                fontFamily: "'Gloria Hallelujah', cursive",
                color: "black",
              }}
              component="li"
              mt={1}
            >
              {item}
            </Box>
          ))}
        </Box>
        <Typography
          style={{
            fontSize: _sm ? "1rem" : "1.5rem",
            fontFamily: "'Gloria Hallelujah', cursive",
            color: "red",
            marginTop: 30,
          }}
        >
          “It’s better to be lucky than good, but best to be both.”
        </Typography>
      </Box>
      <img
        style={{
          backgroundColor: "white",
          width: "100%",
          boxSizing: "border-box",
        }}
        src={eth}
        alt="eth"
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  fullpage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundSize: '100%',
  },
}));
