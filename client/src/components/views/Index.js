import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

  const useStyles = makeStyles(theme => ({
  
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

const Index = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.slider}>
                <Container textAlign="center">
                <Button href="/posts" color="inherit" variant="outlined" className={classes.buttonAction}>
                    Biblioteca NodeJS
                </Button>
                </Container>
            </div>
        </Fragment>
    );
};

export default Index;