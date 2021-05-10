import React from "react";
import "./App.css";
import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: 400,
    margin: "20px auto",
    justifyContent: "center",
  },
  Item: {
    margin: 20,
  },
  Button: {
    marginBottom: 20,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <Paper className={classes.Paper}>
          <Typography variant="h4">TS Form Example</Typography>
          <div className={classes.Item}>
            <TextField id="standard-basic" label="A" fullWidth />
          </div>
          <div className={classes.Item}>
            <TextField id="standard-basic" label="B" fullWidth />
          </div>
          <div className={classes.Item}>
            <TextField id="standard-basic" label="C" fullWidth />
          </div>
          <div className={classes.Item}>
            <TextField id="standard-basic" label="D" fullWidth />
          </div>
          <div className={classes.Item}>
            <Button variant="contained" className={classes.Button}>
              Default
            </Button>
          </div>
        </Paper>
      </form>
    </div>
  );
}

export default App;
