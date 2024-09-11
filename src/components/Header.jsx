import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark text-he w-full py-2 border-y-custom border-cuscol sticky top-0 backdrop-filter backdrop-blur-sm bg-opacity-25 z-10  max-w-full">
      <div className="container mx-auto flex items-center justify-between md:mx-auto max-w-[95%] lg:max-w-[80%]">
        <div className="flex items-center space-x-4 ">
          <h1 className="text-4xl font-bold text-he hover:text-neon">FR</h1>
        </div>

        <nav className='font-light'>
          <div className="md:hidden" onClick={toggleMenu}>
            <span className="text-3xl cursor-pointer">&#9776;</span>
          </div>

          <ul className={`md:flex md:space-x-6 z-30 overflow-y-visible ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li><a href="#home" className="hover:text-neon">Home</a></li>
            <li><a href="#skills" className="hover:text-neon">Skills</a></li>
            <li><a href="#projects" className="hover:text-neon">Projects</a></li>
            <li><a href="#contact" className="hover:text-neon">Contact</a></li>
            {/* <li><a href="#CV" className="bg-neon text-black px-4 py-2 rounded">Download CV</a></li> */}
          </ul>
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
