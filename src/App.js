import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  ChevronUp,
  Moon,
  Sun,
  Home,
  User,
  Code,
  Brain,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const PortfolioLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { name: "home", icon: Home },
    { name: "about", icon: User },
    { name: "projects", icon: Code },
    { name: "skills", icon: Brain },
    { name: "contact", icon: Mail },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/phanxuanquang",
      color: "hover:text-blue-500",
      delay: 100,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/pxquang.2002",
      color: "hover:text-blue-600",
      delay: 200,
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discordcom/users/hackkiemsi",
      color: "hover:text-indigo-500",
      delay: 300,
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:phanxuanquang2@gmail.com",
      color: "hover:text-red-500",
      delay: 400,
    },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      toggleVisibility();

      const sections = ["home", "about", "projects", "skills", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900"
      }`}
    >

      <>
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <nav
          className={`fixed w-full backdrop-blur-md shadow-lg z-50 transition-all duration-300 ${
            isDarkMode ? "bg-gray-900/90" : "bg-white/90"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Phan Xuân Quang
              </span>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map(({ name }) => (
                  <a
                    key={name}
                    href={`#${name}`}
                    className={`transition-colors capitalize ${
                      isDarkMode
                        ? `text-gray-300 hover:text-purple-400 ${
                            activeSection === name
                              ? "text-purple-400 font-semibold"
                              : ""
                          }`
                        : `text-gray-600 hover:text-purple-700 ${
                            activeSection === name
                              ? "text-purple-700 font-semibold"
                              : ""
                          }`
                    }`}
                  >
                    {name}
                  </a>
                ))}

                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode ? "hover:bg-gray-800" : "hover:bg-purple-100"
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun size={24} className="text-yellow-500" />
                  ) : (
                    <Moon size={24} className="text-purple-600" />
                  )}
                </button>
              </div>

              <button
                className={`md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode ? "hover:bg-gray-800" : "hover:bg-purple-100"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-6 h-6">
                  <div
                    className={`absolute transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <Menu size={24} />
                  </div>
                  <div
                    className={`absolute transition-all duration-300 ${
                      isMenuOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <X size={24} />
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isDarkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
            }`}
            style={{
              maxHeight: isMenuOpen ? "400px" : "0",
              opacity: isMenuOpen ? "1" : "0",
              visibility: isMenuOpen ? "visible" : "hidden",
              borderTop: isMenuOpen ? "1px solid" : "none",
            }}
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map(({ name, icon: Icon }, index) => (
                <a
                  key={name}
                  href={`#${name}`}
                  className={`block py-2 capitalize transition-all duration-300 transform ${
                    isDarkMode
                      ? `text-gray-300 hover:text-purple-400 ${
                          activeSection === name
                            ? "text-purple-400 font-semibold"
                            : ""
                        }`
                      : `text-gray-600 hover:text-purple-700 ${
                          activeSection === name
                            ? "text-purple-700 font-semibold"
                            : ""
                        }`
                  } ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={20} />
                    <span>{name}</span>
                  </div>
                </a>
              ))}

              <div
                className={`py-2 border-t ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: "500ms",
                }}
              >
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center w-full py-2 capitalize transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:text-purple-400"
                      : "text-gray-600 hover:text-purple-700"
                  }`}
                >
                  <span className="mr-3">
                    {isDarkMode ? (
                      <Sun size={20} className="text-yellow-500" />
                    ) : (
                      <Moon size={20} className="text-purple-600" />
                    )}
                  </span>
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>

      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            isDarkMode ? "opacity-50" : "opacity-5"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 via-purple-400 via-blue-400 via-blue-300 to-blue-600 animate-gradient-x transition-all duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent animate-gradient-y transition-all duration-500 ease-in-out" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
            Who I Am
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Avatar with glow effect */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="relative w-48 h-48 group">
                <div
                  className={`absolute inset-0 rounded-lg blur-xl transition-opacity duration-300 group-hover:blur-2xl ${
                    isDarkMode ? "bg-purple-600/30" : "bg-purple-600/20"
                  }`}
                />
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <div className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
            </div>

            <div
              className={`rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-lg ${
                isDarkMode
                  ? "bg-gray-800/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                  : "bg-white/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
              } hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`}
            >
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Driven by the passion to make meaningful differences, I do want
                to craft solutions that positively impact the humanity using my
                creativity. My journey is fueled by a relentless creativity to
                harness the power of technology in order to effect tangible
                changes in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add new animations to the existing style block */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-y {
          0%,
          100% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
        }

        @keyframes gradient-text {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-y {
          animation: gradient-y 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-text {
          animation: gradient-text 5s ease infinite;
        }

        /* Keep existing animations */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
      <ProjectsSection isDarkMode={isDarkMode} />

      {/* Skills Section */}
      <SkillsSection isDarkMode={isDarkMode} />

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 transition-colors duration-300 relative overflow-hidden ${
          isDarkMode ? "bg-gray-900" : "bg-white/50"
        }`}
      >
        {/* Animated background gradient */}
        <div />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h2>

          <p
            className={`text-xl mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to create meaningful impact through technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-gray-700/50 hover:bg-gray-600/50"
                    : "bg-white hover:shadow-xl"
                }`}
                style={{
                  animationDelay: `${link.delay}ms`,
                }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`p-4 rounded-full transition-colors duration-300 ${
                      isDarkMode ? "bg-gray-600/50" : "bg-gray-50"
                    } ${
                      link.color
                    } group-hover:scale-110 transform transition-transform duration-300`}
                  >
                    <link.icon
                      size={24}
                      className="transition-all duration-300"
                    />
                  </div>
                  <span
                    className={`font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } ${link.color}`}
                  >
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:phanxuanquang2@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium group"
          >
            Let's Connect
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, gray 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
          }`}
        >
          <ChevronUp size={24} />
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PortfolioLanding;
