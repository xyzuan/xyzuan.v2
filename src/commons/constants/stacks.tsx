import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,

  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-emerald-500" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  Webpack: <SiWebpack size={iconSize} className="text-blue-500" />,
  "Styled Components": (
    <SiStyledcomponents size={iconSize} className="text-pink-500" />
  ),
  PWA: <SiPwa size={iconSize} className="text-amber-600" />,
  Nginx: <SiNginx size={iconSize} className="text-green-500" />,
  Jest: <SiJest size={iconSize} className="text-red-600" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-300" />,
  Express: <SiExpress size={iconSize} />,
  Jquery: <SiJquery size={iconSize} />,
};
