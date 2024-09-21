"use client";

import Marquee from "@/components/magicui/marquee";
import RecommendationCard, {
  RecommendationCardProps,
} from "./recommendation-card";
import Typography from "@/components/ui/typography";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getRandomHeight } from "@/commons/helpers";
import { CardFooter, CardHeader } from "@/components/ui/card";

const RECOMMENDATIONS_MOCK = [
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQGIIgE_bzD7Ag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711520279236?e=1732147200&v=beta&t=zm_iy1sGQCWxAeHbATXTllzBbj37dMFoBDw9a-4mRM0",
    name: "Muhammad Rizky Haksono",
    position:
      "Ex Full Stack Developer at BIGIO.ID | Software Engineer at Informatics Laboratory UMM",
    value:
      "I had collaborated with Jody Yuantoro on several mobile app and web development projects, where his deep knowledge of mobile development and problem-solving abilities were remarkable.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQFdzNS9XBw3bg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715648009565?e=1732147200&v=beta&t=UoBJ0Erix_tteKy7OH-EyztQXxG5LkjzH_qkmPSqwvU",
    name: "Rafidhiya Bagus Farizki",
    position:
      "Student and Laboratory Assistant at University Of Muhammadiyah Malang",
    value:
      "I know Jody as a friend and as a mentor of mine, he likes to learn something new and likes to teach others.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQFdwxo40l_4PA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718283308945?e=1732147200&v=beta&t=uQvNva8tt-OBws5v6-hI52s9Axs7Wt6XeYIja7IJa-4",
    name: "Agustinus Wesly Sitanggang",
    position: "Web Developer",
    value:
      "It's my pleasure to recommend Jody for his exceptional contributions as a Frontend Web Developer at PT. Len Industri.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQHs1CCTHH9RNA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702093810223?e=1732147200&v=beta&t=WynaSFlTI3LrxYAb9NqFbLVHO-0MLopNA5tXfLgQtos",
    name: "Rizki Rifani",
    position: "Web Developer | Undergraduate Informatics Engineering Student",
    value:
      "It is my pleasure to recommend Jody Yuantoro for his exceptional skills and dedication as a Frontend Developer.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQF-txfy8gyAfQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701427408340?e=1732147200&v=beta&t=4x-2cL9EBpuRmcgjIwGT2XVtAkPZSDS3VPB2kZXfAlc",
    name: "Muhammad Syauqi Amiq Amrullah",
    position: "Software Engineer | Looking for Collaboration",
    value: "Mantap",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQGP1jN4rXA4SQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666271397099?e=1732147200&v=beta&t=VC1fzhcOs4twp4U-2rEPXVV8yHHzJVfqi_i2D5JN7L4",
    name: "Mochammad Iqbal Arizki",
    position:
      "Frontend Developer | Laboratory Assistant at Informatics Laboratory UMM",
    value:
      "It's been amazing working together with Jody Yuantoro. His hands-on strategy to frontend, ui/ux and strong personality gained him the respect.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQGUqP7xeB70qw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703936442783?e=1732147200&v=beta&t=cZolbbETpRBIdv6kOD8JzQoUQdRA_yWaalGEaQ7gr0g",
    name: "Muhammad Irfan Fachrulrozy Hakim",
    position:
      "Bachelors Degree Informatics Engineering | Ex UI Designer & Digital Content at PT. PLN (Persero)",
    value: "His very competent in the field of Web Developer.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQGH-2QFeSG5pg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692852034304?e=1732147200&v=beta&t=dlrmAC4vepNFS41DpyOzYVLKCIr8OarUzONArEp52z8",
    name: "zamkara °",
    position: "Graphic Design | UI/UX Design",
    value:
      "I love your cool project Material You 3 with a bit of fluent-style blur seems interesting.",
  },
  {
    profile_pic:
      "https://media.licdn.com/dms/image/v2/D5603AQHmCryGHAEmBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718936338024?e=1732147200&v=beta&t=CcHk3qUaCLNz2VuPejoQyAzdOESpLTqZHFB_sIxfho0",
    name: "Muhammad Zulfiqor Lilhaq",
    position: "Software Engineer",
    value: "bisa di andalkan",
  },
];

const Recommendation = () => {
  const [shuffledRecommendations, setShuffledRecommendations] = useState<
    Array<RecommendationCardProps>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shuffleSkills = () => {
      const shuffledArray = [...RECOMMENDATIONS_MOCK].sort(
        () => Math.random() - 0.5
      );
      setShuffledRecommendations(shuffledArray);
      setIsLoading(false);
    };
    shuffleSkills();

    return () => {
      setShuffledRecommendations([]);
      setIsLoading(true);
    };
  }, []);

  const skeletons = Array.from({ length: 3 }).map((_, rowIndex) => (
    <div>
      <Marquee vertical reverse={rowIndex === 1} className="[--duration:160s]">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className={`min-w-72 bg-background border rounded-2xl`}
          >
            <CardHeader>
              <Skeleton
                className="w-full"
                style={{ height: getRandomHeight(80, 180) }}
              />
            </CardHeader>
            <CardFooter className="w-full">
              <Skeleton className="w-12 h-12 rounded-full" />
            </CardFooter>
          </Skeleton>
        ))}
      </Marquee>
    </div>
  ));

  const recommendations = Array.from({ length: 3 }, (_, index) => {
    const recommendationsRand = [...shuffledRecommendations].sort(
      () => Math.random() - 0.5
    );
    return (
      <div>
        <Marquee
          vertical
          pauseOnHover
          reverse={index === 1}
          className="[--duration:140s]"
        >
          {recommendationsRand.map((value, idx) => (
            <RecommendationCard
              key={idx}
              profile_pic={value.profile_pic}
              name={value.name}
              position={value.position}
              value={value.value}
            />
          ))}
        </Marquee>
      </div>
    );
  });

  return (
    <>
      <Typography.h3>Recommendations</Typography.h3>
      <div className="relative flex h-[500px] w-full flex-row md-row-span-1 items-center justify-center overflow-hidden mt-3">
        {isLoading ? skeletons : recommendations}
        <div className="pointer-events-none absolute xl:hidden inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute xl:hidden inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </>
  );
};

export default Recommendation;
