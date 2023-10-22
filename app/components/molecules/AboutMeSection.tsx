"use client";

import { useState } from "react";
import { AtSign, Code2, Github, GraduationCap, Linkedin } from "lucide-react";

function AboutMeSection() {
  const [activeTab, setActiveTab] = useState(1);

  const activeTabStyle = (input: number) => activeTab == input && "flex-1";

  return (
    <div className="flex space-x-2 w-full text-center">
      <div
        className={`${activeTabStyle(1)} bg-white transition-all duration-500`}
      >
        <button className="w-full px-5" onClick={() => setActiveTab(1)}>
          <Code2 />
        </button>
      </div>
      <div
        className={`${activeTabStyle(2)} bg-white  transition-all duration-500`}
      >
        <button className="w-full px-5" onClick={() => setActiveTab(2)}>
          <GraduationCap />
        </button>
      </div>
      <div
        className={`${activeTabStyle(3)} bg-white transition-all duration-500`}
      >
        <button className="w-full px-5" onClick={() => setActiveTab(3)}>
          <Linkedin />
        </button>
      </div>
      <div
        className={`${activeTabStyle(4)} bg-white transition-all duration-500`}
      >
        <button className="w-full px-5" onClick={() => setActiveTab(4)}>
          <Github />
        </button>
      </div>
      <div
        className={`${activeTabStyle(5)} bg-white transition-all duration-500`}
      >
        <button className="w-full px-5" onClick={() => setActiveTab(5)}>
          <AtSign />
        </button>
      </div>
    </div>
  );
}

export default AboutMeSection;
