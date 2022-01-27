import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import bgjabroni from '../../assets/jabroni.png'

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.fullpage}>
      <Button className={classes.btn} variant='contained' color='primary' size='large' >COMING SOON</Button>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  fullpage:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${bgjabroni})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  },
  btn: {
    fontSize: 25,
    borderRadius: '15px',
    width: 400,
    margin: 'auto 24px'
  }
}))
