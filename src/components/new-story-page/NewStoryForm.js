import React from "react";
import StoryTitle from "./StoryTitle"
import StoryContent from "./StoryContent"

function NewStoryForm({ storyTitle, setStoryTitle, storyContent, setStoryContent }) {

    // condense storytitle and storycontent 
    return (
        <div>
            <StoryTitle storyTitle={storyTitle} setStoryTitle={setStoryTitle}/>
            <StoryContent storyContent={storyContent} setStoryContent={setStoryContent}/>
        </div>
    )

}

export default NewStoryForm;