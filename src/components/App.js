import React, {useEffect, useState} from "react";
import { Route, Switch, Redirect } from "react-router-dom"
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

  const [currentUser, setCurrentUser] = useState(null);

  // LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginUsername, setLoginUsername] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((r) => r.json())
      .then(setTopics);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((r) => r.json())
      .then(setStories);
  }, []);


  // USER FETCH
   // auto-login
  //  useEffect(() => {
  //   fetch("http://localhost:3000/autologin")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }, []);

// HANDLE LOGIN FUNCTION
const handleLoginSubmit = () => {
  console.log("logged in")
  fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userArr => {
      userArr.forEach(user => { 
        if (user.username === loginUsername) {
          setIsLoggedIn(true)
          setCurrentUser(user = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name
          }) 
        }
      })
    })
}

console.log(isLoggedIn)
console.log(currentUser)
console.log(loginUsername)



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
          {!isLoggedIn ? (
            <TitlePage
              loginUsername={loginUsername}
              setLoginUsername={setLoginUsername}
              handleLoginSubmit={handleLoginSubmit}
            />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>
        <Route path="/home">
          <HomePage topics={topics} />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage users={users} stories={stories} />
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
