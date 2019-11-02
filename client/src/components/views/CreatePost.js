import React, { Fragment, useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { POSTS_CREATE } from '../../mutations/Posts';
import Fab from '@material-ui/core/Fab';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';



const CreatePost = () => {

    const [createSuccess, setCreateSuccess] = useState(false);

    const [createPost, {dataPost, erroPosts}] = useMutation(POSTS_CREATE,{
        onCompleted(dataPost) {
            setTimeout(() => {
                setCreateSuccess(true)
                console.log(dataPost)
            }, 500);
        }
    })
    return (
        <Fragment>
            <h1>Posts Create</h1>
            <Fab variant="extended" aria-label="like" onClick={(e) => {
                e.preventDefault();
                createPost({variables: {quantity: 500}})
            }}>
            <LibraryAddIcon />
                Create Masivo
            </Fab>
            {(createSuccess) ? <h2>500 Posts Created!</h2> : ''}
        </Fragment>
    );
};

export default CreatePost;