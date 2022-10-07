import PopularCharacters from '../components/Characters/PopularCharacters';
import PopularDetails from '../components/Characters/PopularDetails';
import AboutBrBa from '../components/AboutBrBa';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <PopularCharacters />
      <AboutBrBa />
      <PopularDetails />
    </Layout>
  );
};
export default Home;
