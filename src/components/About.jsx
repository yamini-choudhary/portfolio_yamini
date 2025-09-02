import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with modern frameworks like React.js, Next.js, and Redux.",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description:
        "Translating design concepts into intuitive user experiences with a focus on usability using Material UI and Tailwind CSS.",
    },
    {
      icon: Zap,
      title: "Full-Stack Development",
      description:
        "Creating robust server-side applications and APIs using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    },
    {
      icon: Users,
      title: "Project Consulting",
      description:
        "Providing technical and strategic guidance for building scalable, user-friendly applications from the ground up.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Yamini
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            A software developer with over 14 months of internship experience,
            skilled in the MERN stack and passionate about building scalable,
            user-friendly applications.
          </p>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-16 mb-20 lg:grid-cols-2">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-full max-w-md">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yamini Choudhary"
                  className="shadow-2xl rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h2>

            <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                With 14 months of internship experience as a Frontend Developer
                and a Full Stack Engineer, I have worked on real-world projects
                and applied Agile methodologies. My journey began with a
                Computer Science degree and has evolved through hands-on
                experience in building end-to-end web applications.
              </p>

              <p>
                I specialize in full-stack applications and have experience
                building an AI-powered website builder (Neweb.ai) using
                React.js, Node.js, Express.js, and MongoDB. My approach combines
                technical expertise in the MERN stack with a focus on creating
                secure and performant solutions.
              </p>

              <p>
                I am proficient in JavaScript and have strong skills in frontend
                technologies like React.js, Redux, and Tailwind CSS, as well as
                backend services using Node.js and REST APIs. I'm always eager
                to explore new technologies and contribute to the developer
                community.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Core Values
              </h3>
              <div className="space-y-2">
                {[
                  "Quality over quantity",
                  "Continuous learning",
                  "User-centered design",
                  "Clean, maintainable code",
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
            What I Do
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="p-6 transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-xl"
              >
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 mt-20 bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
            Fun Facts
          </h2>

          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: "💻", fact: "Favorite tech stack: MERN" },
              { emoji: "☕", fact: "Coffee cups per day: 1-2" },
              { emoji: "💡", fact: "Always learning new tech" },
              { emoji: "📚", fact: "Books read this year: 3" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-4xl">{item.emoji}</div>
                <p className="text-gray-600 dark:text-gray-400">{item.fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
