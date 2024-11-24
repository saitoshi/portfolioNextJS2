import Image from 'next/image';

export default function Home() {
  return (
    <div id='homePage' className='pageContainer'>
      <div id='introSection'>
        <h2>
          <p className='mainHeader'>Shin Saito</p>
          <p className='subHeader'>Web Engineer</p>
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
        <h3>EXPERIENCES</h3>
      </div>
      <div id='projectSection' className='pageSection'>
        <h3>PROJECTS</h3>
      </div>
    </div>
  );
}
