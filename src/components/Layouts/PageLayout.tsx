import React from 'react';

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col py-[4rem] px-5 text-gray-11 sm:px-24 md:px-40 lg:px-72 2xl:px-[30rem]">
      {children}
    </main>
  );
}
