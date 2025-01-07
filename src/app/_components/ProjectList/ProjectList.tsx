import { IProject } from '@/app/_constants/type';
import './style.css';
import Link from 'next/link';

type projectInputs = {
  project: IProject;
};

export const ProjectList = ({ project }: projectInputs) => {
  return (
    <div id='projectList' className='projectTable'>
      <dt>
        <img
          className='projectThumbnail'
          src={project.thumbnail}
          alt={'Thumbnail Image For '}
        />
      </dt>
      <dd className='listLink'>
        <Link
          style={{ textDecoration: 'none', color: 'white' }}
          href={`/works/${project._id}`}>
          <h3 className='projectListTitle'>{project.title}</h3>
          <p className='projectListDesc'>{project.purpose}</p>
          {project.category.map((item) => {
            return (
              <li className='projectCategories' key={item}>
                {item}
              </li>
            );
          })}
        </Link>
      </dd>
    </div>
  );
};
