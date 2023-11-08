import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import posts from "../config/posts.ts";
import ContentProps from "../types/ContentProps.ts";

const Blog = () => {
  const [postsList, setPostsList] = useState<ContentProps[]>([]);

  useEffect(() => {
    import("../assets/blogMetadata.json")
      .then((res) => res.default)
      .then((data) => {
        const combinedData = data.map((d) => ({
          type: "link",
          link: d.markdown,
          openInNewTab: false,
          title: d.title,
          suffix: `${d.created_at} - ${d.category}`,
        }));

        const updatedPostsList = [...posts];

        if (updatedPostsList[0].points) {
          updatedPostsList[0].points.data = combinedData;
        }

        setPostsList(updatedPostsList);
      });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Terminal type={"manpage"} content={postsList} />
      <Footer />
    </div>
  );
};

export default Blog;
