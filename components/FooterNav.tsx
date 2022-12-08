import { Link } from 'react-scroll';
import Button from './Button';
import Header from './Header';

type footerItems = {
  name: string;
  id: number;
  ref: string;
}[];
type Props = {
  className?: string;
};

const FooterNav = ({ className }: Props) => {
  const footerItems: footerItems = [
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
  ];
  return (
    <Header isFooter>
      {footerItems?.map((item) => {
        return (
          <Button type={'button'} key={item.id}>
            <Link to={item.ref} smooth>
              {item.name}
            </Link>
          </Button>
        );
      })}
    </Header>
  );
};

export default FooterNav;
