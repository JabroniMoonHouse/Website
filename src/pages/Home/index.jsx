import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import About from './about';
import insideimg from '../../assets/inside.jpeg';
import Team from './team';
import Roadmap from './roadmap';
import Footer from './footer';

import inside from '../../assets/inside.jpeg'

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.fullpage}>
        <img src={inside} className={classes.media} alt="cover image" />
      </Box>
      <About />
      <Team />
      <Roadmap />
      <Footer />
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  fullpage:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // height: '100vh',
    // backgroundImage: `url(${insideimg})`,
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // [theme.breakpoints.down('xs')]: {
    //   height: '60vh'
    // }
  },
  media: {
    width: '100%',
    height: 'auto',
    maxHeight: '100vh',
    
  }
}))
