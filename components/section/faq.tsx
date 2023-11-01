'use client';
import { useState } from 'react';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    '送料はいくらですか？',
    'どのようなお支払方法がありますか？',
    '商品はいつ届きますか？'
  ];

  const answers = [
    '送料は、全国一律送料無料です。',
    '各種クレジットカード/Google Pay/ApplePay/がご利用いただけます。',
    '配送先によって異なりますが、通常ご注文後から2～5営業日以内のお届けとなります。'
  ];

  return (
    <section className="mx-auto max-w-screen-lg px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">よくある質問</h2>
      </div>
      {questions.map((question, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-4 py-3"
          >
            <span>{question}</span>
            <svg
              className={`transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              aria-hidden
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`transition-maxHeight overflow-hidden duration-300 ${
              openIndex === index ? 'max-h-[10rem]' : 'max-h-0'
            }`}
          >
            <div className="p-4">{answers[index]}</div>
          </div>
        </div>
      ))}
    </section>
  );
};
