import React from "react";

function CreateArea(prop){
    return (
       <div >
           <form>
               <input name="title" placeholder="title"/>
               <textarea name=" content" placeholder="content"/>
               <button>Add</button>
           </form>
           
       </div>
    );
}

export default CreateArea;