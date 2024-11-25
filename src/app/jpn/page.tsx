import { pastWorks } from '../constants/project';
import { myBlog } from '../constants/blog';
import { ExperienceList } from '../components/TableList/ExperienceList';
import { ProjectList } from '../components/ProjectList/ProjectList';
import { IExperience, IProject, IBlog } from '../constants/type';
import Link from 'next/link';
import { pastExperience, pastExperienceJPN } from '../constants/experience';
import { BlogList } from '../components/TableList/BlogList';

export default function JPN() {
  return (
    <div id='homePage' className='pageContainer'>
      <div id='introSection'>
        <h2>
          <p className='mainHeader'>Shin Saito</p>
          <p className='subHeader'>IT エンジニア</p>
          <div className='socialMediaLogo'></div>
        </h2>
        <p>
          ウェブ関連のエンジニアとして勤務し、<b>JavaScript</b>や<b>Python</b>
          などのモダーンプログラミング言語を習得いたしました。業務と趣味でGitHubを活用しています。今後は業務の幅を広げたいと考え、エンジニアとしてスキルアップを図り、将来的にはプロジェクトマネージャとしてマネジメントを行いたいと思います。
        </p>
      </div>
      <div id='experienceSection' className='pageSection'>
        <h3 className='sectionTitle'>
          <b>職務</b>履歴
        </h3>
        {pastExperienceJPN.slice(0, 3).map((exp: IExperience) => {
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
          <b>プロジェクト</b>
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
          <b>フログ（英語）</b>
        </h3>
        {myBlog.slice(0, 3).map((blog: IBlog) => {
          return <BlogList key={blog._id} blog={blog} />;
        })}
      </div>
      <div className='readMoreContainer' style={{ textAlign: 'center' }}>
        <Link id='projectReadMore' className='readMore' href={'/blogs'}>
          View Blog Archive
        </Link>
      </div>
    </div>
  );
}
