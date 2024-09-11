import { AiOutlineGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.png";

const Projects = () => {
    const projects = [
        {
          img: project1,
          title: "Personel Event Manager",
          description: [
            "Simple Personel Event Manager web application",
            "Built with React.js and Tailwind CSS.",
            "CRUD (Create, Read, Update, Delete) functionality.",
          ],
          techStack: "React, Tailwind CSS",
          links: {
            site: "https://event-nine-tau.vercel.app/",
            github: "https://github.com/faizanr27/Event",
          },
        },
        {
            img: project4,
            title: "Portfolio Website",
            description: [
              "Showcases my projects and skills with a clean, modern design",
              "Utilizes Tailwind CSS for responsive styling"
            ],
            techStack:
              "React, Tailwind CSS",
            links: {
              site: "https://college-work-ruddy.vercel.app/",
              github: "https://github.com/faizanr27/College-work",
            },
          },
        {
          img: project2,
          title: "Blogr Landing Page",
          description: [
            "This project is a responsive landing page built using React with custom CSS for styling",
            "The page is fully responsive and optimized for different screen sizes, from mobile to desktop.",
          ],
          techStack:
            "React, CSS, JavaScript",
          links: {
            site: "https://blogr-landing-page-phi-one.vercel.app/",
            github: "https://github.com/faizanr27/Blogr-landing-page",
          },
        },
        {
            img: project3,
            title: "Campus Connect",
            description: [
              "CampusConnect is a web-based application made to help students manage shared resources,  ",
              "plan group activities, and develop effective communication when working together on academic projects,",
              "with the creation of a centralized platform that promotes organization, communication, and resource sharing."
            ],
            techStack:
              "React, Firebase",
            links: {
            //   site: "https://hub-one-chi.vercel.app/SignUp",
              github: "https://github.com/faizanr27/Campus-Connect",
            },
          },
      ];
  
    return (
      <section id="projects" className="bg-dark text-white border-y-custom border-cuscol max-w-full mb-24 md:mb-12">
        <div className="container mx-auto text-center py-10 border-x-custom border-cuscol max-w-[95%] lg:max-w-[80%]">
        <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
      Portfolio
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-black hover:bg-cuscol/20 rounded-xl border-2 border-cuscol shadow-xl overflow-hidden flex flex-col "
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-he mb-2">
                {project.title}
              </h3>
              <p className="text-he text-sm whitespace-pre-wrap mb-4">
                {project.techStack}
              </p>
              <ul className="text-he text-sm mb-4">
                {project.description.map((item, index) => (
                  <li key={index} className="mb-1">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4 flex-wrap mt-auto">
              {project.links.site && (
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-50 text-slate-800 font-bold text-sm rounded-lg hover:bg-slate-400 transition duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="mr-2" />
                  Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="px-3 py-2 bg-slate-700 text-gray-300 font-bold text-sm border-2 border-white rounded-lg hover:bg-slate-700 transition duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="mr-2" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  