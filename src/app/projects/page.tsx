import { ProjectTable } from '../components/MainTable/ProjectTable';
import Link from 'next/link';
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
      <ProjectTable />
    </div>
  );
}