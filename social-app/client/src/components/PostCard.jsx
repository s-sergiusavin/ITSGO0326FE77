import { useState } from "react";

export default function PostCard({ post, onLike, onComment, onClose, onOpenImage, onShare }) {
  const [commentText, setCommentText] = useState("");
  const [minimized, setMinimized] = useState(false);
  const [liked, setLiked] = useState(false);
  const [justLiked, setJustLiked] = useState(false);
  const [imgSrc, setImgSrc] = useState(post.image);

  const submitComment = () => {
    if (!commentText.trim()) return;
    onComment(post.id, commentText.trim());
    setCommentText("");
  };

  const handleLike = () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    onLike(post.id, nextLiked);
    if (nextLiked) {
      setJustLiked(true);
      setTimeout(() => setJustLiked(false), 400);
    }
  };

  const handleShare = () => {
    const fakeLink = `${window.location.origin}/feed#post-${post.id}`;
    navigator.clipboard?.writeText(fakeLink).catch(() => {});
    onShare(post);
  };

  const handleImgError = () => {
    setImgSrc(`https://picsum.photos/seed/post-fallback-${post.id}/800/450`);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-user-info">
          <a href="#">
            <img src={post.avatar} alt="" className="profile-image" />
          </a>
          <span>
            {post.author} <span className="date">{post.date}</span>
          </span>
        </div>

        <span className="post-window-dots">
          <button
            type="button"
            className="win-dot"
            title="Minimizează"
            onClick={() => setMinimized((m) => !m)}
          >
            _
          </button>
          <button type="button" className="win-dot" title="Restaurează" onClick={() => setMinimized(false)}>
            □
          </button>
          <button type="button" className="win-dot" title="Închide" onClick={() => onClose(post.id)}>
            ×
          </button>
        </span>
      </div>

      {!minimized && (
        <>
          <div className="content" id={`post-${post.id}`}>
            <button
              type="button"
              className="img-wrapper img-button"
              onClick={() => onOpenImage(imgSrc, post.title)}
              onDoubleClick={() => !liked && handleLike()}
              title="Click pentru a mări • Dublu-click pentru like"
            >
              <img src={imgSrc} alt="post" className="img-content" onError={handleImgError} />
              <span className="info-icon">
                <i className="bi bi-arrows-fullscreen"></i>
              </span>
            </button>

            <strong className="post-title">{post.title}</strong>

            <p className="post-description">{post.description}</p>
            <a href="/landing-page">Read more...</a>
          </div>

          <div className="reacts">
            <div className="likes-info">
              <i className={`bi bi-hand-thumbs-up-fill reacts-icons${liked ? " liked" : ""}`}></i>
              <span>{post.likes} likes</span>
            </div>

            <div className="comments-info">
              <span>{post.comments.length} comments</span>
              <i className="bi bi-chat-left-text-fill reacts-icons"></i>
            </div>
          </div>

          <div className="react-actions">
            <ul className="actions">
              <li
                className={`reaction${liked ? " active" : ""}${justLiked ? " reaction-pop" : ""}`}
                onClick={handleLike}
              >
                <i className={liked ? "bi bi-hand-thumbs-up-fill" : "bi bi-hand-thumbs-up"}></i>
                <span>{liked ? "Apreciat" : "Like"}</span>
              </li>
              <li className="reaction">
                <i className="bi bi-chat-left-text-fill"></i>
                <span>Comment</span>
              </li>
              <li className="reaction" onClick={handleShare}>
                <i className="bi bi-share-fill"></i>
                <span>Share</span>
              </li>
            </ul>
          </div>

          <hr />

          <div className="comment-section">
            <a href="#">
              <img src="https://i.pravatar.cc/60?img=8" alt="" className="profile-image" />
            </a>
            <input
              type="text"
              placeholder="Adauga un comentariu"
              className="new-comment-filed"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitComment()}
            />
            <div className="emoji-quickbar">
              {["👍", "😂", "❤️", "🔥"].map((e) => (
                <button
                  key={e}
                  type="button"
                  className="emoji-quick-btn"
                  onClick={() => setCommentText((t) => t + e)}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="wrap">
              <button className="insert-comment-button button" onClick={submitComment}>
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </div>

          <div className="user-comments">
            {post.comments.map((comment) => (
              <CommentRow key={comment.id} comment={comment} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CommentRow({ comment }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="comment-content">
      <div className="profile-user-comment">
        <a href="#">
          <img src={comment.avatar} alt="" className="profile-image" />
        </a>
        <span>{comment.user}</span>
      </div>
      <div className="user-comment-text">
        {comment.text}
        {comment.emoji && <div className="emoji-reaction">{comment.emoji}</div>}
      </div>
      <div className="comment-reaction">
        <strong
          className={`comment-reaction-button${liked ? " active" : ""}`}
          onClick={() => setLiked((l) => !l)}
        >
          {liked ? "✓ Apreciat" : "Like"}
        </strong>
        <strong className="comment-reaction-button">Comment</strong>
      </div>
    </div>
  );
}
