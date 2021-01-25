import React, {useState} from "react";
import StoryTitle from "./StoryTitle"
import StoryContent from "./StoryContent"

function NewStoryForm({onSubmit}) {
const [storyTitle, setStoryTitle] = useState("")
const [storyContent, setStoryContent] = useState("")


    // condense storytitle and storycontent 
    return (
        <div>
            <StoryTitle setStoryTitle={setStoryTitle} onSubmit={onSubmit}/>
            <StoryContent setStoryContent={setStoryContent} onSubmit={onSubmit} />
        </div>
    )

}

export default NewStoryForm;