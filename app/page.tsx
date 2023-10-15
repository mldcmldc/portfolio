"use client";

import classNames from "classnames";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { raleway } from "./fonts";
import SkillsSection from "./components/molecules/SkillsSection";
import SkillsContainer from "./components/molecules/SkillsContainer";
import ExperienceSection from "./components/molecules/ExperienceSection";

export default function Home() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const endOutput = "frontend developer";

  function getRandomIndexFromAlphabet() {
    const alphabetLength = 26;

    return Math.floor(Math.random() * alphabetLength);
  }

  function generateRandomText(input: string, start: number) {
    const partial = endOutput.substring(0, start);

    const jumbledLetters = Array.from(input.substring(start)).map(
      (_) => letters.split("")[getRandomIndexFromAlphabet()]
    );

    const result = partial + jumbledLetters.join("");

    setTitle(result);
  }

  function getInitialRandomText() {
    const jumbledLetters = Array.from(Array(endOutput.length)).map(
      (_) => letters.split("")[getRandomIndexFromAlphabet()]
    );

    return jumbledLetters.join("");
  }

  const [title, setTitle] = useState("");

  useEffect(() => {
    let index = 0;
    let result = getInitialRandomText();

    setTimeout(() => {
      const interval = setInterval(() => {
        generateRandomText(result, index);

        index += 1;

        if (index == endOutput.length + 1) clearInterval(interval);
      }, 150);
    }, 500);
  }, []);

  const hasTabActive =
    title == endOutput || title == "Skills" || title == "About me";

  const titleContent = title ? (
    <p
      className={classNames(
        "z-10 text-5xl text-center transition-all duration-1000",
        {
          "text-7xl": hasTabActive,
        }
      )}
    >
      {title}
    </p>
  ) : (
    <div className="text-5xl text-center flex items-center">
      initializing
      <Loader2 className="animate-spin ml-5 h-10 w-10" />
    </div>
  );

  return (
    <main>
      <div className="flex flex-col min-h-screen max-w-screen-md w-full mx-auto relative">
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
            <p className="text-white text-center">Skills</p>
            <p className="text-white text-center">Experience</p>
            <p className="text-white text-center">About me</p>
          </div>
        </div>

        <SkillsContainer title="skills">
          <SkillsSection
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero repellat ipsa officiis?"
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
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero repellat ipsa officiis?"
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
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero repellat ipsa officiis?"
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

        <SkillsContainer className="!mt-32" title="experience">
          <ExperienceSection />
        </SkillsContainer>

        <div className="mb-72" />
      </div>
    </main>
  );
}
