import { pastWorks } from './_constants/project';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { ExperienceList } from './_components/TableList/ExperienceList';
import { ProjectList } from './_components/ProjectList/ProjectList';
import { IExperience, IProject } from './_constants/type';
import Link from 'next/link';
import { pastExperience } from './_constants/experience';

export default function Home() {
  return (
    <div id='homePage' className='pageContainer'>
      <div id='introSection'>
        <h2>
          <p className='mainHeader'>Shin Saito</p>
          <p className='subHeader'>Software Engineer</p>
          <div className='socialMediaLogo'>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className='snsLink'
              href={'https://www.linkedin.com/in/shin-saito/'}>
              <CiLinkedin />
            </Link>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className='snsLink'
              href={'https://github.com/saitoshi'}>
              <FaGithub />
            </Link>
          </div>
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
        <h3 className='sectionTitle'>
          RECENT <b>EXPERIENCES</b>
        </h3>
        {pastExperience.slice(0, 3).map((exp: IExperience) => {
          return <ExperienceList key={exp.title} experience={exp} />;
        })}
      </div>
      <div className='readMoreContainer' style={{ textAlign: 'center' }}>
        <Link id='projectReadMore' className='readMore' href={'/resume'}>
          View Resume
        </Link>
      </div>
      <div id='projectSection' className='pageSection'>
        <h3 className='sectionTitle'>
          RECENT <b>PROJECTS</b>
        </h3>
        {pastWorks.slice(0, 3).map((project: IProject) => {
          return <ProjectList key={project.id} project={project} />;
        })}
      </div>

      <div className='readMoreContainer' style={{ textAlign: 'center' }}>
        <Link id='projectReadMore' className='readMore' href={'/works'}>
          View Project Archive
        </Link>
      </div>
    
    </div>
  );
}
