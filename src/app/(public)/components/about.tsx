import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col h-fit gap-6">
      <div className="flex justify-between items-end">
        <Typography.h3>About</Typography.h3>
        <Link href="https://drive.google.com/file/d/1HVLyI_LinIQ6nZtk2BwQR9OzPxJwj82m/view?usp=drivesdk">
          <Button variant="outline">
            <AnimatedShinyText className="inline-flex items-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Download My Resume</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Button>
        </Link>
      </div>
      <Typography.p>
        As a Software Engineer with expertise in web and mobile development, I
        am creating innovative and user-friendly solutions that solve real-world
        problems. I am currently pursuing my S.Kom degree in Informatics
        Engineering at the University of Muhammadiyah Malang, where I have honed
        my skills in Web Development, Mobile Development, and UI/UX design.
      </Typography.p>
    </div>
  );
};

export default About;
