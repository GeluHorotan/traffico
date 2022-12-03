import Button from './Button';
import Header from './Header';

type navItems = {
  name: string;
  id: number;
}[];

const Navigation: React.FC = () => {
  const navItems: navItems = [
    {
      name: 'About',
      id: 1,
    },
    {
      name: 'How to',
      id: 2,
    },
    {
      name: 'faqs',
      id: 3,
    },
    {
      name: 'contact',
      id: 4,
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
            {item.name}
          </Button>
        );
      })}
    </Header>
  );
};

export default Navigation;
