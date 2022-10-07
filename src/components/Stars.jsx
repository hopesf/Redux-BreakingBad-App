import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

const Stars = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: '#000',
          },
          image: '',
          position: '',
          repeat: '',
          size: '',
          opacity: 1,
        },
        backgroundMask: {
          composite: 'destination-out',
          cover: {
            color: {
              value: '#fff',
            },
            opacity: 1,
          },
          enable: false,
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: 'circle',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: false,
                force: 3,
                smooth: 24,
              },
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: null,
              duration: null,
              easing: 'ease-out-back',
              factor: null,
              maxSpeed: null,
              speed: null,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: null,
              duration: null,
              mix: false,
              opacity: null,
              size: null,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: null,
              links: {
                opacity: 0.5,
              },
              radius: null,
            },
            grab: {
              distance: null,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: null,
            },
            remove: {
              quantity: null,
            },
            repulse: {
              distance: null,
              duration: null,
              factor: null,
              speed: null,
              maxSpeed: null,
              easing: 'ease-out-quad',
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: 'ease-out-quad',
                selectors: [],
              },
            },
            slow: {
              factor: null,
              radius: null,
            },
            trail: {
              delay: null,
              pauseOnStop: false,
              quantity: null,
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: '#ffffff',
                  },
                  stop: {
                    value: '#000000',
                  },
                },
                radius: null,
              },
              shadow: {
                color: {
                  value: '#000000',
                },
                length: 2000,
              },
            },
          },
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: 'bounce',
            overlap: {
              enable: true,
              retries: 0,
            },
          },
          color: {
            value: '#fff',
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                decay: 0,
                sync: true,
              },
            },
          },
          groups: {},
          move: {
            angle: {
              offset: 20,
              value: 120,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
            center: {
              x: 50,
              y: 50,
              mode: 'percent',
              radius: 0,
            },
            decay: 0,
            distance: {
              horizontal: 0,
            },
            direction: 'bottom',
            drift: 6,
            enable: false,
            gravity: {
              acceleration: 13,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: true,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: true,
              options: {},
            },
            outModes: {
              default: 'out',
              bottom: 'destroy',
              left: 'out',
              right: 'out',
              top: 'out',
            },
            random: true,
            size: false,
            speed: 5,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: true,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: '#000000',
              },
            },
            vibrate: true,
            warp: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
              factor: 1000,
            },
            limit: 0,
            value: 200,
          },
          opacity: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 2,
              decay: 0,
              sync: true,
              destroy: 'none',
              startValue: 'random',
              minimumValue: 0,
            },
          },
          reduceDuplicates: true,
          shadow: {
            blur: 5,
            color: {
              value: '#000',
            },
            enable: true,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {},
            type: 'circle',
          },
          size: {
            random: {
              enable: false,
              minimumValue: 1,
            },
            value: 1,
            animation: {
              count: 0,
              enable: false,
              speed: 5,
              decay: 0,
              sync: false,
              destroy: 'none',
              startValue: 'random',
            },
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: 'clockwise',
            path: false,
          },
          destroy: {
            bounds: {},
            mode: 'none',
            split: {
              count: 1,
              factor: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 3,
              },
              rate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: {
                  min: 4,
                  max: 9,
                },
              },
              sizeOffset: true,
              particles: {},
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 1,
            },
            enable: false,
            enlighten: {
              enable: false,
              value: 0,
            },
            mode: 'vertical',
            speed: 25,
          },
          tilt: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              decay: 0,
              sync: false,
            },
            direction: 'clockwise',
            enable: false,
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 5,
            enable: false,
            speed: {
              angle: 50,
              move: 10,
            },
          },
          orbit: {
            animation: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              sync: false,
            },
            enable: false,
            opacity: 1,
            rotation: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 45,
            },
            width: 1,
          },
          links: {
            blink: false,
            color: {
              value: '#fff',
            },
            consent: false,
            distance: 100,
            enable: false,
            frequency: 1,
            opacity: 1,
            shadow: {
              blur: 5,
              color: {
                value: '#000',
              },
              enable: false,
            },
            triangles: {
              enable: false,
              frequency: 1,
            },
            width: 1,
            warp: false,
          },
          repulse: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        emitters: [],
      }}
    />
  );
};
export default Stars;
