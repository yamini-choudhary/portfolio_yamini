import logo from "../assets/yamini.jpeg";

const App = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900">
      <div className="max-w-4xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            My{" "}
            <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
              Resume
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Download my complete resume or view the highlights below
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1maU12OtK_Z1hufPIs7BCUOiMFWYmrcUT"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 font-semibold text-white transition-shadow duration-200 rounded-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Resume Content */}
        <div className="overflow-hidden bg-white shadow-xl dark:bg-gray-800 rounded-2xl">
          {/* Personal Info Header */}
          <div className="p-8 text-white bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="w-24 h-24 overflow-hidden border-4 rounded-full border-white/20">
                <img
                  src={logo}
                  alt="Yamini Choudhary"
                  className="object-cover object-top w-full rounded-full h-39"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="mb-2 text-3xl font-bold">Yamini Choudhary</h2>
                <p className="mb-4 text-xl text-indigo-100">
                  Software Developer
                </p>

                <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                  <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>choudharyyamini03@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2.02 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+91 9926893433</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Pune, India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 md:justify-start">
                    <a
                      href="https://github.com/yamini-choudhary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors cursor-pointer hover:text-indigo-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.832 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.702-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.903.834.091-.647.351-1.087.636-1.336-2.22-.253-4.555-1.112-4.555-4.943 0-1.096.392-1.996 1.03-2.693-.103-.253-.448-1.272.097-2.659 0 0 .84-.27 2.75 1.025A9.28 9.28 0 0 1 12 6.853c.85.006 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.387.202 2.406.1 2.659.638.697 1.028 1.597 1.028 2.693 0 3.841-2.339 4.686-4.568 4.935.359.308.678.918.678 1.846 0 1.336-.012 2.413-.012 2.741 0 .267.18.579.688.481C21.146 20.218 24 16.46 24 12.017 24 6.484 19.523 2 14 2h-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yaminich03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors cursor-pointer hover:text-indigo-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="w-1 h-6 mr-3 rounded-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                Professional Summary
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                Software Developer with 14 months of internship experience: 8
                months as a Frontend Developer Intern at Newton School and 6
                months as a Full Stack Engineer Intern at Commerciax Infotech.
                Skilled in React.js, JavaScript, and MERN stack, with hands-on
                experience in real-world projects and a passion for building
                scalable, user-friendly applications.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="w-1 h-6 mr-3 rounded-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                Professional Experience
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Full Stack Engineer Intern",
                    company: "Commerciax Infotech Private Limited",
                    period: "Feb 2025 - Present",
                    location: "Ahmedabad, Gujarat",
                    responsibilities: [
                      "Working on an AI-powered website builder (Neweb.ai) that creates complete websites based on user input.",
                      "Built using a modern tech stack including React.js, Node.js, Express.js, MongoDB, Redux, and JWT.",
                      "Integrated APIs and managed data flow using Redux for efficient state management.",
                      "Handled authentication and protected routes using JWT for enhanced security.",
                    ],
                  },
                  {
                    title: "Frontend Developer Intern",
                    company: "Newton School",
                    period: "May 2024 - Dec 2024",
                    location: "",
                    responsibilities: [
                      "Built end-to-end web applications using React, Node.js, and Next.js with Express for backend services.",
                      "Worked on team-based projects, applying Agile methodologies and industry-standard coding practices.",
                      "Gained hands-on experience in both frontend and backend development by building multiple full-stack applications.",
                    ],
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-700"
                  >
                    <div className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 -left-2"></div>
                    <div className="flex flex-col mb-2 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 mr-1"
                        >
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        {job.period}
                      </div>
                    </div>
                    <div className="mb-1 font-medium text-indigo-600 dark:text-indigo-400">
                      {job.company}
                    </div>
                    <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                      {job.location}
                    </div>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="w-1 h-6 mr-3 rounded-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                Key Projects
              </h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-700">
                  <div className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 -left-2"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Full Stack E-Commerce Website
                  </h4>
                  <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="px-2 py-1 text-xs font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-300">
                      Node.js
                    </span>
                    <span className="px-2 py-1 ml-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
                      React.js
                    </span>
                    <span className="px-2 py-1 ml-1 text-xs font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-300">
                      MongoDB
                    </span>
                    <span className="px-2 py-1 ml-1 text-xs font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-300">
                      Express.js
                    </span>
                    <span className="px-2 py-1 ml-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
                      Stripe
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Implemented secure user and admin authentication with
                        JWT-based auth and Bcrypt password hashing.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Integrated Stripe for secure online payments and managed
                        transactions in the backend.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Developed a role-based admin panel for managing courses,
                        users, and transactions.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Created modular RESTful APIs and used Cloudinary for
                        image uploads and storage.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-700">
                  <div className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 -left-2"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    MakeMyTrip Clone
                  </h4>
                  <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="px-2 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
                      React.js
                    </span>
                    <span className="px-2 py-1 ml-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
                      Material UI
                    </span>
                    <span className="px-2 py-1 ml-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">
                      Context API
                    </span>
                  </div>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Developed a travel booking platform for a seamless and
                        responsive user experience.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Implemented the user interface with React.js and
                        Material UI, using Context API for efficient state
                        management.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-indigo-400 rounded-full"></div>
                      <span>
                        Key features include user authentication, booking
                        functionality for flights, trains, and hotels, and
                        search/filter capabilities.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="w-1 h-6 mr-3 rounded-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                Education
              </h3>

              <div className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-700">
                <div className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 -left-2"></div>
                <div className="flex flex-col mb-2 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Technology in Computer Science
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 mr-1"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    June 2017 - July 2021
                  </div>
                </div>
                <div className="mb-1 font-medium text-indigo-600 dark:text-indigo-400">
                  Chhattisgarh Swami Vivekanand Technical University
                </div>
                <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                  Bhilai, Chhattisgarh
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <div className="w-1 h-6 mr-3 rounded-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["C#", "JavaScript", "HTML5", "CSS3", "SQL"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Redux",
                      "Next.js",
                      "Material UI",
                      "Tailwind CSS",
                      "Bootstrap",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    Backend & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Mongoose",
                      "PostgreSQL",
                      "REST APIs",
                      "Git",
                      "GitHub",
                      "VS Code",
                      "Figma",
                      "Postman",
                      "Webpack",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
