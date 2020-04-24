import React, {useState} from "react";
import { axiosWithAuth } from "./axiosAuth";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {

  const classes = useStyles();

  const [credentials, setCredentials] = useState({});

  const { push } = useHistory();

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        push('/protected');
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      })
  }



  return (
    <>
     <div id="form">
        <form onSubmit={login} className={classes.root} noValidate autoComplete="off">
  
        <TextField id="filled-basic" label="Username" variant="filled" type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}/>
  
        <TextField id="filled-basic" label="Password" variant="filled"type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange} />
  <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon/>
          }
          type="submit"
        >
          Log In
        </Button>
           
          </form>
     </div>
    </>
  );
};

export default Login;
