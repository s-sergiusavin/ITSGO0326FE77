 document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("booking-form");
        const nameInput = document.getElementById("name");
        const bookButton = document.getElementById("callToActionButton");

        // Book Now Button
        bookButton.addEventListener("click", () => {
          const name = nameInput.value.trim();

          if (name === "") {
            showMessage("❌ Please enter your name!", "error");
            return;
          }

          // Success animation + message
          bookButton.style.transition = "all 0.3s";
          bookButton.value = "Booking...";
          bookButton.disabled = true;

          setTimeout(() => {
            showMessage(`🎉 Thank you, ${name}! Your spot has been reserved.`, "success");
            
            // Reset form after success
            setTimeout(() => {
              form.reset();
              bookButton.value = "Book now";
              bookButton.disabled = false;
            }, 2500);
          }, 1200);
        });

        // Allow pressing Enter in the input field
        nameInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            bookButton.click();
          }
        });

        // Message function
        function showMessage(text, type) {
          const message = document.createElement("div");
          message.style.cssText = `
            position: fixed;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            padding: 16px 28px;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
            z-index: 10000;
            text-align: center;
            min-width: 280px;
          `;

          if (type === "success") {
            message.style.backgroundColor = "#28a745";
          } else {
            message.style.backgroundColor = "#dc3545";
          }

          message.textContent = text;
          document.body.appendChild(message);

          setTimeout(() => {
            message.style.opacity = "0";
            message.style.transition = "opacity 0.6s ease";
            setTimeout(() => message.remove(), 600);
          }, 3500);
        }

        // Simple scroll animation for call-to-action section
        const ctaSection = document.querySelector(".call-to-action");
        window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
            ctaSection.style.opacity = "1";
          }
        });

        // Keyboard shortcut: Press "B" to focus name input
        document.addEventListener("keydown", (e) => {
          if (e.key.toLowerCase() === "b" && document.activeElement.tagName !== "INPUT") {
            e.preventDefault();
            nameInput.focus();
          }
        });

        console.log("%c✅ Landing Page JavaScript Loaded Successfully!", "color: #ff6b6b; font-weight: bold");
      });