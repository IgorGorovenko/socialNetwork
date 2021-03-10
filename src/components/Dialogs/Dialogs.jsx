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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Igor" id="1" />
                <DialogItem name="Gurman" id="2" />
                <DialogItem name="Vova" id="3" />
                <DialogItem name="Andrey" id="4" />
                <DialogItem name="Sasha" id="5" />
                <DialogItem name="Jeka" id="6" />
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Fine'/>
            </div>
        </div>
    )

}

export default Dialogs