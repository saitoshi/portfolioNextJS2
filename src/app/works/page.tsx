import Link from 'next/link';
import { pastWorks } from '../constants/project';
import { IProject } from '../constants/type';
import { ProjectList } from '../components/ProjectList/ProjectList';
export default function Projects() {
  return (
    <div id='projectPage' className='pageContainer'>
      <h2>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>PAST PROJECTS</p>
      </h2>
      {pastWorks.map((project: IProject) => {
        return <ProjectList key={project.id} project={project} />;
      })}
    </div>
  );
}
