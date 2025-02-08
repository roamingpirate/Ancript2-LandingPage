import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';

const VideoSection = ({ }) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (!entry.isIntersecting && isPlaying) {
                    setIsPlaying(false); // Pause video when out of view
                }
            },
            { threshold: 0.5 }
        );

        const container = playerRef.current?.getInternalPlayer()?.parentElement;
        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, [isPlaying]);

    return (
        <div
            className="relative rounded-lg overflow-hidden"
            style={{
                width: '100%',
                margin: 'auto',
            }}
        >
            {(!isPlaying || !isVisible) && (
                <div
                    className="absolute inset-0 rounded-lg flex justify-center items-center bg-black bg-opacity-50 z-10"
                    onClick={() => setIsPlaying(true)}
                    style={{
                        backgroundImage: `url(/thumbnail.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <button
                        className="p-1 sm:p-2 bg-opacity-70 border-4 mt-[clamp(4rem,14vw,20rem)] border-white rounded-full text-white"
                    >
                        <PlayArrowIcon style={{ fontSize: 'clamp(22px, 5vw, 60px)' }} />
                    </button>
                </div>
            )}

            <ReactPlayer
                ref={playerRef}
                className="rounded-lg overflow-hidden"
                style={{ opacity: isPlaying && isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
                width="100%"
                height="100%"
                url={`demoVideo.mp4`}
                playing={isPlaying}
                controls={true}
                onPause={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default VideoSection;
