import React, { useState, useEffect, useCallback } from "react";
import NavigationBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import { ArrowBigUpDash } from "lucide-react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(false); // Để mặc định là false (chế độ sáng)
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    projects: false,
    skills: false,
    contact: false,
  });

  const sections = ["about", "projects", "skills", "contact"];

  // 1. Thiết lập chế độ tối theo hệ thống khi ứng dụng load lần đầu tiên
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    setIsDarkMode(systemPrefersDark); // Cập nhật chế độ mặc định theo hệ thống
  }, []);

  // 2. Intersection Observer - Lắng nghe khi các phần tử hiển thị
  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleSections((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  // 3. Xử lý scroll - làm việc hiệu quả hơn với requestAnimationFrame hoặc debounce
  const handleScroll = useCallback(() => {
    // Kiểm tra xem nút "scroll to top" có cần hiển thị không
    setIsVisible(window.pageYOffset > 300);

    // Xác định section nào đang được hiển thị
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) setActiveSection(currentSection);
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 4. Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900"
      }`}
    >
      <NavigationBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
      />

      {sections.map((section) => (
        <section
          key={section}
          id={section}
          className={`transition-all duration-300 ease-in-out transform ${
            visibleSections[section]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {section === "about" && <About isDarkMode={isDarkMode} />}
          {section === "projects" && <Projects isDarkMode={isDarkMode} />}
          {section === "skills" && <Skills isDarkMode={isDarkMode} />}
          {section === "contact" && <Contact isDarkMode={isDarkMode} />}
        </section>
      ))}

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
        >
          <ArrowBigUpDash />
        </button>
      )}
    </div>
  );
};

export default App;
