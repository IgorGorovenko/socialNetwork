const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ],
    newMessageBody: ''

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state

        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer