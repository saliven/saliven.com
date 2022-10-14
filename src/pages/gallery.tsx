import { NextSeo } from 'next-seo';
import Image from 'next/future/image';

export default function Gallery() {
  return (
    <>
      <NextSeo title="Gallery" />

      <main className="grid h-auto min-h-screen auto-rows-fr grid-cols-1 gap-5 bg-black p-5 md:grid-cols-3">
        {Array.from({ length: 8 }, (_, index) => index + 1).map((i) => (
          <div key={i} className="relative aspect-[347/520]">
            <Image
              alt="Gallery image"
              quality={100}
              loading="lazy"
              className="object-cover object-center"
              src={`/gallery/${i}.png`}
              fill
            />
          </div>
        ))}
      </main>
    </>
  );
}
