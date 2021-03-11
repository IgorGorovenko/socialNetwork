let rerenderEntireTree = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 4},
            {id: 2, message: 'It is my first post', likesCount: 12},
            {id: 1, message: 'Hi, how are you?', likesCount: 4},
            {id: 2, message: 'It is my first post', likesCount: 12},
        ],
        newPostText: 'Gurman'

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Fine'},
            {id: 4, message: 'Ok'},
            {id: 5, message: 'Ok'},
        ],
        dialogs: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Gurman'},
            {id: 3, name: 'Vova'},
            {id: 4, name: 'Andrew'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Jeka'},
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer
}

export default state

// store - OOP