import Link from 'next/link';
import { NEWS_LIST_LIMIT } from '../limit/limit';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }).map(
    (_, i) => i + 1
  );
  return (
    <ul className="flex justify-center space-x-2 p-4">
      {pages.map((p) => (
        <li className="flex h-8 w-8 items-center justify-center rounded-full border" key={p}>
          {current !== p ? (
            <Link
              className="flex h-full w-full items-center justify-center rounded-full bg-green-100 text-green-500 transition duration-300 hover:bg-green-200 hover:text-green-700"
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
            >
              {p}
            </Link>
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-green-500 font-bold text-white">
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
