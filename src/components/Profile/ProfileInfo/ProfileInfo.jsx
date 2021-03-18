import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div >
            <div>
                <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' height='120'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo