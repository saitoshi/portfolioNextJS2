import Link from 'next/link';
import './style.css';

export const NavBar = () => {
  const menuItems = [
    {
      menu: 'PROJECTS',
      link: '/works',
    },
 
  ];
  return (
    <div id='navMenu'>
      <ul className='navLinks'>
        {menuItems.map((item) => (
          <li key={item.menu}>
            <Link href={item.link} className='navLinkLists'>
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
