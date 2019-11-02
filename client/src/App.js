import React, { Fragment } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Redirect  } from "react-router-dom";
import Routes from './components/Routes';
import ArrayRoute from './components/ArrayRoute';
import {Animated} from "react-animated-css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
    
  }
})

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: '#fff'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  slider: {
    backgroundImage: 'url(https://blog.konstantvariables.com/wp-content/uploads/2019/04/mh3yxiJ.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: "fixed",
    marginTop: "-20px",
    minHeight: "720px",
    textAlign: "center"
  },

  buttonAction: {
    position: "absolute",
    top: "70%",
    color: "#ffcb4d",
    left: "43%"
  }
}));

const App = () => {

  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
          <Fragment >
            <CssBaseline />
            <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
              <Toolbar className={classes.toolbar}>
                <Typography color="inherit" noWrap className={classes.toolbarTitle}>
                  <a href="/" ><img src="https://www.reign.cl/assets/reign_logo.svg" alt="reign Logo" style={{ width: "50px" }}/></a>
                </Typography>
                <nav>
                  <Button href="/posts" color="inherit" variant="outlined" className={classes.link}>
                    Listado de Posts
                  </Button>
                </nav>
              </Toolbar>
            </AppBar>
            {/* Array list with th different Routes */}
            <Routes ArrayRoute = {ArrayRoute} />
          </Fragment>
        </Animated>
      </Router>
    </ApolloProvider>
  );
};

export default App;