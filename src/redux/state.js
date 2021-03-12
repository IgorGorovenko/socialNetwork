let store = {
    _state: {
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
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer
    }
}

export default store;
window.store = store;

// store - OOP