import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPostgresql
} from "react-icons/di";
import { FaDatabase, FaCode, FaGit, FaCloud } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      technologies: [
        { name: "C", icon: <FaCode className="text-blue-500 text-4xl" /> },
        {
          name: "JavaScript",
          icon: <DiJavascript1 className="text-yellow-500 text-4xl" />,
        },
        {
          name: "HTML",
          icon: <DiHtml5 className="text-orange-600 text-4xl" />,
        },
        { name: "CSS", icon: <DiCss3 className="text-blue-600 text-4xl" /> },
        {
          name: "SQL",
          icon: <FaDatabase className="text-green-500 text-4xl" />,
        },
      ],
    },
    {
      category: "Frameworks",
      technologies: [
        { name: "React", icon: <DiReact className="text-blue-500 text-4xl" /> },
        {
          name: "Node.js",
          icon: <DiNodejsSmall className="text-green-500 text-4xl" />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-700 text-4xl" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-gray-700 text-4xl" />,
        },
        {
          name: "Mongoose",
          icon: <FaDatabase className="text-green-600 text-4xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
        },
      ],
    },
    {
      category: "Dev Tools",
      technologies: [
        { name: "Git", icon: <FaGit className="text-orange-500 text-4xl" /> },
        {
          name: "GitHub",
          icon: <DiGithubBadge className="text-gray-600 text-4xl" />,
        },
        {
          name: "VS Code",
          icon: <FaCode className="text-blue-300 text-4xl" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500 text-4xl" />,
        },
        {
          name: "Vercel",
          icon: <FaCloud className="text-blue-500 text-4xl" />,
        },
        {
          name: "MongoDB",
          icon: <DiMongodb className="text-green-500 text-4xl" />,
        },
        {
          name: "PostgreSQL",
          icon: <DiPostgresql className="text-blue-500 text-4xl" />,
        },
      ],
    },
  ];

  return (
    <section className="bg-dark text-white  border-y-custom  border-cuscol mb-24 md:mb-12 max-w-full">
    <div className=" container mx-auto flex flex-col items-center justify-between max-w-[95%] lg:max-w-[80%]" id="skills">
      <div className="border-b-custom border-cuscol w-full ">
      <h2 className="text-3xl text-gray-200 font-bold py-5 text-center w-full">
        Skills
      </h2>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-x-8 md:space-y-0 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:border-x-custom border-custom border-cuscol hover:bg-cuscol/20 rounded-lg p-6 shadow-lg w-full md:w-1/2 "
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              {skill.category}
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {skill.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <span className="text-4xl">{tech.icon}</span>
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
