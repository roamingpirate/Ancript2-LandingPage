import React, { useState, useEffect } from 'react';
import srtParser2 from "srt-parser-2";

const SubtitlesSyncText = ({ subtitleFile, audioRef }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState(null);
  const [subtitles, setSubtitles] = useState([]);

  useEffect(() => {
    const fetchSubtitles = async () => {
        const response = await fetch(`./${subtitleFile}.srt`);
        const data = await response.text();
        console.log(data);
        var parser = new srtParser2();
        var srt_array = parser.fromSrt(data);
        console.log(srt_array);
        setSubtitles(srt_array);
    };
    fetchSubtitles();
  }, [subtitleFile]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const subtitle = subtitles.find(
          (sub) => currentTime >= sub.startSeconds && currentTime <= sub.endSeconds
        );
        setCurrentSubtitle(subtitle || null);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [subtitles, audioRef]);

  return (
        <div className='w-full flex justify-center text-white items-center'>
        {currentSubtitle && <p>{currentSubtitle.text}</p>}
        </div>
  );
};

export default SubtitlesSyncText;
