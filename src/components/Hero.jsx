import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    return (
      <section id="home" className="bg-dark text-white  border-b-custom  border-cuscol mb-24 md:mb-12 max-w-full">
        <div className="container py-5 mx-auto flex flex-col md:flex-row items-center justify-between md:border-x-custom md:border-cuscol max-w-[95%] lg:max-w-[80%] ">
          <div className="heroText text-center md:text-left md:ml-3">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              loop: Infinity,
            }}
          >
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "Open Source Enthusiast",
                1000,
                "",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-gray-600 text-xl md:text-4xl italic mb-4 whitespace-nowrap"
            />
          </motion.div>
            <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="block text-6xl mb-2"
                 >HI, I am</motion.span>
            <motion.span 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.8 }}
                 className="block text-6xl font-bold mb-2 text-neon">Faizan</motion.span>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.4, delay: 0.9 }}
                 className="text-grayCustom mb-6">
              I am a passionate developer dedicated to building high-quality, scalable web applications.
            </motion.p>
            <motion.a 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.6, delay: 1 }}
                 href="https://drive.google.com/file/d/1Gfiu2_o-jE6jcTHJGD2n-KzItBW2ZqqH/view?usp=drivesdk" className="bg-neon text-black px-6 py-3 rounded-lg">Download CV</motion.a>
          </div>

          <div className="heroImage mt-10 md:mt-0">
            <img src="/assets/fr.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto md:mx-0" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
