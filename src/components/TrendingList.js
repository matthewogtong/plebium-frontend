import React from "react";
import TrendingStory from "./TrendingStory"

function TrendingList({ currentUser, stories, userBookmarks, setUserBookmarks }) {

    let trendingStories;
    if (stories) {
      trendingStories = stories.map((story) => <TrendingStory key={story.id} story={story} currentUser={currentUser} userBookmarks={userBookmarks}
      setUserBookmarks={setUserBookmarks}/>)
    } else {
      trendingStories = <p>No stories to display!</p>;
    }

  return (
    <div className="trending-list">
      <h6 className="trending-list-header">TRENDING STORIES</h6>
      <div className="trending-story-container">
        {trendingStories}
      </div>
    </div>
  )
}

export default TrendingList;