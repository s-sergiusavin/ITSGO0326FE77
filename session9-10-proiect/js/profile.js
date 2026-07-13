document.addEventListener("DOMContentLoaded", () => {

        // Search (same as feed)
        const searchInput = document.getElementById("search-input");
        searchInput.addEventListener("input", (e) => {
          console.log("Searching for:", e.target.value);
          // You can extend this to filter content on profile if needed
        });

        // Edit Profile
        const editBtn = document.getElementById("edit-profile-btn");
        const userNameEl = document.getElementById("user-name");
        const userBioEl = document.getElementById("user-bio");

        editBtn.addEventListener("click", () => {
          const newName = prompt("Enter new name:", userNameEl.textContent);
          if (newName) userNameEl.textContent = newName;

          const newBio = prompt("Enter new bio:", userBioEl.textContent);
          if (newBio) userBioEl.textContent = newBio;
        });

        // Add Friend buttons
        function setupAddFriends() {
          const addButtons = document.querySelectorAll(".add-friend-btn");
          addButtons.forEach(btn => {
            btn.addEventListener("click", () => {
              const friendName = btn.parentElement.querySelector("span").textContent;
              
              btn.textContent = "Request Sent";
              btn.disabled = true;
              btn.style.background = "#28a745";
              btn.style.color = "white";
              
              setTimeout(() => {
                alert(`✅ Friend request sent to ${friendName}!`);
              }, 300);
            });
          });
        }

        // Comments on profile posts
        function setupProfileComments() {
          const commentWrappers = document.querySelectorAll(".comment-input-wrapper");
          
          commentWrappers.forEach(wrapper => {
            const input = wrapper.querySelector(".profile-comment-input");
            const sendBtn = wrapper.querySelector(".send-comment-btn");
            
            function postComment() {
              const text = input.value.trim();
              if (!text) return;
              
              const commentDiv = document.createElement("div");
              commentDiv.style.cssText = `
                margin-top: 10px; padding: 10px; background: #f8f9fa; 
                border-radius: 8px; font-size: 0.95rem;
              `;
              commentDiv.innerHTML = `
                <strong>You:</strong> ${text}
              `;
              
              wrapper.parentElement.appendChild(commentDiv);
              input.value = "";
            }
            
            sendBtn.addEventListener("click", postComment);
            
            input.addEventListener("keypress", (e) => {
              if (e.key === "Enter") postComment();
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
            document.getElementById("notification-count").textContent = "0";
            alert("🛎️ No new notifications");
          });
        }

        // Trending topics click
        function setupTrending() {
          const trendingItems = document.querySelectorAll(".info-trendings");
          trendingItems.forEach(item => {
            item.style.cursor = "pointer";
            item.addEventListener("click", () => {
              const topic = item.querySelector("p").textContent;
              alert(`🔥 Trending topic clicked: ${topic}\n(You would see related posts here)`);
            });
          });
        }

        // Initialize everything
        setupAddFriends();
        setupProfileComments();
        setupNotifications();
        setupTrending();

        // Avatar hover effect
        const avatar = document.getElementById("profile-avatar");
        avatar.addEventListener("click", () => {
          alert("🖼️ Change profile picture (demo - upload would go here)");
        });

        console.log("%c✅ Profile Page JavaScript Loaded!", "color: #1e90ff; font-weight: bold");
      });