import React from "react";
import { Code2, Boxes, Database, PencilRuler } from "lucide-react";

const SkillsSection = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        {
          name: "C#",
          icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
          description: "Primary software development language",
        },
        {
          name: "JavaScript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
          description: "Primary web frontend development language",
        },
        {
          name: "HTML/CSS",
          icon: "https://skillicons.dev/icons?i=html",
          description: "Web structure and semantics",
        },
      ],
    },
    {
      title: "Frameworks",
      icon: Boxes,
      skills: [
        {
          name: ".NET",
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
          description: "Primary software development framework",
        },
        {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          description: "Web frontend development",
        },
        {
          name: "WinUI 3",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/WinUI_Icon.svg",
          description: "Windows application frontend development",
        },
      ],
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        {
          name: "SQL Server",
          icon: "https://img.icons8.com/?size=512&id=laYYF3dV0Iew&format=png",
          description: "Primary relational database management tool",
        },
        {
          name: "SQLite",
          icon: "https://skillicons.dev/icons?i=sqlite",
          description: "Database management for small projects",
        },
        {
          name: "drawDB",
          icon: "https://avatars.githubusercontent.com/u/139706923?s=200&v=4",
          description: "Relational database design tool",
        },
      ],
    },
    {
      title: "Development Tools",
      icon: PencilRuler,
      skills: [
        {
          name: "Visual Studio",
          icon: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg",
          description: "Primary integrated development environment",
        },
        {
          name: "Visual Studio Code",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
          description: "Code editor for web frontend development",
        },
        {
          name: "Postman",
          icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp",
          description: "Primary tool for API testing",
        },
        {
          name: "Git",
          icon: "https://skillicons.dev/icons?i=git",
          description: "Primary distributed version control system",
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          What I Use For Works
        </h2>

        <div className="grid gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center justify-center mb-8 space-x-4">
                <category.icon
                  className={`w-8 h-8 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600" 
                  }`}
                />

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
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className={`text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 ${
                          isDarkMode ? "opacity-90" : "opacity-100"
                        }`}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-20 h-20 rounded-xl"
                        />
                      </div>
                      <h4
                        className={`text-xl font-semibold mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {skill.name}
                      </h4>

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
