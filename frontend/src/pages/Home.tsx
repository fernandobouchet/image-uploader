import { useState } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';

const Home = () => {
  const [imageUrl, setimageUrl] = useState<string | undefined>(undefined);

  return (
    <div id="home-container">
      {!imageUrl ? (
        <Form setimageUrl={setimageUrl} />
      ) : (
        <Card imageUrl={imageUrl} />
      )}
    </div>
  );
};
export default Home;
