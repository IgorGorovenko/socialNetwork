import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' height='120'/>
            </div>
            <div className={s.descriptionBlock}>
                avatar+ description
            </div>
        </div>
    )
}

export default ProfileInfo