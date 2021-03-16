import React from 'react'
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://freesvg.org/img/generic-avatar.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a Gurman',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://freesvg.org/img/generic-avatar.png',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a Gurman',
                location: {city: 'Moskov', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://freesvg.org/img/generic-avatar.png',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a Gurman',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div> key={u.id}
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}> Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users