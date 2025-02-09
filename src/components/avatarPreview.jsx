import { Play, Pause, X } from "lucide-react";
import { useEffect, useState,useRef } from "react";
import SubtitlesSyncText from "../subComponents/subtitles";
import AvatarCanvas from "../subComponents/canvas";


const AvatarPreview = ({avatarNumber,isMale,isVisible,setIsVisible}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading,setIsLoading] = useState(true);
    //const [isClosed, setIsClosed] = useState(false);
    const avatarAudioRef = useRef(null);

    useEffect(() => {
        avatarAudioRef.current = new Audio(`Avatar_audio_${avatarNumber}.wav`);
        avatarAudioRef.current.onended = () => setIsPlaying(false);

        return () => {
            avatarAudioRef.current.pause();
            avatarAudioRef.current = null;
        }
    }, []);

    const handleAudioControl = () => {
        if(isLoading)
        {
            return;
        }
        if (isPlaying) {
            avatarAudioRef.current.pause();
        } else {
            avatarAudioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    } 

    return (
        <div className={`fixed inset-0 flex flex-col justify-center items-center ${!isVisible? 'hidden':'visible'} bg-black/80 backdrop-blur-sm z-50 w-screen `}>
            {/* Avatar Playback */}
            <div className="w-[300px] h-[300px] rounded-full flex justify-center bg-gray-500 border-2 border-gray-800 overflow-clip">
                    {/* <img src="avatar.png" className="rounded-full  h-[300px] w-[300px] p-1.5"/> */}
                    <AvatarCanvas isPlaying={isPlaying} audio={avatarAudioRef} isMale={isMale} avatarNumber={avatarNumber} setIsLoading={setIsLoading}/>
            </div>
            <div className="w-[75%] max-w-[400px] mx-[80px] py-8 flex items-center">
                {/* Caption Area */}
                <div className="w-[90%] text-xl justify-center items-center">
                    <SubtitlesSyncText subtitleFile={`Avatar_audio_${avatarNumber}`} audioRef={avatarAudioRef}/>
                </div>
                {/* Play Pause Close Control */}
                <div className="w-[10%]">
                    <div className="flex flex-col bg-gray-200 justify-center items-center space-y-[10px] rounded-2xl  py-3 px-2 max-h-[300px] w-[48px]">
                        <div className="rounded-xl bg-gray-400 p-1" onClick={handleAudioControl}>
                            {
                                isPlaying? <Pause color="white" size={26} strokeWidth={2}/> : <Play size={26} strokeWidth={2} color="white"/>
                            }
                        </div>
                        <div className="rounded-xl bg-red-500/80 p-1" onClick={() => {setIsVisible(false); avatarAudioRef.current.pause()}}>
                        <X size={28} color="white" strokeWidth={3}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default AvatarPreview;