import { useNavigate } from "react-router";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        🎒 FoundIt
      </div>
      <nav className="nav-links">
        <button onClick={() => navigate("/report-lost")}>Report Lost</button>
        <button onClick={() => navigate("/report-found")}>Report Found</button>
      </nav>
    </header>
  );
};

export default Header;
