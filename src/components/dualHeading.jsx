import { Box, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";

export default function Heading({first, second, align}) {
  const classes = useStyles();
  const theme = useTheme()
  const _xs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box >
      <Typography style={{lineHeight: '2.5px', fontWeight: 500, fontSize:_xs?'1.375rem':'1.86rem'}} align={align} variant="h4">{first}</Typography>
      <Typography style={{fontWeight: 800, fontSize:_xs?'1.375rem':'1.86rem'}} align={align} variant="h4" color='textSecondary'>{second}</Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));