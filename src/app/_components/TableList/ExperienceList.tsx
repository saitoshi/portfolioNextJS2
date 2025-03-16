import './style.css';
import { IExperience } from '@/app/_constants/type';

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
        <h3 className='expTableTitle'>{experience.title}</h3>
        <p className='expTableDesc'>
          <b>{experience.company}</b>
          <br />
          {experience.description}
        </p>
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
