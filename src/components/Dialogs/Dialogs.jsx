import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Gurman'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Andrew'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Jeka'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Ok'},
        {id: 5, message: 'Ok'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    )

}

export default Dialogs