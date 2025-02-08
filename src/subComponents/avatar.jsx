import React, { useEffect, useRef, useState,useMemo } from 'react'
import { useGraph, useFrame,useThree} from '@react-three/fiber'
import { useAnimations, useGLTF , useFBX} from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'
import faceExpressions from '../data/FaceExpressionConfig'
import avatar_lipsync_1 from '../data/Avatar_audio_1.json';
import avatar_lipsync_2 from '../data/Avatar_audio_2.json';
import avatar_lipsync_3 from '../data/Avatar_audio_3.json';

const corresponding = {
  A: "viseme_PP",
  B: "viseme_kk",
  C: "viseme_I",
  D: "viseme_AA",
  E: "viseme_O",
  F: "viseme_U",
  G: "viseme_FF",
  H: "viseme_TH",
  X: "viseme_PP",
};

const avatarsId = [
  '67a25a81f7483b9129e37177',
  '67a7675cbd1a555041fae772',
  '67a76636eb8b051f6a8e8877',
  '67a7686804fd6bfbf2e39bbf'
];

const avatarLipsyncArray = [avatar_lipsync_1, avatar_lipsync_2, avatar_lipsync_3];


export function Avatar({isPlaying, audio, isMale, avatarNumber}) {

  // Avatar Setup
  console.log(avatarNumber);
  console.log(avatarsId[avatarNumber-1],"pop");
  const avatarUrl = `https://models.readyplayer.me/${avatarsId[avatarNumber-1]}.glb?morphTargets=ARKit,Oculus%20Visemes`
  const { scene } = useGLTF(avatarUrl);
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const avatarRef = useRef();

  //Loading Avatar Animation 
  const {animations : avatarAnimation} = useMemo(() => useGLTF(`/animations/ava${isMale?'_M':'_F'}.glb`),[]);
  const {actions, mixer,names} =useAnimations(avatarAnimation,clone);

  
  // Variables setup
  const [blink,setBlink] = useState(false);
  const [lipsync,setLipsync] = useState(avatarLipsyncArray[avatarNumber-1]);
  const morphTargetList = Object.keys(nodes.EyeLeft.morphTargetDictionary);
  const currentFaceExpression = "Smile"
  const animation = 'Talking_2'; 


  const moveMorphTarget = (target, value, speed = 0.1) => {
      // For Traversing each child objects also of this object
      clone.traverse( (child)  => 
      {
        if(child.isSkinnedMesh && child.morphTargetDictionary) {
          const index = child.morphTargetDictionary[target];
          if ( index === undefined || child.morphTargetInfluences[index] === undefined) {return;}
          child.morphTargetInfluences[index] = THREE.MathUtils.lerp(child.morphTargetInfluences[index],value,speed);
          } 
      }
  );
  };


  //useFrame
  useFrame(()=> {

    // Facial Expression Setup
    const faceExpressionConfiguration = faceExpressions[currentFaceExpression]; 
    morphTargetList.forEach((morphTarget) => {
      if(faceExpressionConfiguration && faceExpressionConfiguration[morphTarget])
      {
         moveMorphTarget(morphTarget, faceExpressionConfiguration[morphTarget],0.1)
      }
      else{
        moveMorphTarget(morphTarget, 0,0.1)
      }
    })

    // Blinking 
    moveMorphTarget("eyeBlinkLeft", blink ? 1 : 0, 0.2);
    moveMorphTarget("eyeBlinkRight", blink? 1 : 0, 0.2);

    //lipsync
    const appliedMorphTargets = [];
    if (lipsync != undefined && audio.current != undefined) {
      const currentAudioTime = audio.current.currentTime;
      for (let i = 0; i < lipsync.mouthCues.length; i++) {
        const mouthCue = lipsync.mouthCues[i];
        if (
          currentAudioTime >= mouthCue.start &&
          currentAudioTime <= mouthCue.end
        ) {
          appliedMorphTargets.push(corresponding[mouthCue.value]);
          moveMorphTarget(corresponding[mouthCue.value], 1, 0.2);
          break;
        }
      }
    }

    Object.values(corresponding).forEach((value) => {
      if (appliedMorphTargets.includes(value)) {
        return;
      }
      moveMorphTarget(value, 0, 0.1);
    });

  })

  // Animation Logic
  useEffect(() => {
    if (!actions[animation]) return;
  
    if (isPlaying) 
    {
      mixer.timeScale = 0.6;
      actions[animation]
        .reset()
        .fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5)
        .play();
    } 
    else 
    {
      mixer.timeScale = 0; 
    }

    return () => actions[animation].fadeOut(0.5);
  }, [animation, isPlaying]);
  
  // Blinking Logic
  useEffect(() => {
    let blinkTimeout;

    const blink = () => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
        scheduleNextBlink();
      }, 300);
    };

    const scheduleNextBlink = () => {
      blinkTimeout = setTimeout(blink, THREE.MathUtils.randInt(3000, 6000));
    };

    scheduleNextBlink();

    return () => clearTimeout(blinkTimeout);
  }, []);


  useEffect(() => {
    avatarRef.current.castShadow = true;
    avatarRef.current.receiveShadow = true;
  }, []);


  return (
    <group scale={0.8} dispose={null} position={isMale? [-0.009,-0.9,1.7]:[-0.009,-0.84,1.7] } rotation={[-0.2, 0, 0]}  ref={avatarRef}>
      <group rotation-x={0}>
     <primitive object={clone}/>    </group>
    </group>
  )
}

