import AlertWrapper from '../AlertWrapper';
import Footer from '../Footer';
import Navigation from '../Navigation';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <main>{children}</main>
      <Footer></Footer>
      {/* @ts-ignore: Unreachable code error */}
      <AlertWrapper />
    </>
  );
};

export default Layout;
