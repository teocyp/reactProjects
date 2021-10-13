import React, { useState, useEffect } from 'react';

function FetchData() {
  const [resourceType, setResourceType] = useState('Posts');
  const url = `https://jsonplaceholder.typicode.com/${resourceType}`;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
    };

    fetchApi();
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType('Posts')}>Posts</button>
      <button onClick={() => setResourceType('Users')}>Users</button>
      <button onClick={() => setResourceType('Comments')}>Commments</button>
      <h3>{resourceType}</h3>
    </div>
  );
}

export default FetchData;
