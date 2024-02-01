import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // background:'#ecf0f1',
    padding:20,
    width:'auto'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

export default function CoordinatorLogin() {
  const classes = useStyles();

  // state variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle login form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // call API to authenticate the user
  };

  return (
    <Container component="main" maxWidth="xs" >
      <div className={classes.paper} >
        <Typography component="h1" variant="h5">
          Coordinator Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
