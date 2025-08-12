export default function DevFriendlyControl() {
  return (
    <section id="devFriendlyControl" className="py-20 text-black">
      <div className="container mx-auto flex max-w-7xl flex-col items-center space-y-16 px-4">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="text-xs font-bold tracking-wide uppercase sm:text-sm">
            Dev-friendly control
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Configure your request in seconds
            </h1>
            <h2 className="text-xl sm:text-2xl">
              Take control over what, where, and how you scrape with just a few
              parameters:
            </h2>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <FeatureCard
            icon="/images/search.png"
            title="Search"
            description="The search query you want to target"
          />
          <FeatureCard
            icon="/images/country-code.png"
            title="Country Code"
            description="Choose you result location"
          />
          <FeatureCard
            icon="/images/language.png"
            title="Language"
            description="Specify your preferred language"
          />
          <FeatureCard
            icon="/images/search-type.png"
            title="Search Type"
            description="Select search, news or maps"
          />
        </div>

        <button className="flex cursor-pointer items-center gap-2 rounded border-2 border-black px-6 py-3 font-bold duration-300 hover:opacity-50">
          View request samples
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
      </div>
    </section>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <img src={icon} alt={title} className="h-14 w-14" />
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="space-y-2">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-black/75">{description}</p>
        </div>

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
      </div>
    </div>
  );
};
