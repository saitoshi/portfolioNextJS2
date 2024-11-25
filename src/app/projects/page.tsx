import { ProjectTable } from '../components/MainTable/ProjectTable';
export default function Projects() {
  return (
    <div id='projectPage' className='pageContainer'>
      <h2>
        <p className='mainHeader'>PAST PROJECTS</p>
      </h2>
      <ProjectTable />
    </div>
  );
}
