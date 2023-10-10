'use client';

import Link from 'next/link';

const Thanks = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-10 text-center">
      <h1 className="text-title text-2xl font-bold md:text-4xl">
        お問い合わせありがとうございます。
      </h1>
      <div className="button-bg mt-5 inline-block rounded-md px-5 py-3">
        <Link className="text-white md:text-xl" href="/">
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
