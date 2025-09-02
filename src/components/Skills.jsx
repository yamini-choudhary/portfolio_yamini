import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Redux", level: 90, color: "from-purple-600 to-purple-700" },
        { name: "Next.js", level: 88, color: "from-gray-700 to-gray-800" },
        { name: "Material UI", level: 92, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-teal-600" },
        {
          name: "JavaScript",
          level: 98,
          color: "from-yellow-500 to-yellow-600",
        },
        { name: "HTML5", level: 98, color: "from-orange-500 to-orange-600" },
        { name: "CSS3", level: 95, color: "from-blue-500 to-blue-600" },
        {
          name: "Bootstrap",
          level: 90,
          color: "from-purple-500 to-purple-600",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 88, color: "from-gray-600 to-gray-700" },
        { name: "MongoDB", level: 82, color: "from-green-700 to-green-800" },
        { name: "Mongoose", level: 85, color: "from-green-800 to-green-900" },
        { name: "REST APIs", level: 90, color: "from-pink-500 to-pink-600" },
        { name: "SQL", level: 80, color: "from-blue-700 to-blue-800" },
        { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-800" },
        { name: "C#", level: 75, color: "from-purple-500 to-purple-600" },
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git", level: 95, color: "from-orange-500 to-orange-600" },
        { name: "GitHub", level: 95, color: "from-gray-800 to-gray-900" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Figma", level: 85, color: "from-pink-500 to-purple-500" },
        { name: "Postman", level: 88, color: "from-orange-600 to-red-600" },
        { name: "Webpack", level: 72, color: "from-blue-600 to-blue-700" },
        {
          name: "Agile Methodologies",
          level: 85,
          color: "from-green-500 to-green-600",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-green-900">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            My{" "}
            <span className="text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
              Skills
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            A comprehensive overview of the technologies and tools I use to
            bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-8 transition-shadow duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-xl"
            >
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-900 dark:text-white">
                {category.title}
              </h2>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
            Experience Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-green-500 to-blue-500"></div>

            <div className="space-y-12">
              {[
                {
                  year: "Feb 2025 - Present",
                  title: "FullStack Engineer Intern",
                  company: "Commerciax Infotech Private Limited",
                  description:
                    "Working on an AI-powered website builder (Neweb.ai) and building full-stack applications with the MERN stack.",
                },
                {
                  year: "May 2024 - Dec 2024",
                  title: "Front End Developer Intern",
                  company: "Newton School",
                  description:
                    "Built end-to-end web applications and worked on team-based projects applying Agile methodologies.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
                      <div className="mb-1 text-sm font-semibold text-green-600 dark:text-green-400">
                        {item.year}
                      </div>
                      <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="mb-3 font-medium text-blue-600 dark:text-blue-400">
                        {item.company}
                      </div>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="z-10 w-4 h-4 border-4 border-white rounded-full bg-gradient-to-r from-green-500 to-blue-500 dark:border-gray-900"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
