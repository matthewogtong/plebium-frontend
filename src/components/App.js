import React, {useEffect, useState} from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom"
import '../App.css';
// import { useParams} from "react-router";
import HomePage from "./home-page/HomePage"
import TitlePage from "./title-page/TitlePage"
import ProfilePage from "./profile-page/ProfilePage"
import StoryPage from "./story-page/StoryPage"
import NewStoryPage from "./new-story-page/NewStoryPage"


function App() {
  const [topics, setTopics] = useState([])
  const [stories, setStories] = useState([])
  const [responses, setResponses] = useState([])

  // NEW STORY STATES
  const [storyTitle, setStoryTitle] = useState("")
  const [storyContent, setStoryContent] = useState("")
  const [readTime, setReadTime] = useState("")
  const [storyTopic, setStoryTopic] = useState("")
  const [storySnaps, setStorySnaps] = useState(0)
  const [storyId, setStoryId] = useState(0)
 
  const [newResponse, setNewResponse] = useState("")


  const [currentUser, setCurrentUser] = useState([])

  // LOGIN STATES
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginUsername, setLoginUsername] = useState("")
  const [userStories, setUserStories] = useState([])
  const [userBookmarks, setUserBookmarks] = useState([])

  // CREATE ACCOUNT STATES
  const [newUsername, setNewUsername] = useState("")
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newBio, setNewBio] = useState("")

  let history = useHistory();
  // const params = useParams();

  //USER TOPICS

  useEffect(() => {
    fetch("http://localhost:3000/topics")
      .then((r) => r.json())
      .then(setTopics)
  }, [])

  // STORIES

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((r) => r.json())
      .then(setStories)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/responses")
      .then((r) => r.json())
      .then(setResponses)
  }, [])

// HANDLE LOGIN FUNCTION
const handleLoginSubmit = () => {
  fetch("http://localhost:3000/users")
    .then(r => r.json())
    .then(userArr => {
      userArr.forEach(user => { 
        if (user.username === loginUsername) {
          setIsLoggedIn(true)
          setCurrentUser(user) 
          setUserStories(user.stories)
          setUserBookmarks(user.bookmarks)
        }
      })
    })
}

// HANDLE RESPONSE SUBMIT
const handleResponseSubmit = (e) => {
  e.preventDefault()

  fetch("http://localhost:3000/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: newResponse
    })
  })
    .then(r => r.json())
    .then(newResp => {
      setNewResponse(newResp.content)

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
      setUserStories(newUser.stories)
    })
}


//NEW STORY SUBMIT HANDLER
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
    .then(resObj => {
      setStoryTitle(resObj.title)
      setStoryContent(resObj.content)
      setStoryId(resObj.id)
      setStorySnaps(resObj.snaps)
      // setReadTime(resObj.readTime)
      history.push(`/story/${resObj.id}`)
    }
  )
}

const handleDeleteProfileStory = (storyId) => {
  return fetch(`http://localhost:3000/stories/${storyId}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then((deletedStory) => {
      const updatedStoriesArray = userStories.filter(
        (story) => story.id !== deletedStory.id
      )
      setUserStories(updatedStoriesArray)
    })
};

const handleDeleteBookmark = (bookmarkId) => {
  fetch(`http://localhost:3000/bookmarks/${bookmarkId}`, {
    method: "DELETE"
  })
    .then(r => r.json())
    .then(deletedBookmark => {
      const updatedBookmarks = userBookmarks.filter(
        (bookmark) => bookmark.id !== deletedBookmark.id
      )
      setUserBookmarks(updatedBookmarks)
    })
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
            handleDeleteBookmark={handleDeleteBookmark}
            userBookmarks={userBookmarks}
            setUserBookmarks={setUserBookmarks}
            topics={topics}
            currentUser={currentUser}
            stories={stories}
          />
        </Route>
        <Route path="/profile/:id">
          <ProfilePage
            currentUser={currentUser}
            handleDeleteProfileStory={handleDeleteProfileStory}
            userStories={userStories}
          />
        </Route>
        <Route path="/story/:id">
          <StoryPage
            responses={responses}
            storyTitle={storyTitle}
            storyContent={storyContent}
            readTime={readTime}
            currentUser={currentUser}
            handleResponseSubmit={handleResponseSubmit}
            newResponse={newResponse}
            setNewResponse={setNewResponse}
            storySnaps={storySnaps}
            setStorySnaps={setStorySnaps}
            storyId={storyId}
            setStoryId={setStoryId}
          />
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
            topics={topics}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App
