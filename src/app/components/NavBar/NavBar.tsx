import Link from 'next/link';
import './style.css';

export const NavBar = () => {
  const menuItems = [
    {
      menu: 'PROJECTS',
      link: '/works',
    },
    {
      menu: 'BLOGS',
      link: '/blog',
    },
    {
      menu: 'CV',
      link: '/experience',
    },
    {
      menu: '日本語',
      link: '/jpn',
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
