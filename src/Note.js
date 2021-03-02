import React from "react";

function Note(prop){
    return (
       <div className="note">
           <h1>{prop.title}</h1>
           <p>{prop.Content}</p>
       </div>
    );
}

export default Note;