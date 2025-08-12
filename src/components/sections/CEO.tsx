export default function CEO() {
  return (
    <section id="ceo" className="py-10 text-black">
      <div className="container mx-auto flex max-w-7xl flex-col gap-14 px-4 md:flex-row md:gap-20">
        <figure className="flex-shrink-0 space-y-6">
          <img
            src="/images/mike.png"
            alt="Mike Ritchie"
            className="h-36 w-36 rounded-2xl object-cover"
          />
          <figcaption className="space-y-1">
            <p className="text-xl font-bold">Mike Ritchie</p>
            <p className="text-black/65">
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
          <p className="text-2xl leading-relaxed">
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
