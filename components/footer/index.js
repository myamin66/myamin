import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup } from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s work together 🤝</h2>

      <div className="contact__info">
        <p>Mail me at 👇</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href="mailto:myamin.cs@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            myamin.cs@gmail.com
          </a>
        </div>

      </div>

      <div className="app__Social">
        <p>Follow me here 👇</p>

        <div className="app__social__links">
          <a
            href="https://linkedin.com/in/myamin66"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://instagram.com/bettercallyamin"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>

          <a
            href="https://twitter.com/bettercallyamin"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>

          <a
            href="https://facebook.com/bettercallyamin"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>

    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
