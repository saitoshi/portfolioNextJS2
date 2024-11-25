import './style.css';
import { IBlog } from '@/app/constants/type';

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
        <h3 className='tableTitle'>{blog.title}</h3>
        <p className='tableDesc'>
          {blog.date} <br />
          {blog.description}
        </p>
        {blog.category.map((cat) => {
          return (
            <li className='tableCategories' key={cat}>
              {cat}
            </li>
          );
        })}
      </dd>
    </div>
  );
};
