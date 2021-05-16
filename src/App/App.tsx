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

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');

  const [all, setAll] = useState({
    a,
    b,
    c,
    d,
  });

  return (
    <div className="App">
      <form
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setAll({ a, b, c, d });
        }}
      >
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>
          <div className={classes.Item}>
            <TextField fullWidth id="standard-basic" label="A" value={a} onChange={(e) => setA(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth id="standard-basic" label="B" value={b} onChange={(e) => setB(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth id="standard-basic" label="C" value={c} onChange={(e) => setC(e.target.value)} />
          </div>
          <div className={classes.Item}>
            <TextField fullWidth id="standard-basic" label="D" value={d} onChange={(e) => setD(e.target.value)} />
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
      </Paper>
    </div>
  );
}

export default App;
