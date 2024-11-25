import './style.css';
import { IBlog } from '@/app/constants/type';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Gallery } from '../Common/Gallery';
export const BlogDetail = ({ blogInfo }: { blogInfo: IBlog }) => {
  return (
    <div id='blogDetail'>
      <h2>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>{blogInfo.title}</p>
        <p className='subHeader'>{blogInfo.date}</p>
      </h2>
      <p>
        <ReactMarkdown>{blogInfo.markdownFile}</ReactMarkdown>
      </p>
    </div>
  );
};
