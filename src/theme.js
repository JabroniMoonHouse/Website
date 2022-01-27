import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary:{
      main: '#B2FBF6'
    },
    background: {
      default: '#000'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#F19DFF',
    },
    divider: 'rgba(255,255,255, 0.7)'
  },
  typography: {
    fontFamily: 'Titillium Web, sans-serif',
    button:{ fontFamily: `Montserrat, sans-serif`, fontWeight: 800 },
    h1:{ fontFamily: `Spectral, serif` },
    h2:{ fontFamily: `Spectral, serif` },
    h3:{ fontFamily: `Spectral, serif` },
    h4:{ fontFamily: `Montserrat, sans-serif` },
    h5:{ fontFamily: `Montserrat, sans-serif` },
    h6:{ fontFamily: `Montserrat, sans-serif` },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 500,
  //     md: 800,
  //     lg: 1280,
  //     xl: 1920,
  //   },
  // }
})

theme = responsiveFontSizes(theme)

export default theme;
// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: theme.spacing(3),
//     width: 345,
//   },
//   media: {
//     height: 140,
//   },
//   title: {
//     color: theme.palette.primary.main
//   }
// }))