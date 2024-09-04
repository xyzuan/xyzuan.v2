import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import BlurFade from "@/components/magicui/blur-fade";
import Typography from "@/components/ui/typography";
import contacts from "@/commons/constants/contacts";

const ContactsPage = () => {
  return (
    <BlurFade delay={0.25 * 0.05} inView>
      <div className="mb-6">
        <Typography.h3>Contacts</Typography.h3>
        <Typography.p>
          Feel free to get in touch and let&apos;s have a discussion about how
          we can work together.
        </Typography.p>

        <Typography.h4 className="mt-6 mb-3">
          Find me on social media
        </Typography.h4>
        <BentoGrid className="mt-6">
          {contacts.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </BlurFade>
  );
};

export default ContactsPage;
