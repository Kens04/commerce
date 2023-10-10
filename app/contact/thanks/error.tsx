'use client';

import Link from 'next/link';

export const Error = () => {
  return (
    <>
      <div>
        <h1>Error!</h1>
        <div>
          <Link href="/contact">Back to Previous Page</Link>
        </div>
      </div>
    </>
  );
};
