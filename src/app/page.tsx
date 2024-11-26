import { pastWorks } from './constants/project';
import { myBlog } from './constants/blog';
import { ExperienceList } from './components/TableList/ExperienceList';
import { ProjectList } from './components/ProjectList/ProjectList';
import { IExperience, IProject, IBlog } from './constants/type';
import Link from 'next/link';
import { pastExperience } from './constants/experience';
import { BlogList } from './components/TableList/BlogList';

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
        <h3 className='sectionTitle'>
          RECENT <b>EXPERIENCES</b>
        </h3>
        {pastExperience.slice(0, 3).map((exp: IExperience) => {
          return <ExperienceList key={exp.title} experience={exp} />;
        })}
      </div>
      <div className='readMoreContainer' style={{ textAlign: 'center' }}>
        <Link
          id='projectReadMore'
          className='readMore'
          href={'/image/2024SaitoCV.pdf'}>
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
        <Link id='projectReadMore' className='readMore' href={'/projects'}>
          View Project Archive
        </Link>
      </div>
      <div id='writingSection' className='pageSection'>
        <h3 className='sectionTitle'>
          RECENT <b>WRITINGS</b>
        </h3>
        {myBlog.slice(0, 3).map((blog: IBlog) => {
          return <BlogList key={blog._id} blog={blog} />;
        })}
      </div>
      <div className='readMoreContainer' style={{ textAlign: 'center' }}>
        <Link id='projectReadMore' className='readMore' href={'/blog'}>
          View Blog Archive
        </Link>
      </div>
    </div>
  );
}
