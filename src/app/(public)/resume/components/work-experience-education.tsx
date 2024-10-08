import Typography from "@/components/ui/typography";
import WorkCard from "@/app/(public)/resume/components/work-card";
import { getAllWorks } from "@/services/works";
import EducationCard from "../../components/education-card";
import BlurFade from "@/components/magicui/blur-fade";

const EDUCATION_MOCK = [
  {
    logo: "https://www.umm.ac.id/files/image/Logo_umm.png",
    institution: "University of Muhammadiyah Malang",
    degree: "Bachelor's degree",
    major: "Informatics Engineering, S.Kom",
    periodic: "2021 - Current",
    location: "Malang, East Java, Indonesia",
  },
];

const WorkExperienceEducation = async () => {
  const works = await getAllWorks();

  return (
    <BlurFade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span-1">
          <Typography.H3>Work & Experience</Typography.H3>
          <div className="grid grid-cols-1 mt-6 gap-6">
            {works?.data?.map((value, idx) => {
              return (
                <WorkCard
                  key={idx}
                  logo={value.logo}
                  title={value.jobTitle}
                  instance={value.instance}
                  location={value.address}
                  responsibilities={value.responsibilities}
                  date={value.date}
                />
              );
            })}
          </div>
        </div>
        <div className="col-span-1">
          <Typography.H3>Education</Typography.H3>
          <div className="grid grid-cols-1 mt-6 gap-6">
            {EDUCATION_MOCK.map((value, idx) => {
              return (
                <EducationCard
                  key={idx}
                  logo={value.logo}
                  institution={value.institution}
                  degree={value.degree}
                  major={value.major}
                  periodic={value.periodic}
                  location={value.location}
                />
              );
            })}
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default WorkExperienceEducation;
