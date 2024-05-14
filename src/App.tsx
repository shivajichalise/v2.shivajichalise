import "./index.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <div className="container mx-auto my-12 w-11/12 lg:w-3/5">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path=":markdown" element={<BlogPost />} />
        </Route>

        <Route path="/contact">
          <Route index element={<Contact />} />
        </Route>

        <Route path="/thankyou">
          <Route index element={<ThankYou />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
