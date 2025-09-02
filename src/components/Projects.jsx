import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Github, ExternalLink, Filter } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects] = useState(projectsData);

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.technologies.includes(filter));

  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-orange-900">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            My <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Projects</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            A showcase of my work spanning web applications, mobile apps, and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
              filter === 'all'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>All Projects</span>
          </button>
          
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              filter === 'featured'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
            }`}
          >
            Featured
          </button>

          {allTechnologies.slice(0, 5).map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === tech
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg group dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <div className="absolute flex space-x-2 bottom-4 left-4 right-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors duration-200 rounded-full bg-white/90 hover:bg-white"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors duration-200 rounded-full bg-white/90 hover:bg-white"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-orange-600 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-200 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-orange-800 bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 transition-colors duration-200 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 transition-colors duration-200 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Interested in working together?
          </h2>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            I'm always open to discussing new opportunities and exciting projects
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 font-semibold text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-xl"
          >
            Get In Touch
            <ExternalLink className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
