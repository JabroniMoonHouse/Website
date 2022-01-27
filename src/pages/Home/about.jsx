import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router'; 
import DualHeading from '../../components/dualHeading';
import Card from './cardattr';
import { aboutData } from '../../utils';
import Countdown from "react-countdown";
import cover from '../../assets/insidecover.jpeg';
import welcome1 from '../../assets/welcome1.jpeg';
import welcome2 from '../../assets/welcome2.jpeg';


const {welcome, story, specs} = aboutData

export default function About() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const _md = useMediaQuery(theme.breakpoints.down(1118));
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));
  const endDate = "12 Dec 2021 23:00:00 GMT";

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Button
      onClick={()=>{history.push('/mint')}}
      variant='contained'
      color='primary'
      style={{borderRadius:15, fontStyle: 'italic', fontSize: _xs?18:26}}
      fullWidth
      size='large'>
        MINT
        </Button>;
    } else {
      return (
        <>
          <Typography
            align="center"
            variant="button"
            component="div"
            color="textSecondary"
          >
            Minting will go live in:
          </Typography>
          <Button variant='contained' color='primary' style={{borderRadius:15, fontStyle: 'italic', fontSize: _xs?18:26}} fullWidth size='large'>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </Button>
        </>
      );
    }
  };

  return (
    <Box id='about' px={_xs?3:23.5} pt={_xs?4:20} className={classes.root}>
      <Box className={classes.welcome}>
        <Grid container spacing={4} >
          <Grid item xs={12} sm={12} md={7}>
            <DualHeading first={welcome.title1} second={welcome.title2} align='left'  />
            <Box mt={3}>
              <Typography>{welcome.description}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box className={classes.welcomeImgContainer}>
              <img src={welcome1} className={classes.welcomeImg} alt="" />
              <img src={welcome2} className={classes.welcomeImg} alt="" />
            </Box>
          </Grid>
        </Grid>

      </Box>

      <Box className={classes.story}>
        <Box mb={3}>
          <DualHeading first={story.title1} second={story.title2} align='left' />
        </Box>
        <Typography align='justify' style={{whiteSpace: 'pre-wrap'}}>{story.description}</Typography>
        <Box my={4}>
          <img src={cover} style={{width:'100%'}} alt="cover" />
        </Box>
        <Countdown
          date={Date.parse(endDate)}
          renderer={renderer}
        />
      </Box>

      <Box className={classes.specs}>
        <Box mb={3}>
          <DualHeading first={specs.title1} second={specs.title2} align='right' />
        </Box>
        <Grid spacing={_xs?2:5} container justifyContent={_md?'center':'center'}>
          {specs.specs.map((item)=>{
            return(
            <Grid item>
              <Card img={item.img} text={item.text} />
            </Grid>
          )})
          }
        </Grid>

      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    textAlign: 'justify'
    // [theme.breakpoints.down('xs')]:{
    // }
  },
  welcome: {
    marginBottom: theme.spacing(10)
  },
  welcomeImg: {
    width:180,
    [theme.breakpoints.down(1294)]:{
      width: '49%'
    },
    [theme.breakpoints.between(960,1050)]:{
      width: '128px'
    },
    [theme.breakpoints.down('sm')]:{
      width: '49.5%'
    }
  },
  welcomeImgContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    [theme.breakpoints.down('sm')]:{
      gap: 2,
    }
  },
  story: {
    marginBottom: theme.spacing(10),
  },
  specs: {

  }
}))
