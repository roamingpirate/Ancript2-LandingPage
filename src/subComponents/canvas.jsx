import { Loader, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Avatar } from "./avatar";

function AvatarCanvas({ isPlaying, audio, isMale, avatarNumber }) {
  const cameraControls = useRef();

  return (
    <div className="relative bg-[radial-gradient(circle,_#2a1b5d,_#3b256d,_#4c3180,_#5d3d94)]">
      <Canvas shadows camera={{ position: [0, 0.6, 2.3], fov: 30 }}>
        {/* <OrbitControls ref={cameraControls} /> */}
        <Environment preset="sunset" />
        <ContactShadows opacity={0.7} />
        <Avatar isPlaying={isPlaying} audio={audio} isMale={isMale} avatarNumber={avatarNumber} />
      </Canvas>
      <Loader />
    </div>
  );
}


export default AvatarCanvas;
