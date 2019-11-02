import React, { Fragment, useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


import Paginator from 'react-hooks-paginator';



const Pagination = (props) => {
    const [page, addPage] = useState(props.page);
    const [offset, addOffset] = useState(props.offset)
    const [limit, addLimit] = useState(props.limit)

    const ButtonBack = (props.page > 1) ? <Fab variant="extended" aria-label="like" onClick={props.pagesBack}> <ArrowBackIcon /> Back </Fab> : '';

    const pages = Math.ceil(props.total / limit);
    console.log(props);
    

    const ButtonNext = (props.page !== pages) ? <Fab variant="extended" aria-label="like" onClick={props.pagesNext}> <ArrowForwardIcon /> Next </Fab> : '';

  
    return (
        <Fragment>
            <Container style={{marginTop: "5px", textAlign: "center"}}>
                <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                >
                {ButtonBack}
                {ButtonNext}
            </ButtonGroup>
            </Container>
        </Fragment>
    );
};

export default Pagination;