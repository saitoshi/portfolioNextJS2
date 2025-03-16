import './style.css';
import { ICertification } from '@/app/_constants/type';

type certificationInputs = {
  certification: ICertification;
};

export const CertificationList = ({ certification }: certificationInputs) => {
  return (
    <div id='certificationList' className='listTable'>
      <dt>
        <p className='tableYear'>{certification.certifiedDate}</p>
      </dt>
      <dd>
        <h3 className='expTableTitle'>
          {certification.title}
          <br />
        </h3>
        <p className='expTableDesc'>{certification.certifiedBody}</p>
        {certification.subjectArea.map((subject) => {
          return (
            <li className='tableCategories' key={subject}>
              {subject}
            </li>
          );
        })}
      </dd>
    </div>
  );
};
