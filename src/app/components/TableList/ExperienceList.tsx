import './style.css';
import { IExperience } from '@/app/constants/type';

type experienceInputs = {
  experience: IExperience;
};
export const ExperienceList = ({ experience }: experienceInputs) => {
  return (
    <div id='expList' className='listTable'>
      <dt>
        <p className='tableYear'>{experience.period}</p>
      </dt>
      <dd>
        <h3 className='tableTitle'>
          {experience.title} | {experience.company}
        </h3>
        <p className='tableDesc'>{experience.description}</p>
        {experience.skills?.map((skill) => {
          return (
            <li className='tableCategories' key={skill}>
              {skill}
            </li>
          );
        })}
      </dd>
    </div>
  );
};
