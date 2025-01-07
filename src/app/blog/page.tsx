import Link from 'next/link';
import { myBlog } from '../_constants/blog';
import { BlogList } from '../_components/TableList/BlogList';
import { IBlog } from '../_constants/type';
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
