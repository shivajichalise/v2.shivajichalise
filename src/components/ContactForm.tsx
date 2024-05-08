import InputText from "./InputText";
import { useEffect, useRef } from "react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = () => {
    const form = formRef.current;
    if (form) {
      form.submit();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleFormSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <form
        action="https://formsubmit.co/cab19e22779f3925476f30c67edeee2c"
        method="POST"
        ref={formRef}
      >
        <InputText name="name" />
        <InputText type="email" name="email" />
        <InputText name="subject" />
        <InputText name="message" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://shivajichalise.com.np/thankyou"
        />
      </form>
      <div className="flex justify-end items-center mt-10">
        <p className="text-xs font-thin flex justify-center items-center">
          Press
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            viewBox="0 0 256 256"
            className="mx-1"
          >
            <path d="M184,104v32a8,8,0,0,1-8,8H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,128H168V104a8,8,0,0,1,16,0Zm48-48V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z"></path>
          </svg>
          to submit
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
