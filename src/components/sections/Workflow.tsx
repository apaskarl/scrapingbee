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
                width="24"
                height="24"
                viewBox="0 0 32 32"
                className="text-red-500"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
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
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  className="text-green-500"
                >
                  <defs>
                    <mask id="SVGIQLGgV2F">
                      <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path
                          fill="#fff"
                          stroke="#fff"
                          d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                        />
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          d="m16 24l6 6l12-12"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#SVGIQLGgV2F)"
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
