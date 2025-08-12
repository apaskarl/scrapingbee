export default function OurSolution() {
  return (
    <section id="ourSolution" className="bg-primary py-20 text-black">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-wide uppercase sm:text-sm">
              Our Solution
            </p>
            <p className="text-3xl font-bold sm:text-4xl">
              One simple API call. <br /> Thousands of exciting <br /> search
              insights.
            </p>
            <p className="text-base text-black/65 sm:text-lg">
              ScrapingBee saves you hours of setup, blocked requests, and broken
              code, from the first call to full-scale automation.
            </p>
          </div>

          <div className="flex flex-col gap-4 border border-[#BD9002] bg-[#FFD655] p-8 md:flex-row md:gap-0">
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold">Built-in Geo Control</p>

              <div className="space-y-5">
                <p className="text-black/75">
                  Forget VPNs or IP rotations. Scrape results as if you're
                  searching from any location, in any language. Perfect for
                  local SEO.
                </p>

                <SeeDocumentation />
              </div>
            </div>

            <img
              src="/images/our-sol-1.png"
              alt=""
              className="h-full max-h-52 object-contain"
            />
          </div>

          <div className="flex flex-col gap-4 border border-[#BD9002] bg-[#FFD655] p-8 md:flex-row md:gap-0">
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold">Instant Google Results</p>

              <div className="space-y-5">
                <p className="text-black/75">
                  Get real-time search, ads, news, and maps in one clean,
                  structured response. Catch the freshest data, exactly when you
                  need it.
                </p>

                <SeeDocumentation />
              </div>
            </div>

            <img
              src="/images/our-sol-2.png"
              alt=""
              className="h-full max-h-52 object-contain"
            />
          </div>

          <div className="flex flex-col gap-4 border border-[#BD9002] bg-[#FFD655] p-8 md:flex-row md:gap-0">
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold">Dev-Ready Integration</p>

              <div className="space-y-5">
                <p className="text-black/75">
                  No framework needed. Use Python, JS, PHP, curl, and more.
                  Start in minutes with clear docs and prebuilt code snippets.
                </p>

                <SeeDocumentation />
              </div>
            </div>

            <img
              src="/images/our-sol-3.png"
              alt=""
              className="h-full max-h-52 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const SeeDocumentation = () => {
  return (
    <a href="" className="flex items-center gap-2">
      <p className="w-max border-b border-black/75 font-bold text-black/75 duration-300 hover:text-black">
        See Documentation
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
          />
        </g>
      </svg>
    </a>
  );
};
