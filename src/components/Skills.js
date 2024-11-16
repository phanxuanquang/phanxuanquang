import React from "react";
import { Code2, Boxes, Database, PencilRuler } from "lucide-react";
import { Tooltip } from "@mui/material"; // Import Tooltip từ MUI

const SkillsSection = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        {
          name: "C Sharp",
          icon: "https://skillicons.dev/icons?i=cs",
          description: "Primary language for backend development",
        },
        {
          name: "JavaScript",
          icon: "https://skillicons.dev/icons?i=js",
          description: "Frontend and Node.js development",
        },
        {
          name: "HTML/CSS",
          icon: "https://skillicons.dev/icons?i=html",
          description: "Web structure and semantics",
        },
      ],
    },
    {
      title: "Frameworks & Technologies",
      icon: Boxes,
      skills: [
        {
          name: ".NET",
          icon: "https://skillicons.dev/icons?i=dotnet",
          description: "Enterprise application development",
        },
        {
          name: "Vue.js",
          icon: "https://skillicons.dev/icons?i=vue",
          description: "Frontend framework expertise",
        },
        {
          name: "React",
          icon: "https://skillicons.dev/icons?i=react",
          description: "Frontend framework expertise",
        },
        {
          name: "Bootstrap",
          icon: "https://skillicons.dev/icons?i=bootstrap",
          description: "Frontend framework expertise",
        },
      ],
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        {
          name: "SQL Server",
          icon: "https://skillicons.dev/icons?i=dotnet",
          description: "Enterprise application development",
        },
        {
          name: "SQLite",
          icon: "https://skillicons.dev/icons?i=sqlite",
          description: "Frontend framework expertise",
        },
        {
          name: "React",
          icon: "https://skillicons.dev/icons?i=react",
          description: "Frontend framework expertise",
        },
        {
          name: "Bootstrap",
          icon: "https://skillicons.dev/icons?i=bootstrap",
          description: "Frontend framework expertise",
        },
      ],
    },
    {
      title: "Development Tools",
      icon: PencilRuler,
      skills: [
        {
          name: "Visual Studio",
          icon: "https://skillicons.dev/icons?i=visualstudio",
          description: "Primary IDE",
        },
        {
          name: "Visual Studio Code",
          icon: "https://skillicons.dev/icons?i=vscode",
          description: "Lightweight code editing",
        },
        {
          name: "Postman",
          icon: "https://skillicons.dev/icons?i=postman",
          description: "Lightweight code editing",
        },
        {
          name: "Git",
          icon: "https://skillicons.dev/icons?i=git",
          description: "Lightweight code editing",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div
        className={`absolute inset-0 opacity-20 transition-opacity duration-300 ${
          isDarkMode ? "opacity-20" : "opacity-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-500/30 to-purple-600/30 animate-gradient-x" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          What I Use
        </h2>

        <div className="grid gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center justify-center mb-8 space-x-4">
                <Tooltip title={category.title} arrow>
                  <category.icon
                    className={`w-8 h-8 ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  />
                </Tooltip>

                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-2 ${
                      isDarkMode
                        ? "bg-gray-800/80 hover:bg-gray-700/80"
                        : "bg-white hover:shadow-xl"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Skill card content */}
                    <div className="relative z-10 flex flex-col items-center">
                      {/* Skill icon với Tooltip */}
                      <Tooltip title={skill.name} arrow>
                        <div
                          className={`text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 ${
                            isDarkMode ? "opacity-90" : "opacity-100"
                          }`}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-20 h-20"
                          />
                        </div>
                      </Tooltip>

                      {/* Skill name với Tooltip */}
                      <Tooltip title={skill.name} arrow>
                        <h4
                          className={`text-xl font-semibold mb-2 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {skill.name}
                        </h4>
                      </Tooltip>

                      <p
                        className={`text-sm text-center mb-4 ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 via-purple-300/20 to-blue-500/10 rounded-full blur-2xl z-[-1]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 via-blue-300/20 to-purple-500/10 rounded-full blur-3xl z-[-1]" />

      <style>{additionalStyles}</style>
    </section>
  );
};

export default SkillsSection;

const additionalStyles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes gradient-x {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient-x {
    animation: gradient-x 15s ease infinite;
    background-size: 200% 200%;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;
