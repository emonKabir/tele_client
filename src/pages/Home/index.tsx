import { lazy } from 'react';
const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      <Contact title={''} content={''} id="contact" />
    </Container>
  );
};

export default Home;
