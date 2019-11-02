import mongoose from "mongoose";

import { Posts } from "./db";
import { rejects } from "assert";

import fetch from 'node-fetch';

export const resolvers = {
    Query: {
        getAllPosts: (root, {limit, offset}) => {
            if(!limit) {limit = 20 }
            return new Promise((resolve, object) => {
                Posts.find({delete: false}, (error, post) => {
                    if(error) rejects(error)
                    else resolve(post)
                }).limit(limit).skip(offset).sort({date: 'desc'})
            })
        },
        getPost: (root, {id}) => {
            return new Promise((resolve, object) => {
                Posts.findById(id, (error, post) => {
                    if(error) rejects(error)
                    else resolve(post)
                })
            })
        },
        getPostByObjectId: (root, {objectID}) => {
            return new Promise((resolve, object) => {
                Posts.find({objectID: objectID }, (error, post) => {
                    if(error) rejects(error)
                    else {
                        resolve(post)
                    }
                })
            })
        },
        totalPosts: (root) => {
            return new Promise((resolve, object) => {
                Posts.countDocuments({delete: false}, (error, count) =>{
                    if(error) rejects(error)
                    else resolve(count)
                })
            })
        }
    },

    Mutation: {
        createPost : (root, { quantity }) => {
            const urlPosts = "http://hn.algolia.com/api/v1/search_by_date?query=nodejs";
            const perPage = quantity;
            const page = 1;


            // &page=1&hitsPerPage=3
            fetch(`${urlPosts}&page=${page}&hitsPerPage=${perPage}`)
            .then(res => res.json())
            .then(json => {
                json.hits.forEach(hit => {
                    
                    const postByObjID= new Promise((resolve, object) => {
                        Posts.count({objectID: hit.objectID }, (error, post) => {
                            if(error) rejects(error)
                            else {
                                resolve(post)
                                if(post > 0){
                                    return null;
                                }else{
                                    
                                    const newPosts = new Posts({
                                        created_at :  hit.created_at,
                                        title :  hit.title,
                                        url :  hit.url,
                                        author :  hit.author,
                                        points :  hit.points,
                                        story_text :  hit.story_text,
                                        comment_text :  hit.comment_text,
                                        num_comments :  hit.num_comments,
                                        story_id :  hit.story_id,
                                        story_title :  hit.story_title,
                                        story_url :  hit.story_url,
                                        parent_id :  hit.parent_id,
                                        created_at_i :  hit.created_at_i,
                                        _tags :  hit._tags, 
                                        objectID :  hit.objectID,
                                        _highlightResult: hit._highlightResult,
                                        delete: false
                                    })
                                    newPosts.id = newPosts._id;
                                    
                                    new Promise((resolve, object) =>{
                                        newPosts.save((error) => {
                                            if(error) rejects(error);
                                            else {
                                                resolve(newPosts)
                                            }
                                        })
                                    }) 
                                }
                            }
                        })
                    })               
                });
            } );
            
            return "Create "+ quantity +" Posts!";
        },

        deletePost: (root, {id}) => {
            Posts.findById(id, (error, post) => {
                if(error){
                    if(error) rejects(error);
                }else{
                   post.delete = true;
                   post.save((error, post) => {
                      if(error){
                        if(error) rejects(error);
                      }else{ 
                         return true;
                      }
                   });
                }
             });

             return "Delete!"
        }
    }
}