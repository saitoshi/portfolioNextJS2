import './style.css';
import { IBlog } from '@/app/_constants/type';
import Link from 'next/link';
type blogInputs = {
  blog: IBlog;
};

export const BlogList = ({ blog }: blogInputs) => {
  return (
    <div id='blogList' className='listTable'>
      <dt>
        <img
          className='blogImg'
          src={blog.thumbnail}
          alt={`Thumbnail For: ${blog.title}`}
        />
      </dt>
      <dd>
        <Link
          className='tableReadMore'
          style={{ textDecoration: 'none', color: 'white' }}
          href={`/blog/${blog._id}`}>
          <h3 className='tableTitle'>{blog.title}</h3>
          <p className='tableDesc'>{blog.description}</p>
          {blog.category.map((cat) => {
            return (
              <li className='tableCategories' key={cat}>
                {cat}
              </li>
            );
          })}
        </Link>
      </dd>
    </div>
  );
};
