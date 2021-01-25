import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom"
import '../App.css';
import HomePage from "./home-page/HomePage"
import TitlePage from "./title-page/TitlePage"
import ProfilePage from "./profile-page/ProfilePage"
import StoryPage from "./story-page/StoryPage"
import NewStoryPage from "./new-story-page/NewStoryPage"
import PublishStoryPage from "./publish-story/PublishStoryPage"


function App() {
  const [topics, setTopics] = useState([])
  const [users, setUsers] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((r) => r.json())
      .then(setTopics);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((r) => r.json())
      .then(setStories);
  }, []);

function handleAddStory(newStory) {
  const updatedStoriesArray = [newStory, ...stories]
  setStories(updatedStoriesArray)

}

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <TitlePage /> 
        </Route>
        <Route path="/home">
          <HomePage topics={topics}/>
        </Route>
        <Route path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route path="/story">
          <StoryPage />
        </Route>
        <Route path="/new-story">
          <NewStoryPage onAddStory={handleAddStory}/>
        </Route>
        <Route path="/publish-story">
          <PublishStoryPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
