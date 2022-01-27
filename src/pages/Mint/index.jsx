import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import Connect from './connect';
import Footer from './footer';

export default function Mint({ account, connectMetaMask, totalSupply, price, mint }) {
  const classes = useStyles();

  return (
    <Box className={classes.fullpage}>
      <Box height='80px'></Box>
      <Connect account={account} connectMetaMask={connectMetaMask} totalSupply={totalSupply} price={price} mint={mint} />
      <Footer />
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  fullpage:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FAB2FF 0%, #1904E5 100%)'
  }
}))
