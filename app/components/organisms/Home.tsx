"use client";

import Image from "next/image";
import { raleway } from "@/app/fonts";
import ExperienceSection from "../molecules/ExperienceSection";
import SkillsContainer from "../molecules/SkillsContainer";
import SkillsSection from "../molecules/SkillsSection";
import { RefObject, useRef } from "react";

import AboutMeSection from "../molecules/AboutMeSection";

function Home() {
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);

  function scrollToRef(ref: RefObject<HTMLDivElement>) {
    if (ref?.current) {
      const el = ref.current.getBoundingClientRect().top + window.scrollY - 300;

      window.scrollTo({ top: el, behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col min-h-screen max-w-screen-md w-full mx-auto relative px-5">
      <div className="flex fixed left-1/2 -translate-x-1/2 pt-5 flex-col mx-auto w-full bg-black/80 z-50 backdrop-blur-sm">
        <p className="text-[75px] text-white font-bold text-center">
          Front-end
        </p>
        <p className="text-[75px] text-white font-bold -mt-14 text-center">
          developer
        </p>

        <div
          className={`${raleway.className} flex justify-center items-center font-light space-x-10 mb-4`}
        >
          <button
            className="text-white text-center"
            onClick={() => scrollToRef(skillsSectionRef)}
          >
            Skills
          </button>
          <button
            className="text-white text-center"
            onClick={() => scrollToRef(experienceSectionRef)}
          >
            Experience
          </button>
          <p className="text-white text-center">About me</p>
        </div>

        <p className="text-red-600 text-sm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-2 p-2 border-red-600 bg-white/80 animate-pulse">
          IN PROGRESS
        </p>
      </div>

      <div ref={skillsSectionRef} />
      <SkillsContainer className="mt-80" title="skills">
        <SkillsSection
          content="Developed over six (6) web applications over the past 2 years"
          header="Front-end"
        >
          <Image
            alt="Next icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/nextjs-icon.svg"
          />
          <Image
            alt="React icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/react.svg"
          />
          <Image
            alt="Typescript icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/typescript-icon.svg"
          />
          <Image
            alt="Tailwind icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg min-h-[75px]"
            height={75}
            width={75}
            src="/icons/tailwindcss-icon.svg"
          />
        </SkillsSection>

        <SkillsSection
          content="Currently maintaining a set of internal systems"
          header="Back-end"
        >
          <Image
            alt="Net icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/dotnet.svg"
          />
          <Image
            alt="MySQL icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg min-h-[75px]"
            height={75}
            width={75}
            src="/icons/mysql.svg"
          />
        </SkillsSection>

        <SkillsSection
          content="Proficiency in version control and experience in creating packages"
          header="Dev Tools"
        >
          <Image
            alt="Git icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/git-icon.svg"
          />
          <Image
            alt="NPM icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/npm-icon.svg"
          />
          <Image
            alt="Jira icon"
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-3 drop-shadow-lg"
            height={75}
            width={75}
            src="/icons/jira.svg"
          />
        </SkillsSection>
      </SkillsContainer>

      <SkillsContainer
        className="mt-20 sm:mt-40"
        title="experience"
        ref={experienceSectionRef}
      >
        <ExperienceSection />
      </SkillsContainer>

      <SkillsContainer
        className="mt-20 sm:mt-40"
        title="about me"
        ref={experienceSectionRef}
      >
        <AboutMeSection />
      </SkillsContainer>

      <div className="mb-10" />
    </div>
  );
}

export default Home;
