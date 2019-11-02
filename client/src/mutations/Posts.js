import gql from 'graphql-tag';

export const POSTS_CREATE = gql `
    mutation createPost($quantity: Int){
        createPost(quantity: $quantity)
    }
`;
export const POSTS_DELETE = gql `
    mutation deletePost($id: ID) {
        deletePost(id: $id)
    }
`;
