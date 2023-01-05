import { useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Home = () => {
  const [imageUrl, setimageUrl] = useState<string | undefined>(undefined);

  return (
    <div id="home-container">
      {!imageUrl && imageUrl !== 'loading' ? (
        <Form setimageUrl={setimageUrl} />
      ) : (
        <Card imageUrl={imageUrl} />
      )}
      <Footer />
    </div>
  );
};
export default Home;
