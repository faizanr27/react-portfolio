import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div
          id="contact"
          className="text-he py-12 px-6 md:px-12 flex flex-col items-center rounded-t-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          <p className="mb-8 text-lg text-center">
            Feel free to reach out to me through any of the platforms below or send
            me an email.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
            <a
              href="mailto:faizanms025347@gmail.com"
              className="px-6 py-3 bg-slate-500 hover:bg-slate-600 rounded-lg flex items-center gap-3 transition duration-300"
            >
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">Email Me</span>
            </a>
            <div className="flex gap-6">
              <a
                href="https://www.github.com/faizanr27"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaGithub  style={{color: "#95ff00",}}/>
              </a>
              <a
                href="https://www.linkedin.com/in/faizan-raza-3b3a22203/"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaLinkedin style={{color: "#95ff00",}}/>
              </a>
              <a
                href="https://x.com/__faizanr__"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaTwitter style={{color: "#95ff00",}}/>
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Faizan Raza. All rights reserved.
          </p>
        </div>
      );
  };
  
  export default Footer;
  
  