import { useState } from 'react';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FoodieIntro } from './Intro';
import { Login } from './Login page';
import { ForgotPassword } from './Forgot Password';
import { SignupForm } from './Sign up';
import { Telugu } from './Telugu';
import { Hindi } from './Hindi';
import { Tamil } from './Tamil';
import { Malayalam } from './Malayalam';
import { Interface } from './Success';
import { FoodChatbot } from './Food Chatbot';
import { NutritionFetcher } from './Calorie estimation';
import { Video } from './Cooking';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FoodieIntro />} />
          <Route path="/Login" element ={<Login/>} />
          <Route path ="/Forgot" element ={<ForgotPassword/>} />
          <Route path='/Signup' element ={<SignupForm/>} />
          <Route path="/Telugu" element={<Telugu/>} />
          <Route path="/Hindi" element={<Hindi/>} />
          <Route path="/Tamil" element={<Tamil/>} />
          <Route path="/Malayalam" element={<Malayalam/>} />
          <Route path="/Interface" element={<Interface/>} />
          <Route path="/Food chatbot" element={<FoodChatbot/>} />
          <Route path="/Calorie estimation" element={<NutritionFetcher/>} />
          <Route path="/Cooking info" element={<Video/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
