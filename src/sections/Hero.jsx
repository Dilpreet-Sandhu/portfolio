import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import HackerRoom from "../components/HackerRoom";
import Target from "../components/Target";
import { calculateSizes } from "../constants";
import CanvasLoader from "../loaders/hackerLoader";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";

const Hero = () => {
  ;

  const isMobile = useMediaQuery({maxWidth : 768});
  const isSmall = useMediaQuery({maxWidth : 440});
  const isTablet = useMediaQuery({minWidth :768,maxWidth : 1024});

  const size = calculateSizes(isSmall,isMobile,isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi , I am Dilpreet Sandhu <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I Bring Ideas to Life with Code
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 ">

        <Canvas className="w-full h-full">
         <Suspense fallbak={<CanvasLoader/>}>
         <PerspectiveCamera makeDefault position={[0, 0, 24]} />
         <HeroCamera>
          <HackerRoom
            position={size.deskPosition}
            scale={size.deskScale}
            rotation={[0,4.2,0]}
          />
         </HeroCamera>

          <group>
            <Target position={size.targetPosition}/>
            <ReactLogo position={size.reactLogoPosition}/>
            <Cube position={size.cubePosition}/>
            <Rings position={size.ringPosition}/>
          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
         </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;