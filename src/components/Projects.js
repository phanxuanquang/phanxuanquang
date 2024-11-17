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
          "https://camo.githubusercontent.com/25c52e7d15be484da21b13cd60f5a126bc9121af1e82209072e38fe2080907c4/68747470733a2f2f692e696d6775722e636f6d2f69303074494c712e706e67",
        description:
          "Revolutionize the way we interact with SQL databases using Generative AI",
        topLanguages: [
          "C#",
          "SQL",
          "XAML",
          "WinUI 3",
          "LLM",
          "Prompt Engineering",
        ],
        stars: 98,
        forks: 23,
      },
      {
        name: "EngAce",
        thumbnailUrl:
          "https://private-user-images.githubusercontent.com/84692657/350364349-9b2c68a8-0ba2-4655-9c7f-3ce227c8eb86.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE4MzI1NTAsIm5iZiI6MTczMTgzMjI1MCwicGF0aCI6Ii84NDY5MjY1Ny8zNTAzNjQzNDktOWIyYzY4YTgtMGJhMi00NjU1LTljN2YtM2NlMjI3YzhlYjg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTE3VDA4MzA1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU2YjExNWEyY2NjZmFmNWYzOGRhN2Y2YTA2MmI2N2ZmNjhhZDI4NTExMDBkZWM5ZDA0ZmQ4ZGNmZGM0NWZlOTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.EgcuYVGIUS9fHX4WSeWiAOMf_x1-oXCX_JNNWQaWVmk",
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
          "https://camo.githubusercontent.com/efa414141ebf5d495c52b4a0ce47d049c71933f3fd7747557b58c1f79d89d636/68747470733a2f2f692e696d6775722e636f6d2f63624e417079692e706e67",
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
        name: "XCan-AI",
        thumbnailUrl: "https://i.imgur.com/dVCQuCl.png",
        description: "Simplify the way we extract text from image using AI",
        topLanguages: [
          "C#",
          "JavaScript",
          "ASP.NET Core",
          "React",
          "LLM",
          "Prompt Engineering",
        ],
        stars: 7,
        forks: 6,
      },
      {
        name: "AI-Composer",
        thumbnailUrl:
          "https://camo.githubusercontent.com/a1f40a931ebbef2825f2ee62707b45e91964cab0f8ff13fc219173741e0f678c/68747470733a2f2f692e696d6775722e636f6d2f5843316d3337372e6a706567",
        description:
          "An AI assistant can help you with content composition right in your Microsoft Word",
        topLanguages: [
          "C#",
          "Windows Forms",
          "VSTO",
          "LLM",
          "Prompt Engineering",
        ],
        stars: 11,
        forks: 5,
      },
      {
        name: "AI-Handbook",
        thumbnailUrl:
          "https://camo.githubusercontent.com/4b3d6cabac7aa6dc5e2c340b36879f6a4e5ef65c697d528cd1abd5696dd81d71/68747470733a2f2f692e696d6775722e636f6d2f61515964717a6a2e706e67",
        description:
          "The AI models used for my personal purposes and their usage (Gemini, Copilot, Dialogflow,...)",
        topLanguages: ["JavaScript", "LLM", "RESTful API"],
        stars: 18,
        forks: 0,
      },
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
          What I Have Achieved
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
