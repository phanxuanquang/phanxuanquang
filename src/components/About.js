import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center blur-sm opacity-30`}
        style={{
          backgroundImage:
            "url(https://live.staticflickr.com/65535/54145604143_20f904d811_k_d.jpg)",
        }}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isDarkMode ? "opacity-30" : "opacity-30"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 via-purple-400 via-blue-400 via-blue-300 to-blue-600 animate-gradient-x transition-all duration-300 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent animate-gradient-y transition-all duration-300 ease-in-out" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 mt-16">
          <div className="flex justify-center mb-16">
            <div className="relative w-80 h-80 group">
              <div
                className={`absolute inset-0 rounded-lg blur-xl transition-opacity duration-300 group-hover:blur-2xl ${
                  isDarkMode ? "bg-purple-600/30" : "bg-purple-600/20"
                }`}
              />
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src="https://live.staticflickr.com/65535/52796436252_f098729f26_k_d.jpg"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-lg ${
              isDarkMode
                ? "bg-gray-800/50 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                : "bg-white/80 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            } hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`}
          >
            <p
              className={`text-lg leading-relaxed text-justify ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I am a software engineer with a strong background in .NET,
              specializing in integrating backend services and generative
              AI-based solutions. I prioritize performance, security, and system
              optimization in all of my work. I have much experience working
              with designing relational database, cloud services, and deploying
              scalable solutions. I have also focused on leveraging emerging
              technologies such as LLM and cloud computing to drive innovation
              and deliver high-impact technology solutions.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 ">
            <img
              src={
                isDarkMode
                  ? "https://github-readme-stats.vercel.app/api?username=phanxuanquang&theme=holi&count_private=true&hide_border=true&rank_icon=github&line_height=20"
                  : "https://github-readme-stats.vercel.app/api?username=phanxuanquang&count_private=true&hide_border=true&rank_icon=github&line_height=20"
              }
              alt="GitHub Stats"
              class="w-full md:w-auto rounded-2xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            />
            <img
              src={
                isDarkMode
                  ? "https://github-readme-stats.vercel.app/api/top-langs/?username=phanxuanquang&layout=compact&theme=holi&count_private=true&hide_border=true"
                  : "https://github-readme-stats.vercel.app/api/top-langs/?username=phanxuanquang&layout=compact&count_private=true&hide_border=true"
              }
              alt="Most Used Languages"
              class="w-full md:w-auto rounded-2xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
