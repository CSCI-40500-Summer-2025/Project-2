import Container from "../../Components/Container.jsx";
import "./Home.css"
import "../../Components/Container.css";
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-title">Hunter College Lost & Found</h1>
        <p className="header-info">
          This is a community-based lost & found system. If your item hasn’t been found yet, please try contacting the{' '}
          <a
            href="https://hunter.cuny.edu/public-safety/about/lost-and-found/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            Official Hunter Lost & Found
          </a>.
          If you have lost an item and have not found it yet, please post it here so the community can help you.
          Likewise, if you have found an item, please post it here so it can be returned to its rightful owner.
        </p>

        <div className="report-section">
          <Link to="/report-found" className="pushable">
            <div className="shadow"></div>
            <div className="edge"></div>
            <button className="front report-button">Report Found Item</button>
          </Link>
          <Link to="/report-lost" className="pushable">
            <div className="shadow"></div>
            <div className="edge"></div>
            <button className="front report-button">Report Lost Item</button>
          </Link>
        </div>
      </header>

      <h2 className="lost-title">Recently Lost Items</h2>
      <div className="lost-grid">
        <Container
          type="lost"
          title="Lost Umbrella"
          date="June 10, 2025"
          link="d92787e4a2cc4266511a75fbf7506b4f1e8e4e821a85e21c387c322803763892"
          img={{
            src: "https://www.totes.com/cdn/shop/products/9302_BLK_1.jpg?v=1612537821",
            alt: "Lost umbrella"
          }}
          location="Hunter College Library"
          description="Brown handle, Black"
        />
        <Container
          type="lost"
          title="Lost Laptop Charger"
          date="June 7, 2025"
          link="e0de907c323cc5871f82ce94dba963f58b7b7afd0552211cb955418485ef89c4"
          img={{
            src: "https://m.media-amazon.com/images/I/81fK+pyZXwL.jpg",
            alt: "Lost laptop charger"
          }}
          location="Computer Lab 204"
          description="Black laptop charger compatible with Dell laptops."
        />
      </div>

      <h2 className="found-title">Recently Found Items</h2>
      <div className="found-grid">
        <Container
          type="found"
          title="Found Water Bottle"
          date="June 8, 2025"
          link="9f0b787f8e8c2bcc24d37d988555bd9a6b0af1ba8c8104eee24e4b111d383669"
          img={{
            src: "https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1620409727/BDMB050A-4/BDMB050A-4.jpg?_i=AA",
            alt: "Found water bottle"
          }}
          location="West Building, Room 404"
          description="LarQ Blue metal bottle"
        />

        <Container
          type="found"
          title="Found Sunglasses"
          date="June 3, 2025"
          link="c50b5d47b8df69a905111140abffae30b58e961de8ca62dcaff7fb9a812e4415"
          img={{
            src: "https://images.ray-ban.com/is/image/RayBan/8053672495652_0001.png?impolicy=SEO_4x3",
            alt: "Found sunglasses"
          }}
          location="Student Center"
          description="Black Ray-Ban sunglasses"
        />

        <Container
          type="found"
          title="Found Notebook"
          date="June 1, 2025"
          link="eed9e82bb9efffef2fdb608be9590b045a86cf4e3ff9f9d450643741045aa102"
          img={{
            src: "https://i.etsystatic.com/24723576/r/il/e92185/4102396311/il_1080xN.4102396311_oxos.jpg",
            alt: "Found notebook"
          }}
          location="Library, 2nd Floor"
          description="Blue spiral notebook with math notes"
        />
      </div>

    </>
  )
};

export default Home;
