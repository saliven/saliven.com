import { Raleway } from '@next/font/google';
import { Dock } from '../components/Dock';
import { NextSeo } from 'next-seo';

import 'tailwindcss/tailwind.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'optional'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <NextSeo
          useAppDir
          titleTemplate="%s — Saliven.com"
          description="A self-taught frontend and backend software engineer."
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1.0'
            },
            {
              name: 'theme',
              content: '#161616'
            }
          ]}
          additionalLinkTags={[
            {
              rel: 'shortcut icon',
              href: '/favicon.ico',
              type: 'image/x-icon'
            }
          ]}
          twitter={{
            cardType: 'summary_large_image',
            handle: '@s4liven',
            site: '@s4liven'
          }}
          openGraph={{
            type: 'website',
            site_name: 'Saliven.com',
            images: [{ url: 'https://saliven.com/og.png' }]
          }}
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-gray-1 py-[4rem] px-5 text-gray-11 sm:px-24 md:px-40 lg:px-72 2xl:px-[30rem]">
          {children}
          <Dock />
        </div>
      </body>
    </html>
  );
}
