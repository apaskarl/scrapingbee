export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-20 text-white">
      <div className="container mx-auto max-w-7xl space-y-16 px-4">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Trusted by people, trusted by everyone
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* left column */}
          <div className="space-y-8">
            <TestimonialCard
              quote="Great SaaS tool for legitimate scraping and data extraction. Scrapingbee makes it easy to automatically pull down data from the sites that publish periodic data in a human-readable format."
              highlightedText="Scrapingbee makes it easy to automatically pull down data from the sites"
              name="Andy H."
              role="Founder"
              company="Loadster"
              imageSrc="/images/andy.png"
            />

            <TestimonialCard
              quote="So easy to set-up, straightforward and performance. They are reachable and kind, they introduced use properly their tool and offered the best solution for our need"
              name="Maxime Y."
              role="Product Manager"
              company="NordFolk"
              imageSrc="/images/maxime.png"
              showCapterra={true}
            />

            <TestimonialCard
              quote="Setting up was a breeze, and the performance is outstanding. The team is responsive and friendly, guiding us through their tool and providing the perfect solution for our requirements."
              name="Jesselyn F."
              role="SEO Specialist"
              imageSrc="/images/jesselyn.jpg"
              showCapterra={true}
            />
          </div>

          {/* right column */}
          <div className="space-y-8">
            <TestimonialCard
              quote="Scrapingbee helps us to retrieve information from sites that use very sophisticated mechanism to block unwanted traffic, we were struggling with those sites for some time now and I'm very glad that we found ScrapingBee."
              highlightedText="I'm very glad that we found ScrapingBee"
              name="Anton R."
              role="CTO"
              imageSrc="/images/anton.jpg"
              showCapterra={true}
            />

            <TestimonialCard
              quote="ScrapingBee has been a game changer for us, allowing us to access data from websites that previously blocked our attempts. We faced numerous challenges with these sites, but thanks to ScrapingBee, we can now retrieve the information we need effortlessly."
              name="Greg S."
              role="COO"
              imageSrc="/images/greg.jpg"
              showCapterra={true}
            />

            <TestimonialCard
              quote="ScrapingBee has transformed our data collection process, enabling us to extract information from websites that previously thwarted our efforts. We encountered many obstacles with these sites, but with ScrapingBee, we can now gather the data we need with ease."
              name="Lindon T."
              role="Chief Operating Officer"
              imageSrc="/images/lindon.jpg"
              showCapterra={true}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-20 border-t border-white/15 py-10 md:flex-row">
          <div className="space-y-10">
            <p className="text-center text-xl font-bold sm:text-2xl md:text-start md:text-3xl">
              Our awards <br /> from Capterra
            </p>
            <img
              src="/images/capterra-award.png"
              alt=""
              className="h-12 md:h-16"
            />
          </div>

          <div className="flex flex-col gap-10 md:flex-row">
            <img
              src="/images/capterra2024_1.png"
              alt=""
              className="h-32 md:h-36"
            />
            <img
              src="/images/capterra2024_2.png"
              alt=""
              className="h-32 md:h-36"
            />
            <img
              src="/images/capterra2024_3.png"
              alt=""
              className="h-32 md:h-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({
  quote,
  highlightedText,
  name,
  role,
  company,
  imageSrc,
  showCapterra = false,
  stars = 5,
}: {
  quote: string;
  highlightedText?: string;
  name: string;
  role: string;
  company?: string;
  imageSrc: string;
  showCapterra?: boolean;
  stars?: number;
}) => {
  return (
    <div className="space-y-14 rounded bg-[#171717] p-8">
      <div className="space-y-5">
        <div className="flex">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <p className="text-base text-white sm:text-xl">
          {highlightedText ? (
            <>
              {quote.split(highlightedText)[0]}
              <span className="text-primary">{highlightedText}</span>
              {quote.split(highlightedText)[1]}
            </>
          ) : (
            quote
          )}
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src={imageSrc}
          alt={`${name}'s profile`}
          className="h-16 w-16 rounded-lg object-cover"
        />

        <div className="space-y-2">
          <div className="flex flex-wrap gap-3 text-base text-white sm:text-lg">
            <p>{name},</p>
            <p className="text-white/65">
              {role}
              {company && (
                <>
                  {" "}
                  at <span className="text-white">{company}</span>
                </>
              )}
            </p>
          </div>

          {showCapterra && (
            <div className="flex items-center gap-2">
              <p className="text-white/65">See review on</p>
              <img
                src="/images/capterra_logo.png"
                alt="Capterra logo"
                className="h-5"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className="text-[#FF9D28]"
  >
    <path
      fill="currentColor"
      d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
    />
  </svg>
);
