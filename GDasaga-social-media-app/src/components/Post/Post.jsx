import { useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import SendIcon from '@mui/icons-material/Send'
import { getUserById } from '../../data/users'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../Avatar/Avatar'
import styles from './Post.module.scss'

export default function Post({ post }) {
  const author = getUserById(post.userId)
  const { user } = useAuth()

  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState(post.comments)
  const [newComment, setNewComment] = useState('')

  const likes = liked ? post.likes + 1 : post.likes

  function handleAddComment(e) {
    e.preventDefault()

    if (newComment.trim() === '') return

    const comment = {
      id: Date.now(),
      userId: user.id,
      time: 'acum cateva secunde',
      text: newComment.trim(),
    }

    setComments([...comments, comment]) 
    setNewComment('') 
  }

  const words = post.text.split(' ')

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <Link to={`/profil/${author.id}`} className={styles.author}>
          <Avatar
            name={author.name}
            color={author.color}
            src={author.avatar}
            size={42}
          />
          <div>
            <p className={styles.name}>{author.name}</p>
            <p className={styles.meta}>
              {author.handle} &middot; {post.time}
            </p>
          </div>
        </Link>
      </header>

      <p className={styles.text}>
        {words.map((word, index) =>
          word.startsWith('#') ? (
            <span key={index} className={styles.hashtag}>
              {word}{' '}
            </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </p>

      {post.image && (
        <img className={styles.image} src={post.image} alt="" loading="lazy" />
      )}

      <footer className={styles.actions}>
        <button
          type="button"
          className={`${styles.action} ${liked ? styles.liked : ''}`}
          onClick={() => setLiked(!liked)}
        >
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          <span>{likes}</span>
        </button>

       
        <button
          type="button"
          className={`${styles.action} ${showComments ? styles.open : ''}`}
          onClick={() => setShowComments(!showComments)}
        >
          <ChatBubbleOutlineIcon />
          <span>{comments.length}</span>
        </button>

        <button
          type="button"
          className={`${styles.action} ${styles.save} ${
            saved ? styles.savedOn : ''
          }`}
          onClick={() => setSaved(!saved)}
        >
          {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          <span>{saved ? 'Saved' : 'Save'}</span>
        </button>
      </footer>

    
      {showComments && (
        <section className={styles.comments}>
          {comments.length > 0 ? (
            <ul className={styles.list}>
              {comments.map((comment) => {
                const person = getUserById(comment.userId)

                return (
                  <li key={comment.id} className={styles.comment}>
                    <Avatar
                      name={person.name}
                      color={person.color}
                      src={person.avatar}
                      size={32}
                    />
                    <div className={styles.bubble}>
                      <p className={styles.commentHead}>
                        <Link
                          to={`/profil/${person.id}`}
                          className={styles.commentName}
                        >
                          {person.name}
                        </Link>
                        <span className={styles.commentTime}>
                          {comment.time}
                        </span>
                      </p>
                      <p className={styles.commentText}>{comment.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className={styles.noComments}>
              Be the first to comment on this post
            </p>
          )}

          
          <form className={styles.form} onSubmit={handleAddComment}>
            <Avatar
              name={user.name}
              color={user.color}
              src={user.avatar}
              size={32}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className={styles.send}
              disabled={newComment.trim() === ''}
              title="Send comment"
            >
              <SendIcon />
            </button>
          </form>
        </section>
      )}
    </article>
  )
}
