import { Box, Typography, Button ,useTheme, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Mint from './mintsec';
import logometamask from '../../assets/metamask.png';
import Countdown from "react-countdown";
import { useState } from 'react';

export default function Connect({ account, connectMetaMask, totalSupply, mint }) {
  const classes = useStyles();
  const theme = useTheme();
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));
  const endDate = "12 Dec 2021 23:00:00 GMT";
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <>
        <Typography variant='h5' align='center' color='textSecondary'>TOTAL MINTED</Typography>
        <Typography variant='h5' align='center' >{totalSupply}/8008</Typography>
      </>;
    } else {
      return (
        <>
          <Typography
            align="center"
            display='block'
            variant="h5"
            color="textSecondary"
          >
            Minting will go live in:
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            style={{fontSize: 18, fontWeight: 700}}
          >
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </Typography>
        </>
      );
    }
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Countdown
          date={Date.parse(endDate)}
          renderer={renderer}
        />
        { account ?
        <Box mb={_xs?3:5}>
          <Mint mint={mint} />
        </Box>
        :
        <Box>
          <Box mt={_xs?2:5} mb={_xs?3:7} textAlign='center'>
            <img src={logometamask} className={classes.icon} alt="metamask logo" />
          </Box>
          <Button variant='contained' onClick={connectMetaMask} color='primary' size='large' className={classes.btn} >CONNECT WITH METAMASK</Button>
        </Box>
        }
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    minHeight: 70,
    borderRadius: 15,
    fontSize: 22,
    [theme.breakpoints.down('xs')]: {
      minHeight: 50,
      borderRadius: 15,
      fontSize: 16,
    }
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      width: 106
    }
  }
}))
