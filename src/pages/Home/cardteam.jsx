import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 220,
    height: 282,
    fontSize: '1.25rem',
    [theme.breakpoints.down('xs')]: {
      width: 142,
      height: 340
    }
  },
  media: {
    width: 142,
    borderRadius: 15,
    marginBottom: theme.spacing(2)
  },
  name:{
    fontWeight: 700
  }
}));

export default function MediaCard({ img, name, designation }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={img} className={classes.media} alt="specification" />
      <Box textAlign='center'>
        <Typography className={classes.name} color='primary' display='inline'>{name}</Typography>
        <Typography display='inline'>{designation}</Typography>
      </Box>
    </Box>
  );
}
