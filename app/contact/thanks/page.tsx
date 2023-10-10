import Link from 'next/link';

export default function Thanks() {
  return (
    <>
      <div>
        <h1>Thank you!</h1>
        <div>
          <Link href="/contact">Back to Previous Page</Link>
        </div>
      </div>
    </>
  );
}
