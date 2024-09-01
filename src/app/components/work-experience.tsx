import Typography from "@/components/ui/typography";
import WorkCard from "@/app/components/work-card";

const WorkExperience = () => {
  return (
    <div className="flex flex-col h-fit gap-6">
      <Typography.h3>Work & Experience</Typography.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkCard
          title="Software Engineer"
          instance="PT Len Industri Persero"
          location="Bandung"
          date="Jan 2024 - Jul 2024"
        />
        <WorkCard
          title="Software Engineer"
          instance="PT Len Industri Persero"
          location="Bandung"
          date="Jan 2024 - Jul 2024"
        />
        <WorkCard
          title="Software Engineer"
          instance="PT Len Industri Persero"
          location="Bandung"
          date="Jan 2024 - Jul 2024"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
