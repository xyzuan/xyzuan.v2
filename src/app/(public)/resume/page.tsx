import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkExperienceEducation from "./components/work-experience-education";
import { Metadata } from "next";
import { METADATA } from "@/commons/constants/metadata";
import Activity from "./components/activity";
import Typography from "@/components/ui/typography";

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle}`,
  description: "My activity dashboard as software engineer",
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboards`,
  },
};

const ResumePage = () => {
  return (
    <>
      <div className="mb-6">
        <Typography.h3>Resume</Typography.h3>
        <Typography.p>
          Several projects that I have worked on, both private and open source.
        </Typography.p>
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
    </>
  );
};

export default ResumePage;
