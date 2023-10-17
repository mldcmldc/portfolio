import { raleway } from "@/app/fonts";
import { useRef } from "react";

type VideoType = {
  className: string;
  content: string;
  src: string;
  title: string;
  titleSize?: string;
};

function Video(props: VideoType) {
  const {
    className,
    content,
    src,
    title,
    titleSize = "text-base sm:text-4xl",
  } = props;

  const vidRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (vidRef.current) vidRef?.current.play();
  }

  function handleStop() {
    if (vidRef.current) vidRef.current?.pause();
  }

  return (
    <div className={className}>
      <div className="absolute w-full flex top-1/2 -translate-y-1/2 group-hover:opacity-0 transition-opacity duration-300">
        <div className="text-gray-300 font-bold bg-black bg-opacity-60 backdrop-blur-sm w-full py-2 sm:py-4 px-3 text-left">
          <p className={`${titleSize}`}>{title}</p>
          <p
            className={`${raleway.className} leading-3 text-[10px] sm:text-sm`}
          >
            {content}
          </p>
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
