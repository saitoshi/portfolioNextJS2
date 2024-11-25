import Link from 'next/link';
import { myBlog } from '../constants/blog';
import { BlogList } from '../components/TableList/BlogList';
import { IBlog } from '../constants/type';
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
      {myBlog.map((blog: IBlog) => {
        return <BlogList key={blog._id} blog={blog} />;
      })}
    </div>
  );
}
