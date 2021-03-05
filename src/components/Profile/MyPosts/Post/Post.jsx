import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://freesvg.org/img/generic-avatar.png' />
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post