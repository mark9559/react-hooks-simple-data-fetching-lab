import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        // Set isLoading to false since we've received the response
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        // Handle errors 
      });
  }, []); 

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {isLoading ? (
        // Display "Loading..." message while waiting for the API response
        <p>Loading...</p>
      ) : (
        // Display the dog image 
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
