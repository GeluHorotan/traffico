import AlertWrapper from '../AlertWrapper';
import Footer from '../Footer';
import Navigation from '../Navigation';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <main>{children}</main>
      <Footer />
      {/* @ts-ignore: Unreachable code error */}
      <AlertWrapper />
    </div>
  );
};

export default Layout;
