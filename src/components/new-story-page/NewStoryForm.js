import React from "react";
import StoryTitle from "./StoryTitle"
import StoryContent from "./StoryContent"
import NewStoryInputs from "./NewStoryInputs"
// import DropdownButton from "react-bootstrap/DropdownButton"
// import Dropdown from "react-bootstrap/Dropdown"

function NewStoryForm({
  storyTitle,
  setStoryTitle,
  storyContent,
  setStoryContent,
  readTime,
  setReadTime,
  storyTopic,
  setStoryTopic,
  topics
}) {
  return (
    <div>
      <StoryTitle storyTitle={storyTitle} setStoryTitle={setStoryTitle} />
      <StoryContent
        storyContent={storyContent}
        setStoryContent={setStoryContent}
      />
      <NewStoryInputs
        readTime={readTime}
        setReadTime={setReadTime}
        storyTopic={storyTopic}
        setStoryTopic={setStoryTopic}
        topics={topics}
      />
    </div>
  );
}

export default NewStoryForm;