import Markdown from "markdown-to-jsx";
import Code from "../components/Code";
import MdProps from "../types/MdProps";
import { Link } from "react-router-dom";

const Md = ({ markdown }: MdProps) => {
  return (
    <div className="prose prose-invert my-5 min-w-full">
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
                return <Link to={href} {...props} target={`_blank`} />;
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
