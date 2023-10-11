import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full">
        <div className="mx-8 max-w-6xl py-20 sm:mx-auto sm:px-4">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </Suspense>
  );
}
