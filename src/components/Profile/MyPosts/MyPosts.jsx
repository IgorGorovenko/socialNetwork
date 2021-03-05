import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>add button</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='4'/>
        <Post message='It is my first post' likesCount='23'/>
      </div>
    </div>
  )
}

export default MyPosts