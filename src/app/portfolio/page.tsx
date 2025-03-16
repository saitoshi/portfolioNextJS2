import { pastExperience } from '../_constants/experience';
import Link from 'next/link';
import { ExperienceList } from '../_components/TableList/ExperienceList';
import { IExperience } from '../_constants/type';
export default function Page() {
  return (
    <div id='portfolioPage' className='pageContainer'>
      <h2 style={{ textAlign: 'center' }}>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>SHIN SAITO</p>
        <p className='subHeader'>Software Engineer</p>
      </h2>
      <hr />
      <b>WORK EXPERIENCE</b>
      {pastExperience.map((exp: IExperience) => {
        return <ExperienceList key={exp.title} experience={exp} />;
      })}
      <b>CERTIFICATIONS</b>
    </div>
  );
}
