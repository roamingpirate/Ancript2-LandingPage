import { OrbitControls, Environment, ContactShadows,Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Avatar } from "./avatar";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

function Spinner() {
  const { progress } = useProgress(); 
  const isLoading = progress < 100; 

  return isLoading ? (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#2a1b5d,_#3b256d,_#4c3180,_#5d3d94)] transition-opacity duration-500">
      <Loader2 className="w-13 h-13 text-white animate-spin mb-4" />
    </div>
  ) : null; 
}

function AvatarCanvas({ isPlaying, audio, isMale, avatarNumber, setIsLoading }) {
  const { progress } = useProgress(); 
  const isLoading = progress < 100; 

  useEffect(() => {
    setIsLoading(isLoading);
  },[isLoading,setIsLoading])

  return (
    <div className="relative bg-[radial-gradient(circle,_#2a1b5d,_#3b256d,_#4c3180,_#5d3d94)]">
      {isLoading && <Spinner />} 
      <Canvas 
          shadows 
          camera={{ position: [0, 0.6, 2.3], fov: 30 }} 
          >
        {/* <OrbitControls /> */}
        <Environment preset="sunset" />
        <ContactShadows opacity={0.7} />
          <Avatar isPlaying={isPlaying} audio={audio} isMale={isMale} avatarNumber={avatarNumber}  />
      </Canvas>
    </div>
  );
}

export default AvatarCanvas;
