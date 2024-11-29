import Link from 'next/link';
import './style.css';

export default function Page() {
  return (
    <div id='resumePage' className='pageContainer'>
      <h2>
        <p>
          <Link
            href='/'
            className='subHeader'
            style={{ textDecoration: 'none' }}>
            &#x2190; HOME
          </Link>
        </p>
        <p className='mainHeader'>PAST EXPERIENCES</p>
      </h2>
      <div id='summarySection' className='sectionContainer'>
        <p className='sectionHeader'>SUMMARY</p>
        <p>
          I am experienced web developer with different technical and soft
          skills.
        </p>
      </div>
      <div id='skillSection' className='sectionContainer'>
        <p className='sectionHeader'>SKILLS</p>
        <br />
        <b>Languages And Frameworks</b>
        <br />
        <li className='skillCategory'>JavaScript</li>
        <li className='skillCategory'>TypeScript</li>
        <li className='skillCategory'>React</li>
        <li className='skillCategory'>Next JS</li>
        <li className='skillCategory'>Python</li>
        <li className='skillCategory'>PHP</li>
        <li className='skillCategory'>NodeJS</li>
        <li className='skillCategory'>ExpressJS</li>
        <li className='skillCategory'>React Bootstrap</li>
        <li className='skillCategory'>Semantic UI</li>
        <li className='skillCategory'>Tailwind CSS</li>
        <li className='skillCategory'>mySQL</li>
        <li className='skillCategory'>MongoDB</li>
        <li className='skillCategory'>AWS</li>
      </div>
      <div id='expSection' className='sectionContainer'>
        <p className='sectionHeader'>PROFESSIONAL EXPERIENCE</p>
        <p className='jobTitle'>
          <b>Implementation Engineer</b> | CloverTech
        </p>
        <span className='jobYear'>Mar. 2022 to Present</span>
        <p className='jobDesc'>
          As an implementation engineer, I was responsible for
        </p>

        <p className='jobTitle'>
          <b>Full Stack Developer</b> | Local Venture Room
        </p>
        <span className='jobYear'>June 2022 to Sep. 2023</span>
        <p className='jobDesc'>
          Part of the development team and responsible for creating websites
          and/or online services for other start up companies.
        </p>
        <div className='jobWork'>
          <li>Open Innovation: 0147</li>
          <li>Enriku Match</li>
          <li>HadaPass - Beauty Salon</li>
          <br />
          <li className='skillCategory'>TypeScript</li>
          <li className='skillCategory'>JavaScript</li>
          <li className='skillCategory'>NodeJS</li>
          <li className='skillCategory'>React</li>
          <li className='skillCategory'>PHP</li>
          <li className='skillCategory'>MongoDB</li>
          <li className='skillCategory'>mySQL</li>
          <li className='skillCategory'>FIGMA</li>
        </div>
      </div>
      <div id='actSection' className='sectionContainer'>
        <p className='sectionHeader'>PROFESSIONAL EXPERIENCE</p>
      </div>
    </div>
  );
}
