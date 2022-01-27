import { Box, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import DualHeading from '../../components/dualHeading'

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box width='100%' px={_xs?3:10} mb={3} className={classes.root}>
      <Box width={_xs?'auto':'360px'}>
        <Box mb={1.4}>
          <DualHeading first='IT’S FAIR' second='ONE PRICE FITS ALL' align='left' />
        </Box>
        <Typography style={{fontSize: 16}}>Each Jabroni costs 0.12 ETH for a max of 8 per txn. Welcome to the Moon House.</Typography>
      </Box>
      <Box ml={_xs?0:2} width={_xs?'auto':'412px'} mt={_xs?'16px':'auto'} alignSelf='flex-end'>
        <Typography style={{fontSize: 14, textAlign: _xs?'justify':'left'}}>Disclaimer: Fifty Jabronis are withheld from mint and will be used for promotional purposes, giveaways, contests, and for the founders’ memberships to the Moon House.</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  }
}))
