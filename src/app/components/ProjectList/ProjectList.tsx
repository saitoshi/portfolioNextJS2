import { IProject } from '@/app/constants/type';
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
      <dd>
        <h3 className='projectListTitle'>{project.title}</h3>
        <p className='projectListDesc'>{project.purpose}</p>
        {project.category.map((item) => {
          return (
            <li className='projectCategories' key={item}>
              {item}
            </li>
          );
        })}
      </dd>
    </div>
  );
};