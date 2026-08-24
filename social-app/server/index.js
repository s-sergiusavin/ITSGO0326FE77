import express from "express";
import cors from "cors";
import { posts, friends, trending, profile, users, categoryImageKeywords } from "./data.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- Auth (demo only – not secure, no hashing/sessions) ---
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
});

// --- Feed ---
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.post("/api/posts", (req, res) => {
  const {
    title,
    description,
    author = "You",
    avatar = "https://i.pravatar.cc/80?img=8",
    category = "news",
  } = req.body || {};
  if (!title || !title.trim()) return res.status(400).json({ message: "Title is required" });
  const keywords = categoryImageKeywords[category] || "abstract,pattern";
  const newPost = {
    id: posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
    author,
    avatar,
    date: new Date().toLocaleDateString("ro-RO"),
    image: `https://loremflickr.com/800/450/${keywords}?lock=${Date.now()}`,
    category,
    title: title.trim(),
    description: (description || "").trim(),
    likes: 0,
    comments: [],
  };
  posts.unshift(newPost);
  res.status(201).json(newPost);
});

app.post("/api/posts/:id/like", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  const { delta } = req.body || {};
  const change = delta === -1 ? -1 : 1;
  post.likes = Math.max(0, post.likes + change);
  res.json(post);
});

app.post("/api/posts/:id/comments", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  const { text, user = "Guest" } = req.body || {};
  if (!text || !text.trim()) return res.status(400).json({ message: "Comment text required" });
  const comment = {
    id: post.comments.length + 1,
    user,
    avatar: "https://i.pravatar.cc/60?img=8",
    text,
    emoji: "",
  };
  post.comments.push(comment);
  res.status(201).json(comment);
});

// --- Profile / sidebars ---
app.get("/api/profile", (req, res) => res.json(profile));

app.patch("/api/profile", (req, res) => {
  const { bio, name, avatar, cover, about, quickInfo } = req.body || {};
  if (typeof bio === "string") profile.bio = bio;
  if (typeof name === "string" && name.trim()) profile.name = name.trim();
  if (typeof avatar === "string" && avatar.trim()) profile.avatar = avatar.trim();
  if (typeof cover === "string" && cover.trim()) profile.cover = cover.trim();
  if (Array.isArray(about)) profile.about = about.filter((a) => a && a.trim());
  if (Array.isArray(quickInfo)) profile.quickInfo = quickInfo.filter((q) => q && q.trim());
  res.json(profile);
});

app.post("/api/profile/photos", (req, res) => {
  const { url } = req.body || {};
  if (!url || !url.trim()) return res.status(400).json({ message: "Photo URL is required" });
  profile.gallery = [url.trim(), ...(profile.gallery || [])];
  res.status(201).json(profile);
});

app.delete("/api/profile/photos/:index", (req, res) => {
  const index = Number(req.params.index);
  if (!Array.isArray(profile.gallery) || index < 0 || index >= profile.gallery.length) {
    return res.status(404).json({ message: "Photo not found" });
  }
  profile.gallery.splice(index, 1);
  res.json(profile);
});

app.get("/api/friends", (req, res) => res.json(friends));
app.get("/api/trending", (req, res) => res.json(trending));

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`Social app API listening on http://localhost:${PORT}`);
});
