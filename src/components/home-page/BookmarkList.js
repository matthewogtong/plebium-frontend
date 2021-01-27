import React from "react";
import Bookmark from "./Bookmark"

function BookmarkList({ userBookmarks, setUserBookmarks, handleDeleteBookmark }) {

  let bookmarkedStories;

  if (userBookmarks) {
    bookmarkedStories = userBookmarks.map((bookmark) => (
      <Bookmark
        key={bookmark.id}
        bookmark={bookmark}
        story={bookmark.story}
        userBookmarks={userBookmarks}
        setUserBookmarks={setUserBookmarks}
        handleDeleteBookmark={handleDeleteBookmark}
      />
    ));
  } else {
    bookmarkedStories = <p>No bookmarked stories to display!</p>;
  }
  return (
    <div className="bookmark-list">
      <h6 className="bookmark-list-header">BOOKMARKED STORIES</h6>
      <div className="bookmark-story-container">{bookmarkedStories}</div>
    </div>
  );
}

export default BookmarkList;