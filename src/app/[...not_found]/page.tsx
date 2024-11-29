import Link from 'next/link';
export default function Page() {
  return (
    <div id='notFound' className='pageContainer'>
      <h2>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>404 NOT FOUND</p>
      </h2>
      <p>The page you tried to access was either changed or deleted.</p>
      <p>アクセスしようとしたページは削除または変更された可能性があります。</p>
    </div>
  );
}
