import React from 'react';

function Error({ message }) {
  return (
    <div className="bg-red-600">
      <h1>{message}</h1>
    </div>
  );
}

export default Error;
