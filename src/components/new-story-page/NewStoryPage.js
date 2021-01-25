import React, {useState} from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"


function NewStoryPage({storyTitle, storyContent, setStoryTitle, setStoryContent, handleSubmit}) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return (
        <div>
            <NewStoryHeader />
            <NewStoryForm storyContent={storyContent} storyTitle={storyTitle} onSubmit={handleSubmit} />
            <button onClick={handleSubmit}>submit new story</button>
        </div>
    )

}

export default NewStoryPage;