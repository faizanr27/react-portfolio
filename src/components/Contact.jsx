const Contact = () => {
    return (
      <section id="contact" className="bg-dark text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-neon">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block text-left text-lg mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-left text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-left text-lg mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-neon text-black px-6 py-3 rounded-lg hover:bg-black hover:text-neon transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  