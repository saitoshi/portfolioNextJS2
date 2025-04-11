import Link from 'next/link';
import { pastExperience } from '../_constants/experience';
import { IExperience } from '../_constants/type';
import { ExperienceList } from '../_components/TableList/ExperienceList';
import { SkillList } from '../_components/TableList/SkillList';
export default function Page() {
  return (
    <div id='resumePage' className='pageContainer'>
      <h2 style={{ textAlign: 'center' }}>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>RESUME</p>
      </h2>
      <div id='experienceSection' className='pageSection'>
        <h3 className='sectionTitle'>
          <b>PROFESSIONAL EXPERIENCES</b>
        </h3>
        {pastExperience.map((exp: IExperience) => {
          return <ExperienceList key={exp.title} experience={exp} />;
        })}
      </div>
      <div id='skillSection' className='pageSection'>
        <h3 className='sectionTitle'>
          <b>SKILL SETS</b>
        </h3>
        <SkillList />
      </div>
    </div>
  );
}
