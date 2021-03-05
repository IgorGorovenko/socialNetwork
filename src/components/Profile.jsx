import './Profile.css';

const Profile = () => {
  return (
    <div className='content'>
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
      <div className='posts'>
        <div className='item'>
          post1
        </div>
        <div className='item'>
          post2
        </div>
      </div>
    </div>
  </div>
      )
}

export default Profile