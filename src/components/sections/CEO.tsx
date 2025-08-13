export default function CEO() {
  return (
    <section id="ceo" className="py-10 text-black">
      <div className="container mx-auto flex max-w-7xl flex-col-reverse gap-10 px-4 md:flex-row md:gap-20">
        <figure className="flex flex-shrink-0 flex-row items-center gap-6 md:flex-col md:items-start">
          <img
            src="/images/mike.png"
            alt="Mike Ritchie"
            className="h-16 w-16 rounded-2xl object-cover md:h-36 md:w-36"
          />
          <figcaption className="space-y-1">
            <p className="text-base font-bold sm:text-xl">Mike Ritchie</p>
            <p className="text-sm text-black/65 sm:text-base">
              CEO @ <span className="">SeekWell</span>
            </p>
          </figcaption>
        </figure>

        <div className="space-y-6">
          <img
            src="/images/quote.png"
            alt="Quote symbol"
            className="w-12 object-contain"
          />
          <p className="text-xl leading-relaxed sm:text-2xl">
            ScrapingBee simplified our{" "}
            <span className="font-bold">
              day-to-day marketing and engineering operations a lot
            </span>
            . We no longer have to worry about managing our own fleet of
            headless browsers, and we no longer have to spend days sourcing the
            right proxy provider.
          </p>
        </div>
      </div>
    </section>
  );
}
