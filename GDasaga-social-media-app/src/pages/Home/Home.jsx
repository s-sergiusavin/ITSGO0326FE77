import { useState } from 'react'
import { posts as initialPosts, imaginiDemo } from '../../data/posts'
import { useAuth } from '../../context/AuthContext'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import CreatePost from '../../components/CreatePost/CreatePost'
import Post from '../../components/Post/Post'
import styles from './Home.module.scss'

export default function Home() {
  const { user } = useAuth()


  const [postList, setPostList] = useState(initialPosts)
  const [activeFilter, setActiveFilter] = useState('all')
  const [onlyMedia, setOnlyMedia] = useState(false)
  const [activeTopic, setActiveTopic] = useState(null)
  const [following, setFollowing] = useState([2, 3])
  function toggleFollow(userId) {
    setFollowing((current) =>
      current.includes(userId)
        ? current.filter((id) => id !== userId)
        : [...current, userId]
    )
  }

  function selectTopic(tag) {
    setActiveTopic((current) => (current === tag ? null : tag))
  }

  function publishPost(text, withMedia) {
    const tags = text
      .split(' ')
      .filter((word) => word.startsWith('#'))
      .map((word) => word.replace('#', ''))
    const pozaAleasa =
      imaginiDemo[Math.floor(Math.random() * imaginiDemo.length)]

    const newPost = {
      id: Date.now(),
      userId: user.id,
      time: 'a few seconds ago',
      text,
      tags,
      image: withMedia ? pozaAleasa : null,
      likes: 0,
      comments: [Super],
    }

    setPostList([newPost, ...postList])
  }

  function resetFilters() {
    setActiveFilter('all')
    setOnlyMedia(false)
    setActiveTopic(null)
  }

  const visiblePosts = postList.filter((post) => {
    if (activeFilter === 'following' && !following.includes(post.userId)) {
      return false
    }
    if (activeFilter === 'popular' && post.likes < 120) {
      return false
    }
    if (onlyMedia && !post.image) {
      return false
    }
    if (activeTopic && !post.tags.includes(activeTopic)) {
      return false
    }
    return true
  })

  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <LeftSidebar
          activeFilter={activeFilter}
          onChangeFilter={setActiveFilter}
          onlyMedia={onlyMedia}
          onToggleMedia={() => setOnlyMedia(!onlyMedia)}
          followingCount={following.length}
        />
      </div>


      <main className={styles.feed}>
        <CreatePost onPublish={publishPost} />

        {activeTopic && (
          <p className={styles.filterInfo}>
            I display posts with <strong>#{activeTopic}</strong>
          </p>
        )}

        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No posts to display</p>
            <p className={styles.emptyText}>
              The active filters are too strict. Clear them to see the entire feed.
            </p>
            <button
              type="button"
              className={styles.emptyBtn}
              onClick={resetFilters}
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      <div className={styles.right}>
        <RightSidebar
          activeTopic={activeTopic}
          onSelectTopic={selectTopic}
          following={following}
          onToggleFollow={toggleFollow}
        />
      </div>
    </div>
  )
}
