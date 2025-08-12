export default function Workflow() {
  return (
    <section id="workflow" className="py-20 text-black">
      <div className="container mx-auto flex max-w-7xl flex-col items-center space-y-16 px-4">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs font-bold tracking-wide uppercase sm:text-sm">
            Workflow
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold sm:text-4xl">
              With Vs. Without ScrapingBee
            </h1>
            <h2 className="text-xl sm:text-2xl">
              Here's what your workflow looks like with or without ScrapingBee
            </h2>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-end text-base sm:text-lg md:grid-cols-5">
          <div className="hidden py-6 md:block">
            <div className="divide-y divide-black/10">
              <div className="flex items-center gap-3 px-6 py-3">
                <img src="/images/wrench.png" alt="" className="h-6 w-6" />
                <p className="font-bold">Setup</p>
              </div>
              <div className="flex items-center gap-3 px-6 py-3">
                <img src="/images/data-file.png" alt="" className="h-6 w-6" />
                <p className="font-bold">Data format</p>
              </div>
              <div className="flex items-center gap-3 px-6 py-3">
                <img src="/images/bot-off.png" alt="" className="h-6 w-6" />
                <p className="font-bold">Anti-bot handling</p>
              </div>
              <div className="flex items-center gap-3 px-6 py-3">
                <img
                  src="/images/globe-location.png"
                  alt=""
                  className="h-6 w-6"
                />
                <p className="font-bold">Geo-targeting</p>
              </div>
              <div className="flex items-center gap-3 px-6 py-3">
                <img src="/images/speed.png" alt="" className="h-6 w-6" />
                <p className="font-bold">Speed to results</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 py-6">
            <div className="flex items-center gap-4 px-6 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="text-red-500"
              >
                <path
                  fill="currentColor"
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
                />
              </svg>
              <p className="font-bold">Without ScrapingBee</p>
            </div>

            <div className="divide-y divide-black/10">
              <p className="px-6 py-3">
                Proxy pool, browser infra, retry logic
              </p>
              <p className="px-6 py-3">Raw HTML, constant cleaning</p>
              <p className="px-6 py-3">Manual troubleshooting</p>
              <p className="px-6 py-3">Manual proxies & VPNs</p>
              <p className="px-6 py-3">Hours or days</p>
            </div>
          </div>

          <div className="relative col-span-2">
            <div className="absolute inset-0 -translate-x-2 translate-y-2 transform rounded-lg bg-black"></div>
            <div className="bg-primary relative col-span-2 rounded-lg p-6">
              <div className="flex items-center gap-4 px-6 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="text-green-500"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-bold">With ScrapingBee</p>
              </div>

              <div className="divide-y divide-black/10">
                <p className="px-6 py-3">One simple API call</p>
                <p className="px-6 py-3">Structured JSON</p>
                <p className="px-6 py-3">Automatic</p>
                <p className="px-6 py-3">Built-in</p>
                <p className="px-6 py-3">Minutes only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
