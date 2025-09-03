import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "../assets/yamini.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2 font-medium text-blue-600 dark:text-blue-400"
              >
                <MapPin className="w-4 h-4" />
                <span>Open to Relocate</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Yamini Choudhary
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl font-medium text-gray-600 dark:text-gray-300"
              >
                Full Stack Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
              >
                I design and build websites that are simple to use, attractive,
                and functional. With a good understanding of modern web
                technologies and practical project experience, I turn ideas into
                user-friendly digital solutions
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://drive.google.com/uc?export=download&id=1maU12OtK_Z1hufPIs7BCUOiMFWYmrcUT"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-gray-700 transition-all duration-200 transform border-2 border-gray-300 rounded-lg dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-1 group"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/yamini-choudhary"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 transition-all duration-200 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yaminich03/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 transition-all duration-200 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <Link
                to="/contact"
                className="p-3 text-gray-700 transition-all duration-200 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="p-1 rounded-full w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600">
                <div className="flex items-center justify-center w-full h-full p-8 bg-white rounded-full dark:bg-gray-800">
                  <img
                    src={logo}
                    alt="Yamini Choudhary"
                    className="object-cover object-top w-full rounded-full h-60"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute p-3 bg-white rounded-lg shadow-lg -top-4 -right-4 dark:bg-gray-800"
              >
                <span className="text-2xl">👋</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute p-3 bg-white rounded-lg shadow-lg -bottom-4 -left-4 dark:bg-gray-800"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Stats Section */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Months of Experience", value: "14+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies Used", value: "10+" },
            { label: "Internships", value: "2" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white shadow-lg dark:bg-gray-800 rounded-xl"
            >
              <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
