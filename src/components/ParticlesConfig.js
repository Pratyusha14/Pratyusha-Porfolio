import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, theme }) => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => {
    const isDarkMode = theme === "dark";

    return {
      background: {
        color: {
          value: isDarkMode ? "black" : "lightdark",
        },
      },
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          value: 400,
          density: { enable: true, area: 800 },
        },
        color: {
          value: isDarkMode ? "#37e4db" : "#191970",
        },
        shape: {
          type: ["circle", "square", "triangle", "polygon"],
          options: {
            polygon: [{ sides: 5 }, { sides: 6 }, { sides: 8 }],
          },
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
          color: isDarkMode ? "#ffffff" : "#191970",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 200 },
          push: { quantity: 10 },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  return (
    <Particles
      id={id}
      init={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
