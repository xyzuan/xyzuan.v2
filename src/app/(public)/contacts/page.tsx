import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import { BentoGrid } from "@/components/magicui/bento-grid";
import Typography from "@/components/ui/typography";
import contacts from "@/commons/constants/contacts";
import ContactCard from "./components/contact-card";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: `Contacs ${METADATA.exTitle}`,
  description: "Reach Jody Yuantoro contacts",
  keywords:
    "fronend developer, software engineer, react js, javascript, typescript, contact",
  alternates: {
    canonical: `${process.env.DOMAIN}/contacts`,
  },
};

const ContactsPage = () => {
  return (
    <BlurFade className="mb-6">
      <Typography.h3>Contacts</Typography.h3>
      <Typography.p>
        Feel free to get in touch and let&apos;s have a discussion about how we
        can work together.
      </Typography.p>

      <Typography.h4 className="mt-6 mb-3">
        Find me on social media
      </Typography.h4>

      <BentoGrid className="mt-6">
        {contacts.map((feature, idx) => (
          <ContactCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </BlurFade>
  );
};

export default ContactsPage;
