import { SiGithub, SiInstagram, SiLinkedin, SiTelegram } from "react-icons/si";

const contacts = [
  {
    icon: <SiGithub size={42} />,
    title: "Explore the code",
    description: "Explore the source code for all my projects on GitHub.",
    href: "https://github.com/xyzuan",
    cta: "Go to Github",
    className: "col-span-3 lg:col-span-1",
  },

  {
    icon: <SiLinkedin size={42} />,
    title: "Let`s connect",
    description:
      "Connect for collaboration or explore my professional experience.",
    href: "https://www.linkedin.com/in/xyzuan/",
    cta: "Go to Linkedin",
    className: "col-span-3 lg:col-span-2",
  },
  {
    icon: <SiTelegram size={42} />,
    title: "Chat with the community",
    description:
      "Join over 1,000+ others developers on xyz-playground Community.",
    href: "https://t.me/xyz_playground",
    cta: "Go to Telegram",
    className: "col-span-3 lg:col-span-2",
  },
  {
    icon: <SiInstagram size={42} />,
    title: "Instagram",
    description: "Follow my Instagram Account",
    className: "col-span-3 lg:col-span-1",
    href: "https://www.instagram.com/jodyyuan",
    cta: "Go to Instagram",
  },
];

export default contacts;
