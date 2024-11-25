import { BlogTable } from '../components/MainTable/BlogTable';
import Link from 'next/link';
export default function Blog() {
  return (
    <div id='blogPage' className='pageContainer'>
      <h2>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>BLOG ARCHIVE</p>
      </h2>
      <BlogTable />
    </div>
  );
}
