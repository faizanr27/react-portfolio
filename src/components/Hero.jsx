import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    return (
      <section id="home" className="text-white mt-20 mb-24 md:mb-12 max-w-full overflow-x-hidden">
<div className="inset-0 -z-10">
      <div className="absolute bottom-40 left-10 sm:left-28 sm:w-78 sm:h-78 w-56 h-56 rounded-7xl bg-lime-700/20 blur-3xl" />
      <div className="absolute top-20 right-10 sm:right-28 sm:w-78 sm:h-78 w-56 h-56 rounded-7xl bg-lime-700/20 blur-3xl" />
      <div className="absolute right-[40%] bottom-60 sm:bottom-80 xl:right-[700px] lg:right-[300px] sm:block hidden w-[400px] h-[400px] rounded-full bg-lime-700/20 blur-3xl" />
    </div>
        <div className="container py-5 mx-auto flex flex-col md:flex-row items-center gap-2 justify-center max-w-[95%] lg:max-w-[80%] ">
          <div className="heroText text-center md:text-left md:ml-3">
            <motion.span
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="block text-6xl mb-2 text-center"
                 >HI, I am

                 <span
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.8 }}
                 className="text-6xl font-bold mb-2 text-neon"> Faizan</span>
                 </motion.span>

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
            className="text-center"
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
              className="font-bold text-gray-600 text-xl md:text-4xl italic mb-4 whitespace-nowrap self-center"
            />
          </motion.div>
            <motion.p
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.4, delay: 0.9 }}
                 className="text-grayCustom mb-6">
              I am a passionate developer dedicated to building high-quality, scalable web applications.
            </motion.p>
            <div className="w-full flex items-center justify-center">
            <motion.a
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.6, delay: 1 }}
                 href="https://drive.google.com/file/d/1Gfiu2_o-jE6jcTHJGD2n-KzItBW2ZqqH/view?usp=drivesdk" className="bg-neon text-black px-6 py-3 rounded-lg ">Download CV</motion.a>
            </div>

          </div>

          {/* <div className="heroImage mt-10 md:mt-0">
            <img src="/assets/fr.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto md:mx-0" />
          </div> */}
        </div>
      </section>
    );
  };

  export default Hero;

