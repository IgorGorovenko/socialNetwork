import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It is my first post', likesCount: 12},
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It is my first post', likesCount: 12},
    ]
};

it('message of new post update', () => {
    // 1. test data
    let action = addPostActionCreator('it kamasutra')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
});

it('length post up', () => {
    // 1. test data
    let action = addPostActionCreator('it kamasutra')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[4].message).toBe('it kamasutra')
});

it('delete', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
});


