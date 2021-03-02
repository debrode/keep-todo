import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";
function App() {
  const [notes,setNote]=useState([]);
  function addNote(note) {
    setNote(prev=>{
      return [...prev,note];
    });
  }
  function deleteNote(id) {
    setNote(prev=>{
     return prev.filter((note,index)=>{
        return index!== id;
      });
    });
  }
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote} />
      {notes.map((note)=>{
         return <Note 
          title={note.title}
          Content={note.Content}
          onDelete={deleteNote}
         />
      })}
      <Footer/>
    </div>
  );
}

export default App;
