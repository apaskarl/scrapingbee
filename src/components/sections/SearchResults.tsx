export default function SearchResults() {
  return (
    <section id="searchResults" className="py-20 text-black">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <div className="w-full space-y-6">
          <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Search results information, effortlessly
          </h1>

          <div
            className="flex items-center gap-2 overflow-x-auto rounded bg-[#F6F6F6] p-2 font-bold whitespace-nowrap text-black/65 sm:grid sm:grid-cols-6 sm:overflow-visible sm:whitespace-normal"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <button
              type="button"
              className="cursor-pointer rounded bg-white px-6 py-3 text-center text-black shadow"
            >
              Organic results
            </button>
            <button
              type="button"
              className="cursor-pointer px-6 text-center duration-300 hover:opacity-50 md:px-0"
            >
              Ads
            </button>
            <button
              type="button"
              className="cursor-pointer px-6 text-center duration-300 hover:opacity-50 md:px-0"
            >
              Local Results
            </button>
            <button
              type="button"
              className="cursor-pointer px-6 text-center duration-300 hover:opacity-50 md:px-0"
            >
              Google Maps Results
            </button>
            <button
              type="button"
              className="cursor-pointer px-6 text-center duration-300 hover:opacity-50 md:px-0"
            >
              Related Queries
            </button>
            <button
              type="button"
              className="cursor-pointer px-6 text-center duration-300 hover:opacity-50 md:px-0"
            >
              Questions
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-6 rounded-lg border border-black/10 bg-[#FBFBFB] p-6">
            <p className="font-bold">Input Parameters</p>

            <div className="grid grid-cols-1 gap-6 divide-y divide-black/20 md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="space-y-6 pb-6 md:pr-6 md:pb-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                      source
                    </p>
                    <p className="font-bold">Scraper</p>
                  </div>

                  <p className="text-black/75">
                    Set the scraper to 'google_search' to get web, image, or
                    news search results. (Other sources: 'google', 'google_ads',
                    'google_lens', 'google_maps', 'google_travel_hotels',
                    'google_suggest', 'google_trends_explore')
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                      query
                    </p>
                    <p className="font-bold">Search query</p>
                  </div>

                  <p className="text-black/75">
                    Input UTF-encoded search query.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                        geo_location
                      </p>
                      <p className="font-bold">Localization</p>
                    </div>

                    <p className="text-black/75">
                      Specify the UULE-based geographic location value. (State
                      name, Country name, Coordinates and Radius, Criteria ID)
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                        domain
                      </p>
                      <p className="font-bold">Google domain</p>
                    </div>

                    <p className="text-black/75">
                      Specify Google domain you want to scrape.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                        locale
                      </p>
                      <p className="font-bold">Interface language</p>
                    </div>

                    <p className="text-black/75">Set the interface language.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                        results_language
                      </p>
                      <p className="font-bold">Results language</p>
                    </div>

                    <p className="text-black/75">Set the results language.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                        render
                      </p>
                      <p className="font-bold">JavaScript rendering</p>
                    </div>

                    <p className="text-black/75">
                      Enable to load JavaScript-based content.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <p className="rounded bg-[#4CFF4336] p-2 font-mono text-sm text-[#15830F]">
                        parse
                      </p>
                      <p className="font-bold">Structured data</p>
                    </div>

                    <p className="text-black/75">
                      Enable to get structured data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-black/10 p-2">
              <div className="p-3">
                <p className="font-bold">Input</p>
              </div>
              <div className="rounded-lg bg-[#30302F] p-10">
                <p className="text-white italic">* temporary *</p>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-2">
              <div className="p-3">
                <p className="font-bold">Output</p>
              </div>
              <div className="rounded-lg bg-[#30302F] p-10">
                <p className="text-white italic">* temporary *</p>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 p-2">
              <div className="p-3">
                <p className="font-bold">Preview</p>
              </div>
              <div className="rounded-lg p-10"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <button
            type="button"
            className="bg-primary flex cursor-pointer items-center justify-center gap-2 rounded px-8 py-3 font-bold duration-300 hover:opacity-50"
          >
            Try For Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 12l-6-6m6 6l-6 6m6-6H5"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex cursor-pointer items-center justify-center gap-2 rounded border-2 border-black px-8 py-3 font-bold duration-300 hover:opacity-50"
          >
            View documentation
          </button>
        </div>
      </div>
    </section>
  );
}
