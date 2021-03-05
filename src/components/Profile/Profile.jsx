import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
    <div>
      <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' height='320' />
    </div>
    <div>
      avatar+ description
    </div>
    <MyPosts />
  </div>
      )
}

export default Profile