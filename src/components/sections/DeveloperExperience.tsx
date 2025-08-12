export default function DeveloperExperience() {
  return (
    <section id="developerExperience" className="bg-primary py-20 text-black">
      <div className="container mx-auto max-w-7xl space-y-16 px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-end">
          <div className="flex-shrink-0 space-y-3 md:w-1/2">
            <p className="text-xs font-bold tracking-wide uppercase sm:text-sm">
              Developer Experience
            </p>
            <p className="text-3xl font-bold sm:text-4xl">
              Top-rated support & <br /> documentation
            </p>
          </div>

          <p className="text-black/65">
            Our team is here to guide you when you need the extra assistance.
            And we're constantly working on new features to make your life
            easier.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="flex flex-col justify-between border border-[#BD9002] bg-[#FFD655] px-8 pt-8 md:col-span-2">
            <div className="space-y-2">
              <p className="text-2xl font-bold">Fantastic documentation</p>
              <p className="text-black/75">
                Take a look at our{" "}
                <span className="border-b font-bold text-black">
                  documentation
                </span>{" "}
                and get started in minutes!
              </p>
            </div>

            <img src="/images/magnifying-glass2.png" alt="" />
          </div>

          <div className="relative flex flex-col gap-4 border border-[#BD9002] bg-[#FFD655] p-8 md:col-span-3 md:flex-row md:items-end">
            <div className="space-y-2 md:w-[45%]">
              <p className="text-2xl font-bold">Code samples</p>
              <p className="text-black/75">
                Whatever the programming language youenjoy, we have written code
                samples ready.
              </p>
            </div>

            <img
              src="/images/code-samples.png"
              alt=""
              className="right-0 bottom-0 md:absolute"
            />
          </div>

          <div className="flex flex-col justify-between gap-4 border border-[#BD9002] bg-[#FFD655] p-8 md:col-span-3">
            <img src="/images/knowledge-base.png" alt="" />
            <div className="space-y-2">
              <p className="text-2xl font-bold">Knowledge base</p>
              <p className="text-black/75">
                Our extensive knowledge base covers the most frequent use cases
                with code samples.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 border border-[#BD9002] bg-[#FFD655] p-8 md:col-span-2">
            <img src="/images/exceptional-supports.png" alt="" />
            <div className="space-y-2">
              <p className="text-2xl font-bold">Exceptional supports</p>
              <p className="text-black/75">
                We will quickly answer all your questions by live chat or
                emails, even the hard ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
