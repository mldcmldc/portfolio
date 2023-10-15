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
      className={`${classNames(
        className,
        "flex flex-col space-y-5 mt-60 relative"
      )}`}
    >
      <div className="text-[120px] h-full w-full text-white opacity-30 sticky top-1/3 -translate-y-8">
        <p className={`${raleway.className} font-extralight tracking-widest`}>
          {title}
        </p>
      </div>

      {children}
    </div>
  );
}

export default SkillsContainer;
