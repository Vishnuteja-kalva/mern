import React, { useState } from 'react';
import axios from 'axios';

export const FoodChatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today? You can ask about food, recipes, or nutrition.", user: "Foodbot 🤖" },
    ]);
    const [userInput, setUserInput] = useState("");

    const isValidQuery = (query) => {
        const keywords = [
            'food', 'recipe', 'recipes', 'nutrition', 'nutritional', 'ingredients', 'meal', 
            'cooking', 'diet', 'calories', 'healthy', 'cuisine', 'gourmet', 'dining', 
            'snacks', 'breakfast', 'lunch', 'dinner', 'beverages', 'drinks', 'dessert', 
            'appetizer', 'entree', 'soup', 'salad', 'vegan', 'vegetarian', 'gluten-free', 
            'organic', 'keto', 'paleo', 'protein', 'fiber', 'vitamins', 'minerals', 
            'carbs', 'sugar', 'fat', 'taste', 'flavors', 'spices', 'herbs', 'bakery', 
            'dairy', 'fast food', 'street food', 'gourmet'
          ];
          
        return keywords.some(keyword => query.toLowerCase().includes(keyword));
    };

    const formatResponse = (text) => {
        const paragraphs = text.split('\n').map((line, idx) => {
            if (line.startsWith('*')) {
                return <li key={idx}>{line.substring(1).trim()}</li>;
            }
            return <p key={idx}>{line}</p>;
        });

        return (
            <div>
                {paragraphs.length > 1 ? (
                    <div>
                        {paragraphs}
                    </div>
                ) : (
                    <p>{text}</p>
                )}
            </div>
        );
    };

    const handleUserInput = async (e) => {
        e.preventDefault();

        const userMessage = { text: userInput, user: "user" };
        setMessages((prev) => [...prev, userMessage]);

        if (!isValidQuery(userInput)) {
            const errorMessage = { text: "Sorry, I can only assist with questions related to food, recipes, or nutrition.", user: "Foodbot 🤖" };
            setMessages((prev) => [...prev, errorMessage]);
            setUserInput("");
            return;
        }

        try {
            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBZd2z4MrtmGWwW0c5lq60icZTPj5nxTC8', // Ensure this key is valid
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: userInput,
                                },
                            ],
                        },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log("Response from API:", response.data);

            const botResponseText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

            const botMessage = {
                text: botResponseText,
                user: "Foodbot 🤖",
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching from Gemini API:", error);
            if (error.response) {
                console.error("Response error data:", error.response.data);
            }
            const errorMessage = { text: "Sorry, I couldn't process that. Please try again later.", user: "Foodbot 🤖" };
            setMessages((prev) => [...prev, errorMessage]);
        }

        setUserInput("");
    };

    return (
        <div style={{marginTop:"-110px"}}>
            <div style={{display:"flex",marginLeft:"90px"}}>
            <h1>Food Chatbot</h1>
            <img style={{width:"45px",height:"45px",marginTop:"28px",marginLeft:"20px"}} src="https://em-content.zobj.net/source/microsoft-teams/363/robot_1f916.png" alt="bot"></img></div>
            <form onSubmit={handleUserInput} style={{display:"flex",flexDirection:"row",columnGap:"20px"}}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="🔍 Quries on Food,Recipes and Nutrional values"
                    required
                />
                <button type="submit" style ={{color:"white",backgroundColor:"blue"}}>Send</button>
            </form>
            <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'scroll',backgroundImage: `linear-gradient(
      hsla(0, 0%, 4%, 0.502), 
      rgba(9, 9, 9, 0.5)
  )`, marginTop:"10px",borderRadius:"10px"}}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.user === "Foodbot 🤖" ? 'left' : 'right' }}>
                        <strong>{msg.user === "Foodbot 🤖" ? "Foodbot 🤖" : "You"}:</strong>
                        <div
    style={{
        marginLeft: '10px', }}
>

                            {msg.user === "Foodbot 🤖" ? formatResponse(msg.text) : msg.text}
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};
