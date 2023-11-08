import Content from "../components/Content";
import ContentProps from "../types/ContentProps.ts";
import TerminalProps from "../types/TerminalProps.ts";

const Terminal = ({ type, content }: TerminalProps) => {
  return (
    <div className="flex flex-col my-5 border-solid border-2 rounded-lg bg-primary border-black h-min p-3 text-gray-200 overflow-y-auto">
      <div className="flex space-x-2 my-2">
        <div className="bg-red-500 rounded-full w-3 h-3"></div>
        <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
        <div className="bg-green-500 rounded-full w-3 h-3"></div>
      </div>

      <div className="flex justify-between my-2">
        <h3 className="text-sm font-thin">SHIVAJI(8)</h3>
        <h3 className="text-sm font-thin">General Commands Manual</h3>
        <p className="text-sm font-thin">SHIVAJI(8)</p>
      </div>

      {type === "manpage" ? (
        content.map(
          ({ title, description, points }: ContentProps, index: number) => (
            <Content
              key={index}
              title={title}
              description={description}
              points={points}
            />
          ),
        )
      ) : (
        <div className="mx-2">{content}</div>
      )}
    </div>
  );
};

export default Terminal;
