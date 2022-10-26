import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Dock } from '../components/Dock';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://saliven.com/${router.asPath}`;

  return (
    <div className="min-h-screen bg-gray-1">
      <DefaultSeo
        titleTemplate="%s — Saliven.com"
        description="A self-taught frontend and backend software engineer."
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0'
          },
          {
            name: 'url',
            content: url
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
        canonical={url}
      />

      <Component {...pageProps} />
      <Dock />

      <Analytics />
    </div>
  );
}
