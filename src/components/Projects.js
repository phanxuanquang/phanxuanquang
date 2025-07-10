import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitFork,
  Star,
} from "lucide-react";

const ProjectsSection = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  const fetchReposData = async () => {
    const reposInfors = [
      {
        name: "AskDB",
        thumbnailUrl:
          "https://i.postimg.cc/TGwYDP8R/452805467-27070960-6682-4acc-87d4-a75110ccb602.jpg",
        description:
          "Communicate with SQL databases using your daily-life language",
        topLanguages: [
          "C#",
          "SQL",
          "XAML",
          "WinUI 3",
          "LLM",
          "AI Agent"
        ],
        stars: 98,
        forks: 23,
      },
      {
        name: "EngAce",
        thumbnailUrl:
          "https://camo.githubusercontent.com/0cf9f2d9784f74ea26d1ba196a81c3122dbafc31e38b349dbdeea000496f44d6/68747470733a2f2f692e696d6775722e636f6d2f6e7439385132322e706e67",
        description:
          "Personalize the way Vietnamese learn English using generative AI",
        topLanguages: [
          "C#",
          "JavaScript",
          "ASP.NET Core",
          "React",
          "LLM",
          "Prompt Engineering",
        ],
        stars: 25,
        forks: 11,
      },
      {
        name: "Adobe-Camera-Profiles-Unlocker",
        thumbnailUrl:
          "https://i.imgur.com/zLam98v.png",
        description:
          "Unlock the hidden Camera Profiles in the Adobe Lightroom and Adobe Camera Raw",
        topLanguages: [
          "C#",
          "XAML",
          "WinUI 3",
          "PowerShell",
          "Revert Engineering",
        ],
        stars: 123,
        forks: 18,
      },
      {
        name: "VNPAY.NET",
        thumbnailUrl: "https://camo.githubusercontent.com/0fc6c6ae01db639607d05de136732f25e520e9ab7ad0d66b3932408cdc7d2c9c/68747470733a2f2f692e696d6775722e636f6d2f675369367376522e706e67",
        description: "VNPAY payment integration library used for .NET",
        topLanguages: [
          "C#",
          ".NET",
          "ASP.NET Core"
        ],
        stars: 7,
        forks: 6,
      }
    ];

    try {
      const projects = await Promise.all(
        reposInfors.map(async (repo) => {
          const repoResponse = await fetch(
            `https://api.github.com/repos/phanxuanquang/${repo.name}`
          );
          if (!repoResponse.ok) {
            return {
              title: repo.name,
              description: repo.description || "No description available.",
              stars: repo.stars,
              forks: repo.forks,
              tech: repo.topLanguages,
              link: `https://github.com/phanxuanquang/${repo.name}`,
              thumbnail: repo.thumbnailUrl,
            };
          }
          const repoData = await repoResponse.json();

          return {
            title: repoData.name,
            description: repoData.description || "No description available.",
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            tech: repo.topLanguages,
            link: repoData.html_url,
            thumbnail: repo.thumbnailUrl,
          };
        })
      );

      setFeaturedProjects(projects);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    fetchReposData();
  }, []);

  const totalSlides = Math.ceil(featuredProjects.length / 3);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="projects"
      className={`py-20 px-4 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? "bg-gray-1000/50" : "bg-gray"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent animate-fade-in">
          My Feature Open-Source Projects
        </h2>

        <div className="relative animate-fade-in">
          <button
            onClick={handlePrevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 ml-2 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-white/80 hover:bg-gray-100 text-gray-800"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300 mr-2 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="flex min-w-full gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`w-full md:w-1/3 flex-shrink-0 group ${
                      index >= 3 ? "hidden md:block" : ""
                    }`}
                  >
                    <div
                      className={`h-full rounded-2xl transition-all duration-300 p-8 transform hover:-translate-y-1 ${
                        isDarkMode
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-white hover:shadow-xl"
                      }`}
                    >
                      <div className="mb-6 overflow-hidden rounded-lg">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <h3
                        className={`text-xl font-semibold mb-4 text-center transition-colors ${
                          isDarkMode
                            ? "group-hover:text-purple-400"
                            : "group-hover:text-purple-700"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`mb-6 text-center ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-1 rounded-full text-sm font-medium ${
                              isDarkMode
                                ? "bg-gray-700 text-purple-400"
                                : "bg-purple-50 text-purple-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-center mb-6">
                        <div className="flex justify-center items-center gap-4 text-sm">
                          <div className="flex items-center">
                            <Star
                              className={`w-4 h-4 mr-1 ${
                                isDarkMode
                                  ? "text-purple-400"
                                  : "text-purple-600"
                              }`}
                            />
                            <span>{project.stars} stars</span>
                          </div>
                          <div className="flex items-center">
                            <GitFork
                              className={`w-4 h-4 mr-1 ${
                                isDarkMode
                                  ? "text-purple-400"
                                  : "text-purple-600"
                              }`}
                            />
                            <span>{project.forks} forks</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center font-medium ${
                            isDarkMode
                              ? "text-purple-400 hover:text-purple-300"
                              : "text-purple-700 hover:text-purple-800"
                          }`}
                        >
                          View Project <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? isDarkMode
                      ? "bg-purple-500 w-6"
                      : "bg-purple-600 w-6"
                    : isDarkMode
                    ? "bg-gray-600 hover:bg-gray-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
