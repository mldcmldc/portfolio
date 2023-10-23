"use client";

import { useState } from "react";
import { AtSign, Code2, GraduationCap, Linkedin } from "lucide-react";
import Link from "next/link";

function AboutMeSection() {
  const [activeTab, setActiveTab] = useState(1);

  const activeTabStyle = (input: number) => activeTab == input && "flex-1";
  const shouldDisplayLink = (input: number) =>
    activeTab == input ? "visible opacity-100" : "invisible opacity-0";
  const opacity = (input: number) =>
    activeTab == input ? "bg-opacity-10" : "bg-opacity-5";

  return (
    <div className="flex space-x-2 w-full text-center">
      <div
        className={`${activeTabStyle(1)} ${opacity(
          1
        )} bg-white backdrop-blur-sm transition-width duration-500`}
      >
        <button className="px-5 h-60" onClick={() => setActiveTab(1)}>
          <Code2 className="text-white h-3 w-3 sm:h-12 sm:w-12 mx-auto" />
          <Link
            className={`${shouldDisplayLink(
              1
            )} trainsition-all duration-500 text-white text-xs mt-3 overflow-hidden truncate`}
            href="https://github.com/mldcmldc/50-day-challenge"
          >
            Check out my Code
          </Link>
        </button>
      </div>
      <div
        className={`${activeTabStyle(2)} ${opacity(
          2
        )} bg-white backdrop-blur-sm transition-all duration-500`}
      >
        <button className="px-5 h-60" onClick={() => setActiveTab(2)}>
          <GraduationCap className="text-white h-3 w-3 sm:h-12 sm:w-12 mx-auto" />
          <div
            className={`${shouldDisplayLink(
              2
            )} trainsition-all duration-500 text-white text-xs mt-3 overflow-hidden truncate`}
          >
            Computer Science Degree
          </div>
        </button>
      </div>
      <div
        className={`${activeTabStyle(3)} ${opacity(
          3
        )} bg-white backdrop-blur-sm transition-all duration-500`}
      >
        <button className="px-5 h-60" onClick={() => setActiveTab(3)}>
          <Linkedin className="text-white h-3 w-3 sm:h-12 sm:w-12 mx-auto" />
          <Link
            className={`${shouldDisplayLink(
              3
            )} trainsition-all duration-500 text-white text-xs mt-3 overflow-hidden truncate`}
            href="https://www.linkedin.com/in/marc-lester-dela-cruz-63970823b/"
          >
            View Portfolio
          </Link>
        </button>
      </div>
      <div
        className={`${activeTabStyle(4)} ${opacity(
          4
        )} bg-white backdrop-blur-sm transition-all duration-500`}
      >
        <button className="px-5 h-60" onClick={() => setActiveTab(4)}>
          <AtSign className="text-white h-3 w-3 sm:h-12 sm:w-12 mx-auto" />
          <a
            className={`${shouldDisplayLink(
              4
            )} trainsition-all duration-500 text-white text-xs mt-3 overflow-hidden truncate`}
            href="mailto:lesterdelacruz.dev@gmail.com"
          >
            Send an Email
          </a>
        </button>
      </div>
    </div>
  );
}

export default AboutMeSection;
