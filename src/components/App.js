// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetching data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message); // Set the image URL from API response
        setIsLoading(false); // Set loading to false once data is received
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false); // Ensure loading is false on error
      });
  }, []); // Empty dependency array ensures this effect only runs once after initial render

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display loading message while data is being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;
