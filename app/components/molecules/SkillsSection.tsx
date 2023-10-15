import { raleway } from "@/app/fonts";
import { ReactNode } from "react";

type SkillsSectionType = {
  children: ReactNode;
  content: string;
  header: string;
};

function SkillsSection(props: SkillsSectionType) {
  const { children, content, header } = props;

  return (
    <div className="flex flex-col z-10 mt-2">
      <p className="text-xl text-gray-300 font-bold text-left mb-2">{header}</p>
      <div className="flex space-x-3 items-center">{children}</div>
      <p className={`${raleway.className} text-white mt-2 text-md`}>
        {content}
      </p>
    </div>
  );
}

export default SkillsSection;
