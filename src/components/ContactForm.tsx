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
        <p className="text-xs font-thin">Press return to submit</p>
      </div>
    </div>
  );
};

export default ContactForm;
