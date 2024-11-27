import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import './style.css';
export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='footerSNSLink'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='snsLink'
            href={'https://www.linkedin.com/in/shin-saito/'}>
            <CiLinkedin />
          </Link>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            className='snsLink'
            href={'https://github.com/saitoshi'}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
