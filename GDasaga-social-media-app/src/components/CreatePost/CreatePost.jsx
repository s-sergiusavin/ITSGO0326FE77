import { useState } from 'react'
import ImageIcon from '@mui/icons-material/ImageOutlined'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../Avatar/Avatar'
import styles from './CreatePost.module.scss'

const LIMIT = 280

export default function CreatePost({ onPublish }) {
  const { user } = useAuth()
  const [text, setText] = useState('')
  const [withMedia, setWithMedia] = useState(false)

  const remaining = LIMIT - text.length
  const canPublish = text.trim().length > 0 && remaining >= 0

  function handlePublish() {
    if (!canPublish) return

    onPublish(text.trim(), withMedia)

    setText('')
    setWithMedia(false)
  }

  return (
    <div className={styles.box}>
      <Avatar name={user.name} color={user.color} src={user.avatar} size={42} />

      <div className={styles.right}>
        <textarea
          className={styles.input}
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
        />

        <div className={styles.bar}>
          <button
            type="button"
            className={`${styles.mediaBtn} ${withMedia ? styles.mediaOn : ''}`}
            onClick={() => setWithMedia(!withMedia)}
            title="Add an image"
          >
            <ImageIcon />
            <span>{withMedia ? 'Image added' : 'Image'}</span>
          </button>

          <span
            className={`${styles.counter} ${remaining < 20 ? styles.counterLow : ''
              }`}
          >
            {remaining}
          </span>

          <button
            type="button"
            className={styles.publish}
            onClick={handlePublish}
            disabled={!canPublish}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}
