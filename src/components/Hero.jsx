const Hero = () => {
    return (
      <section id="home" className="bg-dark text-white  border-b-custom  border-cuscol mb-24 md:mb-12 max-w-full">
        <div className="container py-5 mx-auto flex flex-col md:flex-row items-center justify-between max-w-[95%] lg:max-w-[80%] ">
          <div className="heroText text-center md:text-left md:ml-3">
            <span className="block text-6xl mb-2">HI, I am</span>
            <span className="block text-6xl font-bold mb-2 text-neon">Faizan</span>
            {/* <span className="block text-6xl font-bold mb-4">Frontend Developer</span> */}
            <p className="text-grayCustom mb-6">
              I am a passionate developer dedicated to building high-quality, scalable web applications.
            </p>
            <a href="https://drive.google.com/file/d/1uX6RvyV1-4z_WWvnVL3DPNYbsAOhAqxq/view?usp=drive_link" className="bg-neon text-black px-6 py-3 rounded-lg">Download CV</a>
          </div>
          <div className="heroImage mt-10 md:mt-0">
            <img src="/assets/fr.jpg" alt="Profile" className="w-64 h-64 rounded-full mx-auto md:mx-0" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
