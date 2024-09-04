import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const contacts = [
  {
    Icon: SiGmail,
    name: "Email",
    description: "jodyyuan@xyzuan.my.id",
    href: "mailto:jodyyuan@xyzuan.my.id",
    cta: "Email me",
    className: "col-span-3 lg:col-span-1",
    background: <></>,
  },
  {
    Icon: SiLinkedin,
    name: "Linkedin",
    description: "Jody Yuantoro",
    href: "https://www.linkedin.com/in/xyzuan/",
    cta: "Connect me in Linkedin",
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    Icon: SiGithub,
    name: "Github",
    description: "@xyzuan",
    href: "https://github.com/xyzuan",
    cta: "Follow & Discover my Recently Projects",
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    Icon: SiInstagram,
    name: "Instagram",
    description: "@jodyyuan",
    className: "col-span-3 lg:col-span-1",
    href: "https://www.instagram.com/jodyyuan",
    cta: "Follow & Discover my Personal Feed",
    background: <></>,
  },
];

export default contacts;
