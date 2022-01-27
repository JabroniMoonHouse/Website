import {
  Box,
  makeStyles,
  IconButton,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import Twitter from "../assets/Twitter.png";
import Discord from "../assets/Discord.png";
import Spotify from "../assets/opensea.png";
import Insta from "../assets/Instagram.png";
import { headerData } from "../utils";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <IconButton href={headerData.twitter}>
        <img src={Twitter} />
      </IconButton>
      <IconButton href={headerData.discord}>
        <img src={Discord} />
      </IconButton>
      <IconButton href={headerData.spotify}>
        <img style={{width:37}} src={Spotify} />
      </IconButton>
      <IconButton href={headerData.insta}>
        <img src={Insta} />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    // "& > *": {
    //   marginRight: theme.spacing(2.25),
    // },
  },
}));

export default Footer;
