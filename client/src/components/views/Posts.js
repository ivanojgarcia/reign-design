import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { GET_ALL_POSTS } from '../../queries/Posts'
import { POSTS_DELETE } from '../../mutations/Posts'
import Fab from '@material-ui/core/Fab';
import Pagination from '../Pagination'

import { useQuery, useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
      },
      table: {
        minWidth: 650,
      },
    slider: {
        backgroundImage: 'url(https://blog.konstantvariables.com/wp-content/uploads/2019/04/mh3yxiJ.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: "fixed",
        minHeight: "100px",
        marginTop: "-20px",
      },
  });
  
const Posts = () => {
    const classes = useStyles();

    useEffect(() => {
        
    })
    const [page, addPage] = useState(1);
    const [offset, addOffset] = useState(0)
    const [limit, addLimit] = useState(200)

    const [removeItemPost, {dataPost, erroPosts}] = useMutation(POSTS_DELETE,{
        onCompleted(dataPost) {
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    })

    const RemovePosts = (e, idPost) => {
        e.preventDefault();
        removeItemPost({variables: {id: idPost}})
    }

    const pagesBack = () => {
        
    }
    const pagesNext = () => {
        addOffset(limit+offset);
        addPage(page+1)
    }

    const {data, loading, error} = useQuery(GET_ALL_POSTS,{variables: {limit: limit, offset: offset}})
    if(loading) return "Loading...";
    if(error) return `Error: ${error.message}`;
    return (
        <Fragment>
            <div className={classes.slider}>
                <Container>
                    <h1 style={{color: '#fff'}}>HN Feed</h1>
                    <h2 style={{color: '#fff'}}>{'We <3 Hacker news!'}</h2>
                </Container>
            </div>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Created</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.getAllPosts.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {(row.story_url != null || row.url != null) ? <a href={(row.url) ? row.url : row.story_url} target="blank">{(row.title) ? row.title : row.story_title }</a> : 'Unavaible'}
                                </TableCell>
                                <TableCell align="right">{(row.author) ? row.author : "Anonymous" }</TableCell>
                                <TableCell align="right">{ new Date(parseInt(row.created_at)).toString() }</TableCell>
                                <TableCell align="right">
                                <Fab
                                    aria-label="remove"
                                    color="secondary"
                                    id={row.id}
                                        onClick= {(e) => {
                                            RemovePosts(e, row.id)
                                        }}
                                    > 
                                    <DeleteIcon />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        ))} 
                    </TableBody>
                </Table>
            </Paper>
            <Pagination 
            page={page} 
            offset={offset} 
            total={data.totalPosts} 
            limit={limit} 
            pagesBack={pagesBack}
            pagesNext={pagesNext}
            />
        </Fragment>
    );
};

export default Posts;