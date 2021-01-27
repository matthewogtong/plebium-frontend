import React from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"


function NewStoryPage({storyTitle, storyContent, setStoryTitle, setStoryContent, readTime, setReadTime, handleSubmit}) {
    // set read_time
    // set topic 

    return (
        <div>
            <NewStoryHeader/>
            <form onSubmit={handleSubmit}>
                <NewStoryForm 
                    storyContent={storyContent} 
                    storyTitle={storyTitle} 
                    setStoryContent={setStoryContent} 
                    setStoryTitle={setStoryTitle} 
                    readTime={readTime}
                    setReadTime={setReadTime}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default NewStoryPage;