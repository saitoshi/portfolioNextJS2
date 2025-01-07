import './style.css';
import Link from 'next/link';
import { myBlog } from '@/app/_constants/blog';

export const BlogTable = () => {
  return (
    <div id='projectCollection' className='archiveTable'>
      <table className='tableBody'>
        <thead>
          <tr className='tableHead'>
            <th>Date</th>
            <th>Project</th>
            <th>Image</th>
            <th>Category</th>
            <th>Description</th>
            <th>Learn More</th>
          </tr>
        </thead>
        <tbody>
          {myBlog.map((blog) => (
            <tr key={blog._id}>
              <th>{blog.date}</th>
              <th className='tableTitle'>{blog.title}</th>
              <th className='thumbnailCover'>
                <img className='tableThumbnail' src={blog.thumbnail}></img>
              </th>
              <th>
                {blog.category.slice(0, 2).map((item) => {
                  return (
                    <li className='tableCategories' key={item}>
                      {item}
                    </li>
                  );
                })}
              </th>
              <th className='tableDescription'>{blog.description}</th>
              <th>
                <Link
                  className='tableReadMore'
                  style={{
                    fontWeight: '700',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  href={`/blog/${blog._id}`}>
                  &#x2192;
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
