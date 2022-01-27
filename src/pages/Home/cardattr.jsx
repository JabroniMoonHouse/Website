import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 166,
    height: 276,
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'row',
      width: '100%',
      height: 128,
    }
  },
  media: {
    width: 134,
    [theme.breakpoints.down("xs")]: {
      width: 116,
      marginLeft: theme.spacing(1)
    }
  },
}));

export default function MediaCard({ text, img }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography>{text}</Typography>
      <img src={img} className={classes.media} alt="specification" />
    </Box>
  );
}
