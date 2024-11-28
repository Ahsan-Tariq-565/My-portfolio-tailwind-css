import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-down">
          <h2 className="text-4xl md:text-5xl">Tecnologies I work with</h2>
          <p className="text-gray-500 pt-2">
            I have a soild foundation in web development, specially in HTML,
            CSS, and TypeScript. I also have experience in React, Next.js, and
            Tailwind CSS to create dynamic and user-friendly application I stay
            updated on on the latest technologies to enhance my skills and
            contibute effectively to projects
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-down">TypeScrit</h2>
              <h2 data-aos="zoom-in-down" >react.js</h2>
              <h2 data-aos="zoom-in-down">Next.js</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-down">Tailwind</h2>
              <h2 data-aos="zoom-in-down" >CSS</h2>
              <h2 data-aos="zoom-in-down" >Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
