import { BiLogoJava } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiCircle,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGetx,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiLaravel,
  SiLinux,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import Flowbite from "../svgs/flowbite";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Languages
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />, // yellow-500
  TypeScript: <SiTypescript size={iconSize} color="#60A5FA" />, // blue-400
  Dart: <SiDart size={iconSize} color="#60A5FA" />, // blue-400
  Go: <SiGo size={iconSize} color="#60A5FA" />, // blue-400

  // Mobile Frameworks
  Android: <SiAndroid size={iconSize} color="#16A34A" />,
  Java: <FaJava size={iconSize} color="#DC2626" />,
  Flutter: <SiFlutter size={iconSize} color="#60A5FA" />,
  GetX: <SiGetx size={iconSize} color="#A855F7" />,

  // Frontend Frameworks
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} color="#0EA5E9" />, // sky-500
  Vite: <SiVite size={iconSize} color="#A855F7" />, // purple-500
  Webpack: <SiWebpack size={iconSize} color="#3B82F6" />, // blue-500

  // Frontend Library
  "shadcn/ui": <SiShadcnui size={iconSize} />,
  "Material UI": <SiMui size={iconSize} color="#38BDF8" />, // sky-400
  TailwindCSS: <SiTailwindcss size={iconSize} color="#67E8F9" />, // cyan-300
  Redux: <SiRedux size={iconSize} color="#A855F7" />, // purple-500
  CSS: <SiCss3 size={iconSize} color="#93C5FD" />, // blue-300
  Flowbite: <Flowbite iconSize={iconSize} />,

  // Backend
  Express: <SiExpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} color="#DC2626" />, // red-600
  Prisma: <SiPrisma size={iconSize} color="#10B981" />, // emerald-500
  Firebase: <SiFirebase size={iconSize} color="#F59E0B" />, // yellow-500
  Supabase: <SiSupabase size={iconSize} color="#22C55E" />, // green-500
  Jest: <SiJest size={iconSize} color="#DC2626" />, // red-600
  Gorm: <SiGo size={iconSize} color="#60A5FA" />, // blue-400
  Redis: <SiRedis size={iconSize} color="#DC2626" />, // red-600

  // Others
  "Node.js": <SiNodedotjs size={iconSize} color="#16A34A" />, // green-600
  Nginx: <SiNginx size={iconSize} color="#22C55E" />, // green-500
  Docker: <SiDocker size={iconSize} color="#93C5FD" />, // blue-300
  Jenkins: <SiJenkins size={iconSize} />,
  Gemini: <SiGooglegemini size={iconSize} />,
  AOSP: <SiCircle size={iconSize} />,
  Linux: <SiLinux size={iconSize} />,
  Figma: <SiFigma size={iconSize} />,
};
