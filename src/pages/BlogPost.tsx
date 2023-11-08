import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import Md from "../components/Md";
import blogMetadata from "../assets/blogMetadata.json";

const BlogPost = () => {
  const { markdown } = useParams();
  const [post, setPost] = useState("");

  const hasPost = blogMetadata.some((item) => item.markdown === markdown);

  useEffect(() => {
    if (hasPost) {
      import(`../assets/markdowns/${markdown}.md`).then((res) =>
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => setPost(response)),
      );
    } else {
      import(`../assets/markdowns/not-found.md`).then((res) =>
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => setPost(response)),
      );
    }
  }, []);

  return (
    <div className="">
      <Navbar />
      <Terminal type={"blog"} content={<Md markdown={post} />} />
      <Footer />
    </div>
  );
};

export default BlogPost;
