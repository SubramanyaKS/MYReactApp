import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";

const Background = (props) => {
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
          background: {
            color: "#000000", // this sets a background color for the canvas
          },
          fullScreen: {
            enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
            zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
          },
          particles: {
            color:{
              value:"#00ddff",
              animation: {
                enable: true,
                speed: 40,
                sync: true
            },
            },
            links: {
              enable: true,
              distance: 100,
              color: "#ff0000",
              opacity: 0.4,
              width: 1
          },
            move: {
              enable: true, // enabling this will make particles move in the canvas
              speed: 3, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
            },
            opacity: {
              value: 0.7, // using a different opacity, to have some semitransparent effects
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 10,
              random: false,
              animation: {
                  enable: true,
                  speed: 20,
                  minimumValue: 0.1,
                  sync: false
              }
          },
           //// size: {
            //  value: { min: 1, max: 3 }, // let's randomize the particles size a bit
            //},
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "bubble"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 200
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                }
            }
        },
        detectRetina: true,
        };
      }, []);
    
      // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
      const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
      }, []);
    
      // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
      return <Particles id={props.id} init={particlesInit} options={options} />;
};
export default Background;
