import { AiOutlineGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import echo from "../assets/echo.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.png";
import blog from '../assets/blog.png'
import time from '../assets/time.png'
import urlss from '../assets/urlss.png'
import foodfacts from '../assets/foodfacts.png'
import hive from '../assets/hive.png'
import Devb from '../assets/Devb.png'

const Projects = () => {
    const projects = [
      {
        img: hive,
        title: "Hive Mind",
        description: [
          "Your personal knowledge hub to store, organize, and retrieve ideas effortlessly.",
          "Easily categorize notes, ideas, and files for quick access."
        ],
        techStack:
          "React , Typescript, TailwindCSS, Node.js, MongoDb, Express.js, Mongoose",
        links: {
          site: "https://hivee-mind.vercel.app/",
          github: "https://github.com/faizanr27/Hive-Mind-FE",
        },
      },
      {
        img: Devb,
        title: "Dev Blog",
        description:"Your personal knowledge hub to store, organize, and retrieve ideas effortlessly. Easily categorize notes, ideas, and files for quick access.",
        techStack:
          "React, TailwindCSS, Node.js, MongoDb, Express.js, Mongoose",
        links: {
          site: "https://dev-blogg.vercel.app/",
          github: "https://github.com/faizanr27/Dev-Blog",
        },
      },
        {
            img: urlss,
            title: "Shortsy",
            description: "The URL shortener is a full-stack app that offers secure URL shortening with JWT for authentication and bcrypt for password hashing. It uses MongoDB as the database and features a clean interface with Shadcn UI.",
            techStack:
              "React.js , TailwindCSS, Shadcn/ui, Node.js , MongoDb , Express.js, Mongoose",
            links: {
              site: "https://shrtsy.vercel.app/",
              github: "https://github.com/faizanr27/url-shortner",
            },
          },
         {
            img: echo,
            title: "Echo landing page",
            description:"Landing page for Echo an http client for terminal",
            techStack:
              "React, Tailwind CSS, Framer motion, shadcn",
            links: {
              site: "https://echo-http.vercel.app/",
              github: "https://github.com/faizanr27/Echo",
            },
          },

        {
            img: project4,
            title: "Portfolio Website",
            description:
              "Showcases my projects and skills with a clean, modern design . Utilizes Tailwind CSS for responsive styling",
            techStack:
              "React, Tailwind CSS, Framer motion",
            links: {
              site: "https://faizan-raza.vercel.app/",
              github: "https://github.com/faizanr27/react-portfolio",
            },
          },

          // {
          //   img: time,
          //   title: "Time Tracking Dashboard UI",
          //   description:
          //     "The dashboard has a modern, visually appealing design.The layout adjusts well across devices, ensuring a smooth user experience on both desktop and mobile.",
          //   techStack:
          //     "React js, Tailwind CSS",
          //   links: {
          //     site: "https://time-tracking-dashboard-ui.vercel.app/",
          //     github: "https://github.com/faizanr27/Time-tracking-dashboard-UI",
          //   },
          // },
           {
            img: foodfacts,
            title: "Food Facts",
            description:
              "This web application allows users to search for product details using the OpenFoodFacts API and provides a paginated view of product lists. It displays detailed information about each product, such as ingredients, nutrition facts, and labels.",
            techStack:
              "React js, Tailwind CSS, OpenFoodFacts API",
            links: {
              site: "https://food-facts-theta.vercel.app",
              github: "https://github.com/faizanr27/food-facts",
            },
          },
        // {
        //   img: project1,
        //   title: "Personel Event Manager",
        //   description: [
        //     "Simple Personel Event Manager web application",
        //     "Built with React.js and Tailwind CSS.",
        //     "CRUD (Create, Read, Update, Delete) functionality.",
        //   ],
        //   techStack: "React, Tailwind CSS",
        //   links: {
        //     site: "https://event-nine-tau.vercel.app/",
        //     github: "https://github.com/faizanr27/Event",
        //   },
        // },
        //  {
        //     img: blog,
        //     title: "Blog Card",
        //     description:
        //       "The blog card preview has a clean, modern layout.Responsive Layout: The cards adjust smoothly to different screen sizes.Interactive Elements: Subtle hover effects adds a touch of interactivity.",
        //     techStack:
        //       "HTML, Tailwind CSS",
        //     links: {
        //       site: "https://blog-card-prev.vercel.app/",
        //       github: "https://github.com/faizanr27/Blog-preview-card",
        //     },
        //   },

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
      <section id="projects" className=" text-white  max-w-full mb-24 md:mb-12 overflow-x-hidden">
        <div className="container mx-auto text-center py-10 xl:px-20 xl:py-5 max-w-max lg:max-w-[80%] xl:flex xl:flex-col xl:items-center">
          <div className="absolute -bottom-[1500px] right-20 flex justify-center -z-10 ">
              <div className="w-56 h-56 rounded-full bg-lime-700/20 blur-3xl" />
          </div>
          <div className="absolute -bottom-[450px] flex justify-center -z-10 ">
              <div className="w-56 sm:w-96 h-56 sm:h-96 rounded-full bg-lime-700/20 blur-3xl" />
          </div>
          <div className="absolute -bottom-[1100px] left-20 flex justify-center -z-10">
              <div className="sm:w-72 sm:h-72 w-56 h-56 rounded-full bg-lime-700/20 blur-3xl" />
          </div>
        <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 xl:max-w-[900px] ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-dark/80 hover:bg-cuscol/20 rounded-xl border-2 border-cuscol/30 shadow-xl overflow-hidden flex flex-col "
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
              <p className="text-he text-sm mb-4 hidden sm:block">
                {project.description}
              </p>
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

