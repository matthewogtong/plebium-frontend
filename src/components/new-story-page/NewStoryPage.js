import React from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"
// import { withRouter } from "react-router-dom"


function NewStoryPage({
  storyTitle,
  storyContent,
  setStoryTitle,
  setStoryContent,
  readTime,
  setReadTime,
  storyTopic,
  setStoryTopic,
  handleSubmit,
  topics
}) {
  // "back" button within header
  return (
    <div>
      <NewStoryHeader handleSubmit={handleSubmit}/>
      <form onSubmit={handleSubmit}>
        <NewStoryForm
          storyContent={storyContent}
          storyTitle={storyTitle}
          setStoryContent={setStoryContent}
          setStoryTitle={setStoryTitle}
          readTime={readTime}
          setReadTime={setReadTime}
          storyTopic={storyTopic}
          setStoryTopic={setStoryTopic}
          topics={topics}
        />
        <input type="submit" value="Publish Story" />
      </form>
    </div>
  );
}

export default NewStoryPage;