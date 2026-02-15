export default function HeroIntro() {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-12">
        <div
          className="
            flex flex-col-reverse
            items-center text-center
            gap-8
            lg:flex-row lg:items-center lg:justify-between lg:text-left
          "
        >
          {/* Left Text */}
          <div>
            <h1
              className="
                font-bold
                text-[32px] lg:text-[42px]
                text-gray-900
              "
            >
              Hi, I&apos;m Abhishek Ravi
            </h1>

            <p className="mt-3 text-[15px] text-gray-500 max-w-md mx-auto lg:mx-0">
              Building systems with memory, reasoning, and opinions.
              Ships clean code, breaks abstractions, and quietly obsesses over details – GPT wrote this about me 😁
            </p>
          </div>

          {/* Right Image */}
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="
              w-28 h-28
              sm:w-32 sm:h-32
              lg:w-40 lg:h-40
              rounded-full
              object-cover
              shrink-0
            "
          />
        </div>
      </div>
    </section>
  );
}