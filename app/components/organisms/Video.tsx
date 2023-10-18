"use client";

import { raleway } from "@/app/fonts";
import { ReactNode, useRef } from "react";

type VideoType = {
  className: string;
  content?: string;
  icon?: ReactNode;
  src: string;
  title: string;
  titleSize?: string;
};

function Video(props: VideoType) {
  const {
    className,
    content = "",
    icon = null,
    src,
    title,
    titleSize = "text-xl sm:text-4xl",
  } = props;

  const vidRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (vidRef.current) vidRef?.current.play();
  }

  function handleStop() {
    if (vidRef.current) vidRef.current?.pause();
  }

  const _content = content && (
    <p className={`${raleway.className} leading-3 text-[10px] sm:text-sm`}>
      {content}
    </p>
  );

  return (
    <div className={className}>
      <div className="absolute w-full flex top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300">
        <div className="text-gray-300 font-bold bg-black bg-opacity-60 backdrop-blur-sm rounded-r-3xl w-fit py-2 sm:py-4 pl-3 pr-5 text-left">
          <p className={`flex items-center ${titleSize}`}>
            {title} <span className="ml-2">{icon}</span>
          </p>

          {_content}
        </div>
      </div>

      <video
        className="h-full object-cover"
        ref={vidRef}
        onMouseEnter={handlePlay}
        onMouseLeave={handleStop}
        loop
        muted
        playsInline
      >
        <source src={src} />
      </video>
    </div>
  );
}

export default Video;
