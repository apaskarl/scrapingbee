export default function TheProblem() {
  return (
    <section id="theProblem" className="pt-10 pb-20 text-black">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 md:flex-row">
        <img
          src="/images/the-problem-img.png"
          alt=""
          className="w-full max-w-md"
        />

        <div className="space-y-8">
          <div className="space-y-8">
            <p className="text-xs font-bold tracking-wide uppercase sm:text-sm">
              The Problem
            </p>
            <p className="text-3xl font-bold sm:text-4xl">
              Scraping Google shouldn't feel like hacking.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base text-black/65 sm:text-lg">
              Web scraping Google is a pain:
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
                  />
                </svg>
                <p className="text-base font-medium sm:text-lg">
                  You're blocked by anti-bot systems
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
                  />
                </svg>
                <p className="text-base font-medium sm:text-lg">
                  Rotating proxies eat up time
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
                  />
                </svg>
                <p className="text-base font-medium sm:text-lg">
                  Managing headless browsers slows your team
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
                  />
                </svg>
                <p className="text-base font-medium sm:text-lg">
                  Search layouts keep changing
                </p>
              </div>
            </div>

            <p className="text-base text-black/65 sm:text-lg">
              Whether you're building a product or running SEO at scale, you
              should't need a DevOps team just to get reliable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
