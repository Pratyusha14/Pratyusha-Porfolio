import React,{useEffect} from 'react'
import TagCloud from 'TagCloud'
import './About.scss';

function About(theme) {
    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
          "JAVA",
          "Spring Boot",
          "VueJS",
          "JavaScript",
          "ReactJS",
          "Vuetify",
          "HTML",
          "NodeJS",
          "Vite",
          "Nightwatch.js",
          "Tailwind CSS",
          "VSCODE",
          "CSS3",
          "C",
          "C++",
          "Linux",
          "Bootstrap",
          "MySQL",
          "FIGMA",
          "GIT",
          "Jira",
          "GITHUB",
        ];
      
        let tagCloudInstance = null; // Variable to store the TagCloud instance
      
        const updateTagCloud = () => {
          const screenWidth = window.innerWidth;
          const radius = screenWidth >= 768 ? 300 : 170; // Adjust the breakpoint as needed
      
          const options = {
            radius: radius,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
      
          if (tagCloudInstance) {
            tagCloudInstance.destroy(); // Destroy the previous instance
          }
      
          tagCloudInstance = TagCloud(container, texts, options);
        };
      
        updateTagCloud(); // Initial setup
      
        window.addEventListener("resize", updateTagCloud); // Update on window resize
      
        return () => {
          window.removeEventListener("resize", updateTagCloud);
          if (tagCloudInstance) {
            tagCloudInstance.destroy(); // Cleanup the TagCloud instance
          }
        };
      }, []);
      
    return (
      <section className={`px-5 py-20 md:py-32 ${theme}`} id="about">
            <div className="aboutc container mx-auto grid md:grid-cols-2 justify-center md:justify-between">
                <div className='text-shpere mr-auto md:mr-28 mt-0 md:-mt-16 '>
                  <span className="tagcloud"></span>
                </div>
                <div className='about-info'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        About Me
                    </h2>
                    <p align='justify' className='pb-5 pt-6'>
                      Hi, I'm Pratyusha Mallampeta — a passionate <span className='text-teal-500'> Software Engineer </span> with a strong focus on front-end development and building scalable, user-friendly web applications
                    </p>
                    <p align='justify' className='pb-5'>
                      As a developer, my expertise spans various technologies for <span className='text-teal-500'>coding</span> and <span className='text-teal-500'>problem-solving</span>. I have dedicated myself to mastering various programming languages and frameworks, constantly exploring new advancements in the field, and staying up-to-date with the latest trends.
                    </p>
                    <p align='justify' className='pb-5'>
                      In addition to my technical skills, I have excellent <span className='text-teal-500'>communication skills</span>. I perform best in fast-paced settings where I can use my analytical skills and creativity to solve difficult problems. My attention to detail and commitment to quality help me deliver high-quality code and ensure a <span className='text-teal-500'>smooth user experience</span>.
                    </p>
                    <p align='justify'>
                      I thrive in fast-paced environments where I can solve complex problems, collaborate across teams, and continuously grow as a developer.                    
                    </p>
    
                </div>
            </div>
        </section>
    
    )
}


export default About
