import Image from 'next/image';
import { pastWorks } from './constants/project';
import { ProjectList } from './components/ProjectList/ProjectList';
import { IProject } from './constants/type';
import Link from 'next/link';
export default function Home() {
  return (
    <div id='homePage' className='pageContainer'>
      <div id='introSection'>
        <h2>
          <p className='mainHeader'>Shin Saito</p>
          <p className='subHeader'>Web Engineer</p>
          <div className='socialMediaLogo'></div>
        </h2>
        <p>
          I am a developer interested in helping with others to make their idea
          into a reality. I like to consider myself as{' '}
          <b>proactive, hardworker, and open minded</b> with every opportunity
          and challenge I face. <br />
          The following site lists all of the past <b>
            technological solution
          </b>{' '}
          and <b>writings</b> I have created. Please take a look at anything you
          find interesting.
        </p>
      </div>
      <div id='experienceSection' className='pageSection'>
        <h3>
          RECENT <b>EXPERIENCES</b>
        </h3>
      </div>
      <div id='projectSection' className='pageSection'>
        <h3>
          RECENT <b>PROJECTS</b>
        </h3>
        {pastWorks.slice(0, 3).map((project: IProject) => {
          return <ProjectList key={project.id} project={project} />;
        })}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link id='projectReadMore' className='readMore' href={'/projects'}>
          View Project Archive
        </Link>
      </div>
      <div id='writingSection' className='pageSection'>
        <h3>
          RECENT <b>WRITINGS</b>
        </h3>
      </div>
    </div>
  );
}
