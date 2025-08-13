import React, { useEffect } from 'react'; 

import { ReactComponent as WorkIcon } from "./work.svg";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Fade } from "react-awesome-reveal";

const Experience = ( {theme} ) => {
  // Icon styles with gradient and shadow
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  let workIconStyles = {
    background: "linear-gradient(135deg, #37e4db, #37e4db)",
    boxShadow: "0 0 10px #37e4db",
  };

  return (
    <section className={`px-5 py-20 md:py-32 ${theme}`} id="experience">
      <div className="container mx-auto pb-6">
        <div className="project-info md:text-left">
          <h2 className="text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2">
            Experience
          </h2>
        </div>

        <div className="pt-12">
          <VerticalTimeline>
            {timelineElements.map((element, index) => (
              <Fade key={element.key || index} triggerOnce>
                <VerticalTimelineElement
                  date={element.date}
                  dateClassName={`${theme === 'dark' ? 'dark-date' : 'light-date'}`}
                  iconStyle={workIconStyles}
                  icon={<WorkIcon />}
                  position={index % 2 === 0 ? "left" : "right"} // Alternating positions
                  contentStyle={{
                    background: "#ffffff",
                    color: "#000000",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    padding: "20px", // Added padding
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #ffffff",
                  }}
                  style={{ marginBottom: "20px" }} // Added gap below each element
                >
                  <h3 className="vertical-timeline-element-title text-black text-2xl font-bold transition-transform duration-300 hover:scale-105">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle text-black text-xs font-semibold">
                    {element.location}
                  </h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: element.description }}
                    id="description"
                    className="text-black mt-2"
                  ></div>
                </VerticalTimelineElement>
              </Fade>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;