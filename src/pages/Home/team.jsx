import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DualHeading from "../../components/dualHeading";
import Card from "./cardteam";
import { teamData } from "../../utils";

export default function Team() {
  const classes = useStyles();
  const theme = useTheme();
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box id="team" px={_xs?3:23.5} pt={_xs?10:12} className={classes.root}>
      <Box mb={3}>
        <DualHeading first={teamData.title1} second={teamData.title2} align="right" />
      </Box>
      <Grid
        spacing={5}
        container
        justifyContent="center"
      >
        {teamData.members.map((item) => {
          return (
            <Grid item>
              <Card img={item.image} name={item.name} designation={item.designation} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));
