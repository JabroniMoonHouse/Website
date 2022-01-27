import { Box, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Social from '../../components/social'
// import mail from '../../assets/mail.png'
// import arrow from '../../assets/arrow.png'

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box px={_xs?3:23.5} my={2} className={classes.root}>
      {/* <Box>
        <Typography align='center'>WANT TO LEARN MORE?</Typography>
        <Box className={classes.mail}>
          <img src={mail} alt="icon" />
          <input type="text" placeholder='Email Address' className={classes.cinput} />
          <img src={arrow} alt="acon" />
        </Box>
      </Box> */}
      <Box className={classes.social}><Social /></Box>
      <Box className={classes.copyright}>
        <Typography>© 2021 Jabroni Moon House LLC</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '&>*': {
        marginBottom: theme.spacing(1)
      }
    }
  },
  mail: {
    display: 'flex'
  },
  cinput: {
    borderRadius: 15,
    border: 'none',
    outline: 'none',
    paddingRight: 16,
    textAlign: 'center',
  },
  social: {

  },
  copyright: {

  },
}))
