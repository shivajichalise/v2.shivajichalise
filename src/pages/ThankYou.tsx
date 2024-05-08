import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import Md from "../components/Md";
import { useState, useEffect } from "react";

const ThankYou = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../assets/markdowns/thank-you.md`).then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPost(response)),
    );
  }, []);

  return (
    <div className="">
      <Navbar />
      <Terminal type={"blog"} content={<Md markdown={post} />} />
      <Footer />
    </div>
  );
};

export default ThankYou;
