import Image from "next/image";
import { raleway } from "@/app/fonts";
import Video from "../organisms/Video";

function ExperienceSection() {
  return (
    <div className="grid grid-cols-5 gap-3 z-10 mt-2">
      <div className="col-span-4 text-white text-center my-auto h-full">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm h-full flex flex-col justify-center">
          <p className="text-2xl font-bold">Almedah | Full-Stack</p>
          <small className={`${raleway.className} text-gray-300`}>
            January 2021 - March 2022
          </small>
        </div>
      </div>

      <div className="col-span-1 w-full">
        <Image
          alt="Technocore logo"
          height={200}
          width={200}
          src="/icons/technocore.jpeg"
        />
      </div>

      <Video
        className="row-span-4 col-span-4 relative group"
        content="NextJS, TypeScript, Tailwind"
        src="/videos/boffi.mov"
        title="Brand Site"
      />

      <div className="row-span-4 font-bold text-center flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-blur-sm">
        <p className="text-2xl text-white">Symph</p>
        <p className="text-2xl text-white">Front-end</p>
        <small className="text-gray-300">March - June</small>
      </div>

      <div className="col-span-full text-center flex flex-col items-center justify-center py-3 bg-white bg-opacity-5 backdrop-blur-sm h-full">
        <p className="text-3xl text-white">Focus Global Inc | Front-end</p>
        <small className="text-gray-300">July - September 2023</small>
      </div>

      <Video
        className="col-span-2 relative group"
        content="NextJS, TypeScript, Tailwind"
        src="/videos/rewards.mov"
        title="Rewards Portal"
        titleSize="text-2xl"
      />

      <Video
        className="col-span-3 relative group"
        content="NextJS, TypeScript, Tailwind, Strapi CMS"
        title="E-commerce"
        titleSize="text-2xl"
        src="/videos/alif.mov"
      />

      <Video
        className="col-span-full relative group"
        content="NextJS, TypeScript, Tailwind, Strapi CMS"
        title="Microsite"
        src="/videos/szwf-spc.mov"
      />

      <Video
        className="col-span-3 relative group"
        content="NextJS, TypeScript, Tailwind, Strapi CMS"
        title="Products"
        src="/videos/miele.mov"
      />

      <Video
        className="col-span-2 relative group"
        content="NextJS, TypeScript, Tailwind, Strapi CMS"
        title="Brand Site"
        titleSize="text-2xl"
        src="/videos/szwf.mov"
      />

      <div className="col-span-full" />

      <div className="col-span-1">
        <Image
          alt="Shaw logo"
          className="h-full object-cover"
          height={150}
          width={150}
          src="/icons/sb.png"
        />
      </div>
      <div className="col-span-4 font-bold text-center flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-blur-sm">
        <p className="text-3xl text-white">Shaw Group | Full-Stack</p>
        <small className="text-gray-300">October until Current</small>
      </div>
    </div>
  );
}

export default ExperienceSection;
