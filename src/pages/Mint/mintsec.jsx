import { useState } from "react";
import {
  Container,
  Button,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CounterInput from "./counter-input";
import { mintData } from "../../utils";

const Mintsec = ({ mint }) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {isActive ? (
        <Box className={classes.mint}>
          <Box>
            <Typography className={classes.graysmall} variant="overline">
              MINT PRICE
            </Typography>
            <Typography variant="h4">{mintData.active.price}</Typography>
          </Box>
          <Box>
            <CounterInput
              min={0}
              max={8}
              onCountChange={(count) => setCount(count)}
            />
            <Typography
              display="block"
              align="center"
              className={classes.graysmall}
            >
              Max 8 per Transaction
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                mint(count);
              }}
            >
              MINT NOW
            </Button>
          </Box>
        </Box>
      ) : (
        <Box mb={5} className={classes.inactive}>
          <Typography variant="h4" color="textSecondary">
            {mintData.inactive.title}
          </Typography>
          <Typography variant="body1">
            {mintData?.inactive?.description}
            {<Button color="primary">{mintData.inactive.link}</Button>}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  column: {
    [theme.breakpoints.down(737)]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
  gap: {
    marginRight: theme.spacing(1.5),
  },
  gray: {
    color: theme.palette.grey[300],
  },
  graysmall: {
    color: theme.palette.grey[300],
    fontSize: "0.8rem",
  },
  mint: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "300px",
      textAlign: "center",
    },
  },
  inactive: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    height: "140px",
    justifyContent: "space-between",
    alignItems: "center",
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: "12px",
    backgroundColor: "#ffffff",
  },
}));

export default Mintsec;
