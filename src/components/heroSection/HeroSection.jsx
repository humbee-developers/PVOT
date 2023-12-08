import React, { useLayoutEffect, useRef, useEffect , Suspense, useState  } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls,Text3D as Text3DBase,Center,} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { suspend } from "suspend-react";
import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import url from "../../images/showreel.mp4";
import "../heroSection/heroSection.css";
import Spline from "@splinetool/react-spline";


gsap.registerPlugin(ScrollTrigger);
const angleToRadians = (angle) => (angle * Math.PI) / 360;

const App = () => {
  // circle animation gsap code
  const Circle = ({ position, color, radius, tube, radialSegments }) => {
    const { scene, camera } = useThree();
    const tlk = gsap.timeline();

    useLayoutEffect(() => {
      tlk.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".herosection_new_outer",
          start: "bottom 60%",
          end: "bottom -90%",
          scrub: 0.5,
          markers:true
          
        },
      })
        .to(scene.position, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".herosection_new_outer",
            start: "bottom",
            end: "bottom bottom",
            scrub: 0.5,
            
          },
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: ".herosection_new_outer",
            start: "bottom",
            end: "bottom ",
            scrub: 0.5,
          },
        });
    }, []);

    const ref = useRef();
    useFrame((state) => {
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 0.05;
      const { x } = state.mouse;
      ref.current.rotation.y = -angleToRadians(x * 5);
    });

    return (
      <mesh position={position} ref={ref}>
        <torusGeometry args={[radius, tube, radialSegments]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

  // video animation gsap code

  const TV = () => {
    
    const tl = gsap.timeline();
    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });

    const ref = useRef();
    useEffect(() => {
      // GSAP animation to scale the TV based on the scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".herosection_down_text_outer",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 2,
          markers:true
        },
      });

      tl.to(
        ref.current.scale,
        { x: 0.6, y: 0.6, z: 1, ease: "power2.inOut" },
        "<" 
      ).fromTo(
        ref.current,
        { visible: false },
        { visible: true },
        "<" 
      );

      return () => {
        tl.kill();
      };
    }, []);

    useFrame((state) => {
      const { x } = state.mouse;
      ref.current.rotation.y = -angleToRadians(x * 32);
    });

    return (
      <mesh ref={ref}
      rotation={[0, 0, 0]}
      position={[0, 1.2, 0]}
      scale={[0, 0, 1]} // Initial scale set to zero
      visible={false} >
        <planeGeometry args={[4, 2.5, 1]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    );
  };

  // 3d text animation code

  const Text3D = ({ url, scale = [1, 1, 1], ...props }) => {
    const ref = useRef();
    const font = suspend(() => {
      const loader = new TTFLoader();
      return new Promise((resolve) => {
        loader.load(url, resolve);
      });
    }, []);
  
    useEffect(() => {
      // GSAP animation to show the text when the trigger comes into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".herosection_down_text_outer",
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
  
      tl.fromTo(
        ref.current.scale,
        { x: 0, y: 0, z: 1 },
        { x: scale[1], y: scale[1], z: scale[2], ease: "power2.inOut" },
        "<" //  it plays immediately when the previous animation starts
      ).fromTo(
        ref.current,
        { visible: false },
        { visible: true },
        "<" 
      ).fromTo(
        ref.current.position,
        { x: window.innerWidth }, // Move from right side of the screen
        { x: 0, ease: "power2.inOut" },
        "<" 
      );
  
      return () => {
        tl.kill();
      };
    }, [scale]);
  
    useFrame((state) => {
      if (ref.current) {
        const { x } = state.mouse;
        ref.current.rotation.y = -angleToRadians(x * 32);
      }
    });
  
    return (
      <mesh ref={ref} position={[window.innerWidth, 1.2, 0]} scale={scale} visible={false}>
        <Center>
          <Text3DBase font={font} {...props} />
        </Center>
      </mesh>
    );
  };

  
  return (
    <div className="vv">
     <Spline scene='https://prod.spline.design/3aMnJyySbjXukRkS/scene.splinecode' />
      <div className="herosection_new_outer">
        <div className="herosection_new_text"> {" "}<span className="new_text_span">
            Digital <br /> 
          </span>{" "}
        </div>
        <div className="ggg">Design Boutique with Focus  on Aesthetics</div>
      </div>

      {/* <Canvas>
        <directionalLight position={[-6, 13, 2]} intensity={1.1} />
        <ambientLight intensity={1} />
        <group>
        <Circle position={[0, 1.5, 0]} color={"#7443ff"} radius={1.1} tube={0.3} radialSegments={30} />
        </group>
        <group>
        <Suspense fallback={null}>
            <TV />
            
            <Text3D url="https://api.fontsource.org/v1/fonts/lato/latin-300-italic.ttf" 
             height={0.02} bevelSegments={9} scale={[0.5, 0.5, 0.4]}>
              Showreel—showreel—showreel—showreel—showreel—showreel 
              <meshStandardMaterial color="white" roughness={0.5} />
            </Text3D> 
          </Suspense>
        </group>
        <OrbitControls enableRotate={false} enableZoom={false} />
      
       
      </Canvas> */}
   

      <div className="herosection_down_text_outer">
      
      </div>
    </div>
  );
};
export default App;
