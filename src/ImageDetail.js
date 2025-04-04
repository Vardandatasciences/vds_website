import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Details for image {id}</h2>
      {/* Add more details or content here */}
    </div>
  );
};

export default ImageDetail;
