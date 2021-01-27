import React from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"
import { withRouter } from "react-router-dom"


function NewStoryPage({topics, storyTitle, storyContent, setStoryTitle, setStoryContent, readTime, setReadTime, storyTopic, setStoryTopic, handleSubmit}) {
    

    return (
        <div>
            <NewStoryHeader/>
            <form onSubmit={handleSubmit} action='/home.html'>
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
    )

}

export default withRouter(NewStoryPage);