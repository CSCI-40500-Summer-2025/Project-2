import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import { getOrCreateUserId } from "../../utils/userid";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = getOrCreateUserId();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://project-2-hwiy.onrender.com/post/allposts"
        );
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.type === filter);

  const handleDelete = async (postId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `https://project-2-hwiy.onrender.com/post/deletepost/${postId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        }
      );

      if (res.ok) {
        alert("✅ Post deleted.");
        setPosts(posts.filter((p) => p._id !== postId));
      } else {
        const err = await res.json();
        alert("❌ " + err.message);
      }
    } catch (err) {
      console.error("Error deleting post:", err);
      alert("❌ Failed to delete post.");
    }
  };

  const handleResolve = async (postId) => {
    const confirmed = window.confirm("Mark this post as resolved?");
    if (!confirmed) return;

    try {
      const res = await fetch(
        `https://project-2-hwiy.onrender.com/post/resolve/${postId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("✅ Post marked as resolved.");
        setPosts(
          posts.map((p) => (p._id === postId ? { ...p, resolved: true } : p))
        );
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error resolving post:", err);
      alert("❌ Failed to mark as resolved.");
    }
  };

  return (
    <div className="home-container">
      <section className="hero">
        <h1>FoundIt @ Hunter College</h1>
        <p>
          Misplaced something? Found something valuable? Use this space to help
          reunite items with their rightful owners. Post below if you lost or
          found something on campus.
        </p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/report-lost")} className="lost-btn">
            I Lost Something
          </button>
          <button
            onClick={() => navigate("/report-found")}
            className="found-btn"
          >
            I Found Something
          </button>
        </div>
      </section>

      <section className="filter-section">
        <p>Filter posts:</p>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "lost" ? "active" : ""}
            onClick={() => setFilter("lost")}
          >
            Lost
          </button>
          <button
            className={filter === "found" ? "active" : ""}
            onClick={() => setFilter("found")}
          >
            Found
          </button>
        </div>
      </section>

      <section className="feed">
        <h2>Latest Posts</h2>
        {loading ? (
          <p className="loading-message">Loading posts...</p>
        ) : filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map((post) => (
            <div className={`post-card ${post.type}`} key={post._id}>
              {post.image && <img src={post.image} alt={post.title} />}
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>
                  <strong>Location:</strong> {post.location}
                </p>
                <p>
                  <strong>Description:</strong> {post.description}
                </p>
                <p>
                  <strong>Contact:</strong> {post.contact}
                </p>
                <p className="timestamp">
                  Posted on {new Date(post.date).toLocaleDateString()}
                </p>

                {/* Action Buttons for Post Owner */}
                <div className="post-actions">
                  {!post.resolved && post.userId === userId && (
                    <button
                      className="resolve-btn"
                      onClick={() => handleResolve(post._id)}
                    >
                      ✅ Mark as Resolved
                    </button>
                  )}
                  {post.userId === userId && (
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(post._id)}
                    >
                      🗑 Delete
                    </button>
                  )}
                </div>
                {post.resolved && (
                  <span className="resolved-badge">✔ Resolved</span>
                )}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Home;
