import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`text-white w-full py-2 sticky top-0 z-10 max-w-full transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-opacity-60 border-b border-cuscol/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between md:mx-auto max-w-[95%] lg:max-w-[80%] h-12">
        <div className="flex items-center space-x-4 ">
          <h1 className="text-4xl font-bold text-he hover:text-neon">FR</h1>
        </div>

        <nav className={`font-light relative ${isOpen ? 'bg-black' : 'bg-transparent'}`}>
          <div className="md:hidden" onClick={toggleMenu}>
            <span className="text-3xl cursor-pointer">&#9776;</span>
          </div>

          <ul className='hidden md:flex md:space-x-6'>
            <li><a href="#home" className="hover:text-neon">Home</a></li>
            <li><a href="#skills" className="hover:text-neon">Skills</a></li>
            <li><a href="#projects" className="hover:text-neon">Projects</a></li>
            <li><a href="#contact" className="hover:text-neon">Contact</a></li>
          </ul>

          <motion.div className={`md:hidden flex flex-col absolute top-0 -right-4 h-screen  w-screen  bg-dark backdrop-blur-sm bg-opacity-85 ${isOpen ? 'block' : 'hidden'}`}
                                  initial={{ opacity: 0, x: 50 }}
                                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                  transition={{ duration: 0.3 }}>
          <span className="text-3xl cursor-pointer relative -right-12 top-10" onClick={toggleMenu}>&times;</span>
          <ul className="flex flex-col justify-center items-center h-4/5 text-white">
            <li><a href="#home" className="block py-2 px-4 hover:text-neon" onClick={() => setIsOpen(!isOpen)} >Home</a></li>
            <li><a href="#skills" className="block py-2 px-4 hover:text-neon"onClick={() => setIsOpen(!isOpen)} >Skills</a></li>
            <li><a href="#projects" className="block py-2 px-4 hover:text-neon"onClick={() => setIsOpen(!isOpen)} >Projects</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:text-neon"onClick={() => setIsOpen(!isOpen)} >Contact</a></li>
          </ul>
          </motion.div>

        </nav>

        <div className='gap-2 hidden md:flex'>
            <a href='https://x.com/__faizanr__'><FontAwesomeIcon icon={faXTwitter} fade size="lg" style={{color: "#95ff00",}} /></a>
            <a href='https://github.com/faizanr27'><FontAwesomeIcon icon={faGithub} fade size="lg" style={{color: "#95ff00",}} /></a>
        </div>

      </div>
    </header>
  );
};

export default Header;
