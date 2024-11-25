import { IProject } from '@/app/constants/type';
import { Gallery } from '../Common/Gallery';
import Link from 'next/link';
export const ProjectDetail = ({ projectInfo }: { projectInfo: IProject }) => {
  return (
    <div id='projectDetail'>
      <h2>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>{projectInfo.title}</p>
        <p className='subHeader'>{projectInfo.date}</p>
      </h2>
      <p>{projectInfo.purpose} </p>
      <h3>Language, Frameworks, and Tools Used</h3>
      <p>
        {projectInfo.category.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </p>
      <h3>Requirements</h3>

      {projectInfo.requirements.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <br />
      <div style={{ textAlign: 'center' }}>
        <Gallery gallery={projectInfo.image} />
      </div>
    </div>
  );
};
