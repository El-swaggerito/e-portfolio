import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="About"
      className="w-full h-screen min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a passionate front-end web developer with a keen eye for design
          and a commitment to creating seamless, user-friendly experiences. My
          journey in the world of web development began with a strong foundation
          in HTML, CSS, and JavaScript, which I have since expanded upon to
          include proficiency in modern framework such as React. I am dedicated
          to staying on the cutting edge of technology trends, ensuring that my
          skill set remains relevant and adaptable to the ever-evolving
          landscape of front-end development. With a meticulous approach to
          coding and an appreciation for responsive design, I strive to bring
          creativity and functionality together to deliver visually appealing
          and intuitive websites.
        </p>

        <br />

        <p className="text-xl">
          Throughout my projects, I have demonstrated a knack for translating
          design concepts into pixel-perfect, responsive interfaces. My
          portfolio showcases a diverse range of web applications, each
          highlighting my ability to collaborate with cross-functional teams and
          turn ideas into interactive digital solutions. I am adept at
          optimizing website performance, ensuring fast load times and a smooth
          user experience. Beyond technical proficiency, I bring a strong sense
          of user empathy to my work, always striving to understand the end
          user's perspective and creating interfaces that prioritize
          accessibility and inclusivity. As a forward-thinking front-end web
          developer, I am excited to contribute my skills to projects that push
          the boundaries of what is possible on the web.
        </p>
      </div>
    </div>
  );
};

export default About;
