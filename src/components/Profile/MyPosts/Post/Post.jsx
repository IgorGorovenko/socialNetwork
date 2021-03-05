import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://freesvg.org/img/generic-avatar.png' />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post