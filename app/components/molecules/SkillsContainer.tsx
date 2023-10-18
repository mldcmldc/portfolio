import { raleway } from "@/app/fonts";
import classNames from "classnames";
import { ReactNode } from "react";

type SkillsContainerType = {
  className?: string;
  children: ReactNode;
  title: string;
};

function SkillsContainer(props: SkillsContainerType) {
  const { className, children, title } = props;

  return (
    <div
      className={`${classNames(className, "flex flex-col space-y-5 relative")}`}
    >
      <div className="text-4xl sm:text-[100px] h-full w-full text-white opacity-30 sticky top-1/3 -translate-y-8">
        <p
          className={`${raleway.className} font-extralight tracking-widest animate-pulse`}
        >
          <span className="text-gray-500">&lt;</span>
          {title}
          <span className="text-gray-500">/&gt;</span>
        </p>
      </div>
      {children}
    </div>
  );
}

export default SkillsContainer;
