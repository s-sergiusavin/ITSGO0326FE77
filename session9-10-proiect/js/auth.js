document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("auth-form");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const loginButton = form.querySelector(".login-button");
        const registerBtn = document.getElementById("register-btn");
        const formTitle = document.getElementById("form-title");
        const forgotBtn = document.getElementById("forgot-password-btn");

        let isLoginMode = true;

        // Toggle between Login and Register
        registerBtn.addEventListener("click", () => {
          isLoginMode = !isLoginMode;

          if (!isLoginMode) {
            // Register mode
            formTitle.textContent = "Create Account";
            loginButton.value = "Register";
            registerBtn.textContent = "Back to Login";
            forgotBtn.style.display = "none";
          } else {
            // Login mode
            formTitle.textContent = "Login";
            loginButton.value = "Log in";
            registerBtn.textContent = "Create an account";
            forgotBtn.style.display = "inline";
          }
        });

        // Form submission
        form.addEventListener("submit", (e) => {
          e.preventDefault();

          const username = usernameInput.value.trim();
          const password = passwordInput.value.trim();

          if (!username || !password) {
            alert("❌ Please fill in all fields!");
            return;
          }

          // Demo credentials
          if (isLoginMode) {
            if (username === "demo" && password === "1234") {
              showSuccessMessage("✅ Login successful! Redirecting...");
              setTimeout(() => {
                window.location.href = "feed.html";
              }, 1500);
            } else {
              showErrorMessage("❌ Invalid username or password. Try: demo / 1234");
            }
          } else {
            // Register demo
            showSuccessMessage(`✅ Account created for ${username}! You can now log in.`);
            // Switch back to login after registration
            setTimeout(() => {
              isLoginMode = true;
              formTitle.textContent = "Login";
              loginButton.value = "Log in";
              registerBtn.textContent = "Create an account";
              forgotBtn.style.display = "inline";
              form.reset();
            }, 2000);
          }
        });

        // Forgot password
        forgotBtn.addEventListener("click", (e) => {
          e.preventDefault();
          const email = prompt("Enter your email address to reset password:");
          if (email && email.includes("@")) {
            alert(`✅ Reset link sent to ${email} (demo)`);
          } else if (email) {
            alert("❌ Please enter a valid email.");
          }
        });

        // Show success message
        function showSuccessMessage(msg) {
          const success = document.createElement("div");
          success.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background: #4CAF50; color: white; padding: 15px 25px; border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1000; font-weight: 600;
          `;
          success.textContent = msg;
          document.body.appendChild(success);

          setTimeout(() => {
            success.style.transition = "opacity 0.5s";
            success.style.opacity = "0";
            setTimeout(() => success.remove(), 500);
          }, 2500);
        }

        // Show error message
        function showErrorMessage(msg) {
          const error = document.createElement("div");
          error.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background: #f44336; color: white; padding: 15px 25px; border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1000; font-weight: 600;
          `;
          error.textContent = msg;
          document.body.appendChild(error);

          setTimeout(() => {
            error.style.transition = "opacity 0.5s";
            error.style.opacity = "0";
            setTimeout(() => error.remove(), 500);
          }, 3000);
        }

        // Keyboard support
        document.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && document.activeElement.tagName === "INPUT") {
            if (!form.contains(document.activeElement)) return;
            // Form will handle it naturally
          }
        });

        // Demo hint
        console.log("%c🔑 Demo Login: username = 'demo' | password = '1234'", "color: #1e90ff; font-weight: bold");
      });