import { useState, useEffect } from 'react';
import { Button,IconButton, Box, makeStyles} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircleRounded';

const CounterInput = ({ min, max, onCountChange }) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('0');
  const classes = useStyles();

  useEffect(() => {
    setInputValue(count)
    handleChangeCount();
    // eslint-disable-next-line
  }, [count]);

  const decrement = () => {
    if (count <= min) return;

    setCount(count - 1);
  };

  const increment = () => {
    if (count >= max) return;

    setCount(count + 1);
  };

  const handleBlur = () => {
    let num = parseInt(inputValue);
    num = num > max ? max : num;
    num = num < min ? min : num;

    if (isNaN(num)) {
      setInputValue(count.toString());
    } else {
      setCount(num);
      setInputValue(num.toString());
    }
  };

  const handleChangeCount = () => {
    if (onCountChange) onCountChange(count);
  };

  const handleChangeInput = ({ target: { value: inputValue } }) => {
    setInputValue(inputValue);
  };

  const handleMax = () => {
    setCount(max);
  };

  // -------------------- RENDER ---------------------

  return (
    <Box className={classes.root}>
        <span className={classes.bg}>
        </span>
      <IconButton onClick={decrement}>
        <RemoveCircleIcon className={classes.decrement} fontSize='large' />
      </IconButton>
      <input
        className={classes.input}
        type='text'
        value={inputValue}
        onChange={handleChangeInput}
        onBlur={handleBlur}
      />
      <IconButton className={classes.increment} onClick={increment}>
        <AddCircleIcon fontSize='large' />
      </IconButton>
      <Button variant="text" size='large' color="primary" onClick={handleMax}>
        Max
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'space-between',
    minWidth: '120px',
    position: 'relative'
  },
  input: {
    color: theme.palette.text.primary,
    width: 40,
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: 5,
    textAlign: 'center',
    fontSize: theme.typography.h5.fontSize,
  },
  bg: {
    top: '20px',
    left: '20px',
    position: 'absolute',
    height: '20px',
    width: '20px',
    backgroundColor:'white',
    clipPath: 'circle(38% at center)'
  },
  decrement: {
    color: '#000',
    // backgroundColor: '#fff',
    // clipPath: 'circle(34% at center)'
  },
  increment: {
    color: theme.palette.primary.main,
  },
}));

export default CounterInput;
