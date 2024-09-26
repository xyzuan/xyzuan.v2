import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkExperienceEducation from "./components/work-experience-education";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import Activity from "./components/activity";
import Typography from "@/components/ui/typography";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: "My activity dashboard as software engineer",
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboards`,
  },
};

const ResumePage = () => {
  return (
    <BlurFade>
      <div className="mb-6">
        <Typography.H3>Resume</Typography.H3>
        <Typography.P>
          Several projects that I have worked on, both private and open source.
        </Typography.P>
      </div>
      <Tabs defaultValue="journey">
        <TabsList>
          <TabsTrigger value="journey">Career & Education</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="journey">
          <WorkExperienceEducation />
        </TabsContent>
        <TabsContent value="activity">
          <Activity />
        </TabsContent>
      </Tabs>
    </BlurFade>
  );
};

export default ResumePage;
