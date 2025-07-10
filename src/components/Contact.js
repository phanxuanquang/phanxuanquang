// components/Contact.js
import React from "react";
import { Mail, Linkedin, Facebook, MessageCircle } from "lucide-react";

const Contact = ({ isDarkMode }) => {
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
      url: "https://discord.com/users/hackkiemsi",
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

  return (
    <section
      id="contact"
      className={`py-20 px-4 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white/50"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent animate-fade-in">
          How To Reach Me
        </h2>

        <p
          className={`text-xl mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I'm always open to discussing about innovative ideas, or job
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
              <div className="flex items-center justify-center">
                <link.icon size={24} className={`${link.color}`} />
              </div>
              <span className="mt-3 block text-lg font-semibold">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
