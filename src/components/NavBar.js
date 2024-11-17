// components/NavigationBar.js
import React from "react";
import { Menu, X, Sun, Moon, User, Code, Brain, Mail } from "lucide-react";

const navItems = [
  { name: "about", icon: User },
  { name: "projects", icon: Code },
  { name: "skills", icon: Brain },
  { name: "contact", icon: Mail },
];

const NavigationBar = ({
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  setIsDarkMode,
  activeSection,
}) => {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
              Phan Xuan Quang
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
                  
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(name);
                  }}
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
                onClick={(e) => {
                  setIsMenuOpen(false);
                  e.preventDefault(); 
                  scrollToSection(name);
                }}
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
  );
};

export default NavigationBar;
