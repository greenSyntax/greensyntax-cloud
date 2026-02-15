export default function Skills() {
  const skills = [
    "iOS Development",
    "Swift",
    "Python",
    "Flask",
    "Pandas",
    "Nodejs",
    "Rest Skills on ChatGPT"
  ];

  return (
    <section className="w-full pb-16 px-6">
      <h2 className="text-[18px] font-semibold mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3 py-1.5
              text-[13px]
              text-black
              bg-white
              border border-gray-400
              rounded-full
              whitespace-nowrap
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}