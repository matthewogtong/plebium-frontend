import React from "react";
import Bookmark from "./Bookmark"

function BookmarkList({ currentUser }) {

  let bookmarkStories;
  if (currentUser.bookmarks) {
    bookmarkStories = currentUser.bookmarks.map((bookmark) => (
      <Bookmark key={bookmark.id} bookmark={bookmark.story} />
    ));
  } else {
    bookmarkStories = <p>No bookmarked stories to display!</p>;
  }
  return (
    <div className="bookmark-list">
      <h6 className="bookmark-list-header">BOOKMARKED STORIES</h6>
      <div className="bookmark-story-container">{bookmarkStories}</div>
    </div>
  );
}

export default BookmarkList;