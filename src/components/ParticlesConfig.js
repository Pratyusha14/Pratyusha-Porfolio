import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Use slim for smaller bundle size

const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);

  // Initialize the particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Define the options based on the theme
  const options = useMemo(() => {
    const isDarkMode = theme === "dark"; // Check if theme is dark mode

    return {
      background: {
        color: {
          value: isDarkMode ? "black" : "lightdark", // Dark or light background
        },
      },
      fullScreen: {
        enable: false, // Disable full-screen to limit to container
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: isDarkMode ? "#37e4db" : "#191970", // Dark or light particle color
        },
        shape: {
          type: ["circle", "square", "triangle", "polygon"],
          options: {
            polygon: [
              {
                sides: 5
              },
              {
                sides: 6
              },
              {
                sides: 8
              }
            ]
          }
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
        },
        links: {
          enable: true,
          distance: 40,
          color: isDarkMode ? "#ffffff" : "#191970", // Dark or light link color
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Push particles away
          },
          onClick: {
            enable: true,
            mode: "push", // Add more particles
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
          },
          push: {
            quantity: 10,
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;