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
    <ul>
      {pages.map((p) => (
        <li key={p}>
          {current !== p ? (
            <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}>{p}</Link>
          ) : (
            <span>{p}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
