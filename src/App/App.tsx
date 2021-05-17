import './App.css';

import { Button, makeStyles, Paper, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  Button: {
    marginBottom: theme.spacing(2),
  },
  Item: {
    margin: theme.spacing(2),
  },
  Paper: {
    justifyContent: 'center',
    margin: '20px auto',
    width: theme.spacing(50),
  },
}));

function App() {
  const classes = useStyles();

  const [a, setA] = useState<string | number>('');
  const [b, setB] = useState<string | number>('');
  const [c, setC] = useState<string | number>('');
  const [d, setD] = useState<string | number>('');

  const [all, setAll] = useState({ a, b, c, d });

  const [sumStr, setSumStr] = useState('');
  const [sum, setSum] = useState(0);

  const handleSumbit = () => {
    setAll({ a, b, c, d });
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number') {
      setSum(a + b + c + d);
    } else {
      setSumStr(`${a}${b}${c}${d}`);
    }
  };

  return (
    <div className="App">
      <form
        autoComplete="off"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          handleSumbit();
        }}
      >
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>
          <div className={classes.Item}>
            <TextField
              fullWidth
              id="standard-basic"
              label="A"
              value={a}
              onChange={(e) => setA(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <TextField
              fullWidth
              id="standard-basic"
              label="B"
              value={b}
              onChange={(e) => setB(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <TextField
              fullWidth
              id="standard-basic"
              label="C"
              value={c}
              onChange={(e) => setC(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <TextField
              fullWidth
              id="standard-basic"
              label="D"
              value={d}
              onChange={(e) => setD(isNaN(+e.target.value) ? e.target.value : +e.target.value)}
            />
          </div>
          <div className={classes.Item}>
            <Button className={classes.Button} type="submit" variant="contained">
              Submit
            </Button>
          </div>
        </Paper>
      </form>
      <Paper className={classes.Paper}>
        <pre>{JSON.stringify(all, null, 2)}</pre>
        <hr />
        {sumStr}
        <hr />
        {sum}
      </Paper>
    </div>
  );
}

export default App;
