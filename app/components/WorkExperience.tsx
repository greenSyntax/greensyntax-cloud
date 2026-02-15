type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
};

export default function WorkExperience() {
  const experiences: Experience[] = [
    {
      company: "Krutrim",
      role: "Software Engineer 3",
      location: "Bangalore, India",
      period: "December 2021 – Present",
      logo: "/krutrim_logo.jpeg",
    },
    {
      company: "OYO",
      role: "Software Engineer 2",
      location: "Gurgaon, India",
      period: "January 2021 – November 2021",
      logo: "/oyo.jpg",
    },
    {
      company: "Skuad",
      role: "Software Engineer 1",
      location: "Gurgaon, India",
      period: "August 2018 – December2020",
      logo: "/squad.jpeg",
    },
    {
      company: "InnovationM",
      role: "Software Engineer 1",
      location: "Noida, India",
      period: "August 2015 – June 2018",
      logo: "/innovationm.jpg",
    },
  ];

  return (
    <section className="w-full pb-16 px-6">
      <h2 className="text-[18px] font-semibold mb-6">
        Work Experience
      </h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceRow key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <div className="flex items-start justify-between gap-6">
      {/* Left */}
      <div className="flex items-start gap-4">
        <img
          src={exp.logo}
          alt={exp.company}
          className="w-10 h-10 rounded-md object-contain"
        />

        <div>
          <p className="text-[15px] font-medium text-black">
            {exp.role}
          </p>
          <p className="text-[14px] text-gray-500">
            {exp.location}
          </p>
        </div>
      </div>

      {/* Right */}
      <p className="text-[14px] text-gray-500 whitespace-nowrap">
        {exp.period}
      </p>
    </div>
  );
}