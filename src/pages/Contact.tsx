import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm.tsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Terminal type={"contact"} content={<ContactForm />} />
      <Footer />
    </div>
  );
};

export default Contact;
