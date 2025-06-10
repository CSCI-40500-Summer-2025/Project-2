import Container from "../../Components/Container.jsx";
import "../../Components/Container.css";
import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <h1>Hunter College Lost & Found</h1>
      <p>
        This is a community based lost & found system. So items found will be posted here,
        if your item was not found please try contacting the   {' '}
        <a href="https://hunter.cuny.edu/public-safety/about/lost-and-found/">Offical Hunter Lost & Found</a>
      </p>

      <Link to="/report-found"><button>Report Found Item</button></Link>
      <Link to="/report-found"><button>Report Lost Item</button></Link>
      <Container
        title="Backpack"
        date="10/10/2010"
        img={{ src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPUoalU-GhgBOVimFNAC5yNua4W7pm2BrgA&s", alt: "Backpack" }}
        link="someIdvalue"
      />
    </>)
};

export default Home;
