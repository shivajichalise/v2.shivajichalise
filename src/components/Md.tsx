import Markdown from "markdown-to-jsx";
import Code from "../components/Code";
import MdProps from "../types/MdProps";
import { Link } from "react-router-dom";

const Md = ({ markdown }: MdProps) => {
  return (
    <div className="prose prose-invert min-w-full my-5">
      <Markdown
        options={{
          overrides: {
            code: {
              component: Code,
            },
            a: {
              component: (props) => {
                // Extract the 'href' value from the 'a' tag
                const href = props.href;
                // Use the 'to' prop if 'href' is internal, otherwise use 'href'
                const to = href.startsWith("/") ? href : null;

                return <Link to={to} {...props} />;
              },
            },
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default Md;
