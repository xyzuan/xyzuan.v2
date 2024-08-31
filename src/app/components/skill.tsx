import { Badge } from "@/components/ui/badge";
import SkillBadge from "@/app/components/skill-badge";
import Typography from "@/components/ui/typography";

const Skill = () => {
  return (
    <div className="flex flex-col h-fit gap-6">
      <Typography.h3>Skill</Typography.h3>
      <div>
        <SkillBadge>JavaScript</SkillBadge>
        <SkillBadge>TypeScript</SkillBadge>
        <SkillBadge>Module Federation</SkillBadge>
        <SkillBadge>Webpack</SkillBadge>
        <SkillBadge>React</SkillBadge>
        <SkillBadge>NextJS</SkillBadge>
        <SkillBadge>Flutter</SkillBadge>
        <SkillBadge>Dart</SkillBadge>
        <SkillBadge>SQL</SkillBadge>
        <SkillBadge>TailwindCSS</SkillBadge>
        <SkillBadge>MaterialUI</SkillBadge>
        <SkillBadge>shadcn/ui</SkillBadge>
        <SkillBadge>Redux</SkillBadge>
        <SkillBadge>ExpressJS</SkillBadge>
        <SkillBadge>PrismaORM</SkillBadge>
        <SkillBadge>Docker</SkillBadge>
        <SkillBadge>Jenkins</SkillBadge>
        <SkillBadge>Proxmox</SkillBadge>
        <SkillBadge>Git</SkillBadge>
      </div>
    </div>
  );
};

export default Skill;
