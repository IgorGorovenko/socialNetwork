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
        {id: 6, name: 'Jeka'}
    ]

};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer