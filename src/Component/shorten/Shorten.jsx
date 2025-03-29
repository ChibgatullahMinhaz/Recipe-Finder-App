import React from 'react'

export const Shorten = () => {
    const shortenUrl = async (longUrl) => {
        const response = await fetch('https://cleanuri.com/api/v1/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `url=${encodeURIComponent(longUrl)}`,
        });
        
        const data = await response.json();
        console.log(data.result_url); // Shortened URL
      };
      
      // Example usage
      shortenUrl('https://example.com');
      
  return (
    <div>Shorten</div>
  )
}
