import React from "react";
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage"
import TitlePage from "./TitlePage"
import ProfilePage from "./ProfilePage"
import StoryPage from "./StoryPage"
import NewStoryPage from "./NewStoryPage"
import PublishStoryPage from "./PublishStoryPage"

//TitlePage => Done 
//HomePage => Done
//ProfilePage => Done
//StoryPage
//NewStoryPage
//PublishStoryPage
function App() {
  return (
    <div className="App">
      <TitlePage /> 
      <HomePage />
      <ProfilePage />
      <StoryPage />
      <NewStoryPage />
      <PublishStoryPage />
    </div>
  );
}

export default App;
