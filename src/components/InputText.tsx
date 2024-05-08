import InputTextProps from "../types/InputTextProps";
import PromptProps from "../types/PromptProps";

const Prompt = ({ label }: PromptProps) => {
  return <span className="text-white font-semibold mr-2">{label}:~$</span>;
};

const InputText = ({ name, type }: InputTextProps) => {
  return (
    <div className="mt-4 flex">
      <Prompt label={name} />
      <input
        type={type ?? "text"}
        name={name}
        className="outline-none shadow-none p-0 m-0 bg-transparent border-b border-dashed w-full"
      />
    </div>
  );
};

export default InputText;
