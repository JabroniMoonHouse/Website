import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DualHeading from "../../components/dualHeading";
import Card from "./cardteam";
import { roadmapData } from "../../utils";

export default function Roadmap() {
  const classes = useStyles();
  const theme = useTheme();
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>
    <Box id="roadmap" px={_xs?3:23.5} pt={_xs?4:8} pb={_xs?4:10} className={classes.root}>
      <Box mb={3}>
        <DualHeading first="WHAT YOU’RE HERE FOR" second="ROADMAP" align="right" />
      </Box>
      <Box my={4}>
        {roadmapData.map((item) => (
          <Box className={classes.roadmap}>
            <Typography align='right'>{item.description}</Typography>
            <Typography className={classes.percent} color='primary'>{item.heading}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
    <Divider style={{margin: _xs?'auto 24px':'auto 180px'}} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  roadmap: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    fontSize: '1.25rem'
  },
  percent: {
    fontWeight: 700,
    fontFamily: 'Montserrat, sans-serif',
    marginLeft: theme.spacing(3)
  }
}));
