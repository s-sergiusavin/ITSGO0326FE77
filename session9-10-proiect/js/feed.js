// ====================== MAIN JAVASCRIPT ======================

      document.addEventListener("DOMContentLoaded", () => {
        // Like functionality
        function setupLikes() {
          const likeButtons = document.querySelectorAll(".like-btn");
          
          likeButtons.forEach(btn => {
            btn.addEventListener("click", () => {
              const post = btn.closest(".post");
              const likeCountEl = post.querySelector(".like-count");
              let count = parseInt(likeCountEl.textContent);
              
              count++;
              likeCountEl.textContent = count;
              
              // Visual feedback
              const icon = btn.querySelector("i");
              icon.style.color = "#1e90ff";
              icon.style.transform = "scale(1.3)";
              
              setTimeout(() => {
                icon.style.transform = "scale(1)";
              }, 300);
            });
          });
        }

        // Comment functionality
        function setupComments() {
          const posts = document.querySelectorAll(".post");
          
          posts.forEach(post => {
            const commentInput = post.querySelector(".new-comment-field");
            const sendBtn = post.querySelector(".insert-comment-button");
            const commentsContainer = post.querySelector(".user-comments");
            const commentCountEl = post.querySelector(".comment-count");
            
            let commentCount = parseInt(commentCountEl.textContent);
            
            function addComment(text) {
              if (!text.trim()) return;
              
              const commentHTML = `
                <div class="comment-content">
                  <div class="profile-user-comment">
                    <a href="#"><img src="./assets/profile.webp" alt="" class="profile-image" /></a>
                    <span>You</span>
                  </div>
                  <div class="user-comment-text">
                    ${text}
                    <div class="emoji-reaction">👍</div>
                  </div>
                  <div class="comment-reaction">
                    <strong class="comment-reaction-button">Like</strong>
                    <strong class="comment-reaction-button">Reply</strong>
                  </div>
                </div>
              `;
              
              commentsContainer.insertAdjacentHTML("beforeend", commentHTML);
              commentCount++;
              commentCountEl.textContent = commentCount;
              
              // Clear input
              commentInput.value = "";
            }
            
            // Send button
            sendBtn.addEventListener("click", () => {
              addComment(commentInput.value);
            });
            
            // Enter key support
            commentInput.addEventListener("keypress", (e) => {
              if (e.key === "Enter") {
                addComment(commentInput.value);
              }
            });
          });
        }

        // Search functionality (basic filter)
        function setupSearch() {
          const searchInput = document.getElementById("search-input");
          const posts = document.querySelectorAll(".post");
          
          searchInput.addEventListener("input", (e) => {
            const term = e.target.value.toLowerCase().trim();
            
            posts.forEach(post => {
              const title = post.querySelector(".post-title").textContent.toLowerCase();
              const description = post.querySelector(".post-description").textContent.toLowerCase();
              
              if (term === "" || title.includes(term) || description.includes(term)) {
                post.style.display = "block";
              } else {
                post.style.display = "none";
              }
            });
          });
        }

        // Share buttons
        function setupShare() {
          const shareButtons = document.querySelectorAll(".share-btn");
          
          shareButtons.forEach(btn => {
            btn.addEventListener("click", () => {
              alert("✅ Post shared! (Demo - in real app this would open share dialog)");
            });
          });
        }

        // Notification bell
        function setupNotifications() {
          const bell = document.getElementById("bell-icon");
          let count = 12;
          
          bell.addEventListener("click", (e) => {
            e.preventDefault();
            count = 0;
            document.getElementById("notification-count").textContent = count;
            alert("🛎️ No new notifications (demo)");
          });
        }

        // Three dots menu (demo)
        function setupOptions() {
          const options = document.querySelectorAll(".profile-options");
          
          options.forEach(option => {
            option.addEventListener("click", (e) => {
              e.preventDefault();
              alert("📋 Post options:\n• Save post\n• Hide post\n• Report");
            });
          });
        }

        // Initialize all features
        setupLikes();
        setupComments();
        setupSearch();
        setupShare();
        setupNotifications();
        setupOptions();

        // Keyboard shortcut: Press '/' to focus search
        document.addEventListener("keydown", (e) => {
          if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
            document.getElementById("search-input").focus();
          }
        });

        console.log("%c✅ Social Media Feed JS loaded successfully!", "color: #1e90ff; font-weight: bold");
      });

