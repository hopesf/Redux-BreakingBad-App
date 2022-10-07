import Navbar from '../components/Navbar';
import Stars from '../components/Stars';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="font-Roboto">
      <Stars />
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
export default Layout;
