import BlurFade from "@/components/magicui/blur-fade";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { SiGmail } from "react-icons/si";

const ContactsPage = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <BackButton />
        <Typography.h3>Contacts</Typography.h3>
        <Typography.p>
          Feel free to get in touch and let's have a discussion about how we can
          work together.
        </Typography.p>

        <Typography.h4 className="mt-6 mb-3">
          Find me on social media
        </Typography.h4>
        <div className="gap-3 grid grid-cols-2 md:grid-cols-4">
          <Button variant="outline" className="flex-inline gap-2">
            <span>
              <SiGmail />
            </span>
            Email
          </Button>
          <Button variant="outline" className="flex-inline gap-2">
            <span>
              <LinkedInLogoIcon />
            </span>
            Linkedin
          </Button>
          <Button variant="outline" className="flex-inline gap-2">
            <span>
              <GitHubLogoIcon />
            </span>
            Github
          </Button>
          <Button variant="outline" className="flex-inline gap-2">
            <span>
              <InstagramLogoIcon />
            </span>
            Instagram
          </Button>
        </div>
      </div>
    </BlurFade>
  );
};

export default ContactsPage;
