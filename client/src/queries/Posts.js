import gql from 'graphql-tag'

export const GET_ALL_POSTS = gql `
    query getAllPosts($limit: Int){
        getAllPosts(limit: $limit){
            id
            created_at
            author
            story_title
            title
            url
            story_url
            story_text
        }
        totalPosts
    }
`;
export const GET_POSTS = gql `
    query getAllPosts{
        getAllPosts{
            id
            created_at
            author
            story_title
            title
            url
            story_url
            story_text
        }
    }
`;