import React, {useEffect, useState} from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom"
import '../App.css';
import HomePage from "./home-page/HomePage"
import TitlePage from "./title-page/TitlePage"
import ProfilePage from "./profile-page/ProfilePage"
import StoryPage from "./story-page/StoryPage"
import NewStoryPage from "./new-story-page/NewStoryPage"
import PublishStoryPage from "./publish-story/PublishStoryPage"


function App() {
  const [topics, setTopics] = useState([])
  const [stories, setStories] = useState([])

  const [storyTitle, setStoryTitle] = useState("")
  const [storyContent, setStoryContent] = useState("")
  const [readTime, setReadTime] = useState("")
  const [storyTopic, setStoryTopic] = useState("")


  const [currentUser, setCurrentUser] = useState([]);

  // LOGIN STATES
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginUsername, setLoginUsername] = useState("")

  // CREATE ACCOUNT STATES
  const [newUsername, setNewUsername] = useState("")
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newBio, setNewBio] = useState("")

  let history = useHistory();

  //USER TOPICS

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((r) => r.json())
      .then(setTopics);
  }, []);

  // STORIES

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((r) => r.json())
      .then(setStories);
  }, []);

// HANDLE LOGIN FUNCTION
const handleLoginSubmit = () => {
  fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userArr => {
      userArr.forEach(user => { 
        if (user.username === loginUsername) {
          setIsLoggedIn(true)
          setCurrentUser(user) 
        }
      })
    })
}

// HANDLE CREATE ACCOUNT FUNCTION
const handleCreateAccountSubmit = () => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: newUsername,
      first_name: newFirstName,
      last_name: newFirstName,
      bio: newBio
    })
  })
    .then(r => r.json())
    .then(newUser => {
      setCurrentUser(newUser)
      setIsLoggedIn(true)
    })
}

function handleResponseSubmit() {

}

function handleAddStory(newStory) {
  const updatedStoriesArray = [newStory, ...stories]
  setStories(updatedStoriesArray)
}

function handleRemoveStory(id) {
  const updatedStoriesArray = stories.filter((story) => story.id !== id);
  setStories(updatedStoriesArray);
}

// right now, it's always rendering as user1. should we remove this so it 
// persists with currentUser?
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
      content: storyContent,
      read_time: readTime
    })
  })
    .then(r => r.json())
    .then(console.log)
    setStoryTitle("")
    setStoryContent("")

    history.push('/home')
    
}

//PROFILE PARAMS


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {!isLoggedIn ? (
            <TitlePage
              loginUsername={loginUsername}
              setLoginUsername={setLoginUsername}
              handleLoginSubmit={handleLoginSubmit}
              newUsername={newUsername}
              setNewUsername={setNewUsername}
              newFirstName={newFirstName}
              setNewFirstName={setNewFirstName}
              newLastName={newLastName}
              setNewLastName={setNewLastName}
              newBio={newBio}
              setNewBio={setNewBio}
              handleCreateAccountSubmit={handleCreateAccountSubmit}
            />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>

        <Route path="/home">
          <HomePage 
          topics={topics} 
          currentUser={currentUser}
          stories={stories}
          />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage currentUser={currentUser} onDeleteStory={handleRemoveStory}/>
        </Route>
        <Route path="/story">
          <StoryPage currentUser={currentUser}/>
        </Route>
        <Route path="/new-story">
          <NewStoryPage
            handleSubmit={handleSubmit}
            storyTitle={storyTitle}
            setStoryTitle={setStoryTitle}
            storyContent={storyContent}
            setStoryContent={setStoryContent}
            readTime={readTime}
            setReadTime={setReadTime}
            storyTopic={storyTopic}
            setStoryTopic={setStoryTopic}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
