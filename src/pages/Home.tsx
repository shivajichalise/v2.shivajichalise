import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import introduction from "../config/introduction.ts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Terminal type={"manpage"} content={introduction} />
      <Footer />
    </div>
  );
};

export default Home;
