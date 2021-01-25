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

  const [storyTitle, setStoryTitle] = useState("")
  const [storyContent, setStoryContent] = useState("")


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

function handleSubmit(e) {
  e.preventDefault()
  
  fetch("http://localhost:3000/stories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user_id: 1,
      topic_id: 1,
      title: storyTitle,
      content: storyContent
    })
  })
    .then(r => r.json())
    .then(console.log)
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
          <ProfilePage users={users} stories={stories}/>
        </Route>
        <Route path="/story">
          <StoryPage />
        </Route>
        <Route path="/new-story">
          <NewStoryPage 
            handleSubmit={handleSubmit} 
            storyTitle={storyTitle} 
            setStoryTitle={setStoryTitle} 
            storyContent={storyContent} 
            setStoryContent={setStoryContent} 
          />
        </Route>
        <Route path="/publish-story">
          <PublishStoryPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
