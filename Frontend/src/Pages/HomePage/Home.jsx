import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";

const dummyPosts = [
  {
    id: 1,
    type: "lost",
    title: "Lost Umbrella",
    location: "Library, 3rd floor",
    description: "Black compact umbrella with a curved wooden handle.",
    postedAt: "2025-06-10",
    contact: "nina@email.com",
  },
  {
    id: 2,
    type: "found",
    title: "Found Wallet",
    location: "Cafeteria near vending machines",
    description: "Brown leather wallet with ID for John Doe.",
    postedAt: "2025-06-09",
    contact: "security@hunter.cuny.edu",
    image:
      "https://www.brickunderground.com/sites/default/files/styles/new_blog_entry_primary_image_sm/public/2023-09/iStock-1414774073.jpg",
  },
  {
    id: 3,
    type: "lost",
    title: "Lost Keys",
    location: "Outside North Building entrance",
    description: "Set of 3 keys on a blue keychain labeled 'Room 516'.",
    postedAt: "2025-06-08",
    contact: "marco.student@hunter.cuny.edu",
  },
  {
    id: 4,
    type: "found",
    title: "Found Laptop Charger",
    location: "Hunter west building, 6th floor",
    description: "MacBook charger left plugged in near window seat.",
    postedAt: "2025-06-08",
    contact: "lisa.foundit@gmail.com",
    image:
      "https://i.redd.it/hey-guys-will-this-laptop-charger-i-found-in-storage-work-v0-jqjowaaosnub1.jpg?width=3024&format=pjpg&auto=webp&s=0acb0685fb1e5a413f5fa3cf8b65c282da1f9309",
  },
  {
    id: 5,
    type: "lost",
    title: "Lost Textbook - Biology 101",
    location: "7th floor Hunter east Building",
    description: "Thick green book with name 'Samir P.' written inside cover.",
    postedAt: "2025-06-07",
    contact: "samir.bio@cuny.edu",
  },
];

const Home = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const filteredPosts =
    filter === "all"
      ? dummyPosts
      : dummyPosts.filter((post) => post.type === filter);

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
          <button
            onClick={() => {
              navigate("/report-lost");
            }}
            className="lost-btn"
          >
            I Lost Something
          </button>
          <button className="found-btn">I Found Something</button>
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
        {filteredPosts.map((post) => (
          <div className={`post-card ${post.type}`} key={post.id}>
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
              <p className="timestamp">Posted on {post.postedAt}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
