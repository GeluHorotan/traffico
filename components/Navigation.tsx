import { Link } from 'react-scroll';
import Button from './Button';
import Header from './Header';

type navItems = {
  name: string;
  id: number;
  ref: string;
}[];

const Navigation: React.FC = () => {
  const navItems: navItems = [
    {
      name: 'About',
      id: 1,
      ref: 'about',
    },
    {
      name: 'How to',
      id: 2,
      ref: 'howTo',
    },
    {
      name: 'faqs',
      id: 3,
      ref: 'faq',
    },
    {
      name: 'contact',
      id: 4,
      ref: 'footer',
    },
  ];

  return (
    <Header>
      {navItems?.map((item) => {
        return (
          <Button
            type={'button'}
            key={item.id}
            withBackground={item.name === 'contact' ? true : false}
          >
            <Link smooth to={item.ref}>
              {item.name}
            </Link>
          </Button>
        );
      })}
    </Header>
  );
};

export default Navigation;
