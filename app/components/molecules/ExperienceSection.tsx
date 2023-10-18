import Image from "next/image";
import { Eye, Gem, Microscope, Shirt, Store } from "lucide-react";
import { raleway } from "@/app/fonts";
import Video from "../organisms/Video";
import Link from "next/link";

function ExperienceSection() {
  return (
    <div className="grid grid-cols-5 gap-3 z-10 mt-2 sm:pt-6">
      <div className="col-span-full sm:col-span-4 text-white text-center my-auto h-full">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm h-full flex flex-col justify-center py-3">
          <div className="flex w-fit space-x-1 mx-auto mb-1 text-gray-300 text-xs">
            <p className="border p-px px-2">NextJS</p>
            <p className="border p-px px-2">TypeScript</p>
            <p className="border p-px px-2">Tailwind</p>
          </div>
          <p className="text-2xl font-bold">Almedah | Full-Stack</p>
          <small className={`${raleway.className} text-gray-300`}>
            January 2021 - March 2022
          </small>
        </div>
      </div>

      <div className="col-span-full sm:col-span-1 flex justify-center">
        <Image
          alt="Technocore logo"
          className="max-h-32 w-fit"
          height={200}
          width={200}
          src="/icons/technocore.jpeg"
        />
      </div>

      <div className="col-span-full grid grid-cols-5">
        <Link
          passHref
          className="row-span-4 col-span-full sm:col-span-4  order-last sm:order-none"
          href="https://boffistudiomanila.com/adl"
        >
          <Video
            className="relative group"
            icon={<Eye />}
            src="/videos/boffi.mov"
            title="Multiple Brand Sites"
          />
        </Link>

        <div className="col-span-full sm:col-span-1 row-span-1 sm:row-span-4 font-bold text-center flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-blur-sm mb-3 py-3">
          <div className="flex flex-wrap justify-center w-fit gap-y-1 space-x-1 mx-auto mb-1 text-gray-300 text-xs">
            <p className="border p-px px-2">NextJS</p>
            <p className="border p-px px-2">TypeScript</p>
            <p className="border p-px px-2">Tailwind</p>
          </div>
          <p className="text-xl sm:text-2xl text-white">Symph</p>
          <p className="text-xl sm:text-2xl text-white -mt-1">Front-end</p>
          <small className="text-gray-300">March - June</small>
        </div>
      </div>

      <div className="col-span-full text-center flex flex-col items-center justify-center py-3 bg-white bg-opacity-5 backdrop-blur-sm h-full">
        <div className="flex w-fit space-x-1 mx-auto mb-1 text-gray-300 text-xs">
          <p className="border p-px px-2">NextJS</p>
          <p className="border p-px px-2">TypeScript</p>
          <p className="border p-px px-2">Tailwind</p>
        </div>
        <p className="text-xl smtext-3xl text-white">
          Focus Global Inc | Front-end
        </p>
        <small className="text-gray-300">July - September 2023</small>
      </div>

      <Link
        passHref
        className="col-span-3"
        href="https://alifeinfocus.ph/products"
      >
        <Video
          className="relative group h-full"
          icon={<Store />}
          title="E-commerce"
          titleSize="sm:text-2xl"
          src="/videos/alif.mov"
        />
      </Link>

      <Link
        passHref
        className="col-span-2"
        href="https://rewards.focusglobalinc.com/"
      >
        <Video
          className="relative group h-full"
          icon={<Gem />}
          src="/videos/rewards.mov"
          title="Rewards"
          titleSize="sm:text-2xl"
        />
      </Link>

      <Link
        passHref
        className="col-span-full"
        href="https://www.seedtoplate.subzero-wolf.com.ph/"
      >
        <Video
          className="relative group h-full"
          icon={<Microscope />}
          title="Microsite"
          src="/videos/szwf-spc.mov"
        />
      </Link>

      <Link
        passHref
        className="col-span-2"
        href="https://subzero-wolf.com.ph/subzero-refrigeration/Classic_Refrigeration"
      >
        <Video
          className="relative group h-full"
          icon={<Eye />}
          title="Brand Site"
          titleSize="sm:text-2xl"
          src="/videos/szwf.mov"
        />
      </Link>

      <Link
        passHref
        className="col-span-3"
        href="https://products.miele-philippines.com/products/CoffeeMachines"
      >
        <Video
          className="relative group h-full"
          icon={<Shirt />}
          title="Products"
          src="/videos/miele.mov"
        />
      </Link>

      <div className="col-span-full" />

      <div className="col-span-1">
        <Image
          alt="Shaw logo"
          className="h-full object-contain"
          height={150}
          width={150}
          src="/projects/sb.png"
        />
      </div>
      <div className="col-span-4 font-bold text-center flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-blur-sm">
        <div className="flex w-fit space-x-1 mx-auto mb-1 text-gray-300 text-xs">
          <p className="border p-px px-2">.NET</p>
          <p className="border p-px px-2">SQL</p>
          <p className="border p-px px-2">React</p>
        </div>
        <p className="text-xl sm:text-3xl text-white">
          Shaw Group | Full-Stack
        </p>
        <small className="text-gray-300">October until Current</small>
      </div>
    </div>
  );
}

export default ExperienceSection;
