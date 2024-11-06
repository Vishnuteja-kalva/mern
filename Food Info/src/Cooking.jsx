import React, { useState } from "react";
import axios from "axios";

export const Video = () => {
  const [query, setQuery] = useState(""); 
  const [videoId, setVideoId] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const cookingKeywords = [
    'cooking', 'recipe', 'recipes', 'meal prep', 'baking', 'cuisine', 
    'food', 'ingredients', 'dinner', 'lunch', 'breakfast', 'gourmet', 
    'healthy cooking', 'cooking tips', 'cooking tutorial', 'chef', 
    'home cooking', 'cooking techniques'
  ];

  const isCookingQuery = (query) => {
    return cookingKeywords.some(keyword => query.toLowerCase().includes(keyword));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

   
    if (!isCookingQuery(query)) {
      setErrorMessage("This is only for cooking purpose. Please include cooking-related keywords.");
      return; 
    }

    const combinedQuery = query.trim(); 
    const API_KEY = "AIzaSyCmGMqBWPd684cFCKL4kVsV4fEZR0xmg2Y"; 
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(combinedQuery)}&type=video&maxResults=10&key=${API_KEY}`;

    try {
      if (combinedQuery.length > 1) {
        const response = await axios.get(url);
        if (response.data.items.length > 0) {
          setSearchResults(response.data.items);
          setVideoId(response.data.items[0].id.videoId); 
        } else {
          alert("No videos found for the given query.");
        }
      }
    } catch (error) {
      console.error("Error fetching data from YouTube API:", error);
      setErrorMessage("There was an error fetching the videos. Please try again.");
    }
  };

  const handleVideoSelect = (id) => {
    setVideoId(id); 
  };

  return (
    <div style={{ textAlign: "center", padding: "10px", marginTop: "-61px" }}>
      <form onSubmit={handleSearch}>
        <h1>Food Video Player</h1>
        <input
          type="text"
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a cooking video"
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" id="vid_btn" style={{ padding: "10px", marginLeft: "10px" }}>
          Search
        </button>

        {errorMessage && (
          <div style={{ color: "red", marginTop: "10px" }}>
            {errorMessage}
          </div>
        )}

        {videoId && (
          <div style={{ marginTop: "20px" }}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video"
              style={{ border: "3px solid Black", borderRadius: "10px", boxShadow: "5px 0px 20px rgba(255, 2, 2, 0.7)" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {searchResults.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Search Results:</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {searchResults.map((item) => (
                <li key={item.id.videoId} id="searchs" style={{ margin: "10px 0" }}>
                  <button style={{ color: "red", border: "1px solid black" }} id="search_btn" onClick={() => handleVideoSelect(item.id.videoId)}>
                    {item.snippet.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};
