import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { indigo } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    '&:hover': {
      backgroundColor: indigo[700],
    },
  },
}))(Button);



function App() {
  const classes = useStyles();

  return (
    <Router>
      <h1>Welcome to the Bubble App!</h1>
     <div id="cont">
       <div className={classes.root} id="nav">
         
          <Link to="/">
          <ColorButton color="primary">Home</ColorButton>
  
          </Link>
          <Link to="/login"><ColorButton color="primary">Login</ColorButton>
  </Link>
          <Link to="/protected"><ColorButton color="primary">Bubbles</ColorButton>
  </Link>
       </div>

     </div> 

      <div className="App">
        <Route exact path="/login" component={Login} />
        <PrivateRoute path='/protected' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
