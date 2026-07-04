'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

export default function LatestVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section id="latest-video" className="relative w-full bg-white py-20 overflow-hidden">

            {/* Fon — kulrang diagonal shape */}
            <div
                className="absolute inset-0 bg-[#F2F2F2] z-0"
                style={{
                    clipPath: 'polygon(0 6%, 50% 0%, 100% 6%, 100% 94%, 50% 100%, 0 94%)',
                }}
            />

            {/* Kontent */}
            <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col items-center">

                {/* Sarlavha */}
                <h2 className="font-oswald text-3xl md:text-[2.8rem] font-bold uppercase tracking-tight text-black mb-10 text-center">
                    Our Store Latest Video
                </h2>

                {/* Video konteyner */}
                <div
                    className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-video overflow-hidden shadow-2xl cursor-pointer group border-4 border-white"
                    onClick={handlePlay}
                >
                    {/* Video element */}
                    <video
                        ref={videoRef}
                        src="/video/video-thumbnail.webm"
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        playsInline
                        muted
                        preload="metadata"
                        onEnded={() => setIsPlaying(false)}
                    />

                    {/* Qoraytiruvchi overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* "SUPER SKATER" — chapdan vertikal text */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[38%] -rotate-90 select-none opacity-100">
                        <div className="font-oswald text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                            <h1 className="font-roboto font-medium text-[#BDBDBD] whitespace-nowrap">SUPER SKATER</h1>
                        </div>
                    </div>

                    {/* Play / Pause tugmasi — markaz */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm opacity-100 transition-transform duration-300 active:scale-95 group-hover:scale-110">
                            {isPlaying ? (
                                <Icon icon="solar:pause-bold" className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
                              ) : (
                                <Icon icon="solar:play-bold" className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 ml-1" />
                            )}
                        </div>
                    </div>

                    {/* "SKATE" stikeri — yuqori o'ngda */}
                    <div className="absolute top-2 right-2 sm:top-5 sm:right-5 md:top-8 md:right-8 rotate-[5deg] select-none opacity-100 flex items-center justify-center pointer-events-none w-24 sm:w-32 md:w-[150px]">
                        <Image
                            src="/images/video-upimage.svg"
                            alt="Skate"
                            width={150}
                            height={100}
                            className="w-full h-auto object-contain drop-shadow-md"
                        />
                    </div>


                    {/* <div className="absolute top-[calc(50%+30px)] right-5 -translate-y-1/2 -rotate-[40deg] px-6 py-2 rounded-md shadow-lg select-none opacity-100 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10">
                        <div className="font-oswald text-6xl md:text-7xl font-bold tracking-widest text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                            <h1 className="font-roboto font-medium text-[#BDBDBD]">SKATE</h1>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}