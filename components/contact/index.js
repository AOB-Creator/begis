import EmailPage from "../emailpage";
import Map from "../map";
function Contact() {
  return (
    <div>
      <Map to="contact" text="Контакты" />
      <EmailPage />
    </div>
  );
}

export default Contact;
