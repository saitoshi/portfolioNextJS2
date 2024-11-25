import { IProject } from '@/app/constants/type';
import './style.css';
import Link from 'next/link';
import { pastWorks } from '@/app/constants/project';

export const ProjectTable = () => {
  return (
    <div id='projectCollection' className='archiveTable'>
      <table className='tableBody'>
        <thead>
          <tr className='tableHead'>
            <th>Date</th>
            <th>Project</th>
            <th>Image</th>
            <th>Built Using</th>
            <th className='tableDescription'>Description</th>
            <th>Learn More</th>
          </tr>
        </thead>
        <tbody>
          {pastWorks.map((work) => (
            <tr key={work._id}>
              <th>{work.date}</th>
              <th>{work.title}</th>
              <th className='thumbnailCover'>
                <img className='tableThumbnail' src={work.thumbnail}></img>
              </th>
              <th>
                {work.category.slice(0, 2).map((item) => {
                  return (
                    <li className='tableCategories' key={item}>
                      {item}
                    </li>
                  );
                })}
              </th>
              <th className='tableDescription'>{work.purpose}</th>
              <th>
                <Link
                  className='tableReadMore'
                  style={{
                    fontWeight: '700',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  href={`/project/${work._id}}`}>
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
