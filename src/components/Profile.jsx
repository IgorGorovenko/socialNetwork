import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
    <div>
      <img src='https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg' width='640'></img>
    </div>
    <div>
      avatar+ description
    </div>
    <div>
      my posts
      <div>
        new post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post1
        </div>
        <div className={s.item}>
          post2
        </div>
      </div>
    </div>
  </div>
      )
}

export default Profile