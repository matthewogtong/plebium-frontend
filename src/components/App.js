import React from "react";
import { Route, Switch } from "react-router-dom"
import logo from '../logo.svg';
import '../App.css';
import HomePage from "./home-page/HomePage"
import TitlePage from "./title-page/TitlePage"
import ProfilePage from "./profile-page/ProfilePage"
import StoryPage from "./story-page/StoryPage"
import NewStoryPage from "./new-story-page/NewStoryPage"
import PublishStoryPage from "./publish-story/PublishStoryPage"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <TitlePage /> 
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route path="/story">
          <StoryPage />
        </Route>
        <Route path="/new-story">
          <NewStoryPage />
        </Route>
        <Route path="/publish-story">
          <PublishStoryPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
