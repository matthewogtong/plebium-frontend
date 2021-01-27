import React from "react";
import MainHeader from "../MainHeader"
import TrendingList from "../TrendingList"
import BookmarkList from "./BookmarkList"
import TopicList from "./TopicList"
// import NavBar from "../NavBar";

function HomePage({ topics, currentUser, stories, userBookmarks, setUserBookmarks, handleDeleteBookmark }) {

  return (
    <div id="home-page">
      <MainHeader currentUser={currentUser} />
      <TopicList topics={topics} currentUser={currentUser} />
      <TrendingList
        userBookmarks={userBookmarks}
        setUserBookmarks={setUserBookmarks}
        currentUser={currentUser}
        stories={stories}
      />
      <BookmarkList
        handleDeleteBookmark={handleDeleteBookmark}
        userBookmarks={userBookmarks}
        setUserBookmarks={setUserBookmarks}
      />
    </div>
  );
}

export default HomePage;