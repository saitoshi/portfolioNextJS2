import { IProject } from '@/app/_constants/type';
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
          &nbsp; / &nbsp;
          <Link
            href='/works'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            PROJECTS
          </Link>
        </p>
        <p className='mainHeader'>{projectInfo.title}</p>
        <p className='subHeader'>{projectInfo.date}</p>
      </h2>
      <div style={{ textAlign: 'center' }}>
        <Gallery gallery={projectInfo.image} comment={projectInfo.comment} />
      </div>
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
      {projectInfo.tasks !== undefined ? <><h3>Tasks</h3>
        <p>The following are the tasks I did for the project: 
      
        </p>
      </> : <></>}
      {projectInfo.tasks === undefined ? <></> : projectInfo.tasks.map((item) => {
        return <li key={item}>{item}</li>
      }) }
  
    </div>
  );
};
