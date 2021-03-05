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
        <Post message='Hi, how are you?'/>
        <Post message='It is my first post'/>
      </div>
    </div>
  )
}

export default MyPosts