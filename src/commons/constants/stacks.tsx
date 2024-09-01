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
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />, // yellow-500
  TypeScript: <SiTypescript size={iconSize} color="#60A5FA" />, // blue-400
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} color="#0EA5E9" />, // sky-500
  TailwindCSS: <SiTailwindcss size={iconSize} color="#67E8F9" />, // cyan-300
  GraphQL: <SiGraphql size={iconSize} color="#EC4899" />, // pink-600
  "Material UI": <SiMui size={iconSize} color="#38BDF8" />, // sky-400
  Vite: <SiVite size={iconSize} color="#A855F7" />, // purple-500
  Prisma: <SiPrisma size={iconSize} color="#10B981" />, // emerald-500
  Firebase: <SiFirebase size={iconSize} color="#F59E0B" />, // yellow-500
  Redux: <SiRedux size={iconSize} color="#A855F7" />, // purple-500
  "Node.js": <SiNodedotjs size={iconSize} color="#16A34A" />, // green-600
  Webpack: <SiWebpack size={iconSize} color="#3B82F6" />, // blue-500
  PWA: <SiPwa size={iconSize} color="#D97706" />, // amber-600
  Nginx: <SiNginx size={iconSize} color="#22C55E" />, // green-500
  Jest: <SiJest size={iconSize} color="#DC2626" />, // red-600
  CSS: <SiCss3 size={iconSize} color="#93C5FD" />, // blue-300
  Express: <SiExpress size={iconSize} />,
  Jquery: <SiJquery size={iconSize} />,
};
