import React from "react";
import NewStoryHeader from "./NewStoryHeader"
import NewStoryForm from "./NewStoryForm"


function NewStoryPage({storyTitle, storyContent, setStoryTitle, setStoryContent, handleSubmit}) {

    return (
        <div>
            <NewStoryHeader/>
            <form onSubmit={handleSubmit}>
                <NewStoryForm 
                    storyContent={storyContent} 
                    storyTitle={storyTitle} 
                    setStoryContent={setStoryContent} 
                    setStoryTitle={setStoryTitle} 
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default NewStoryPage;