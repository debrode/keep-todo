import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

const Local_Key="keepTODO.storage.note";
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
  useEffect(()=>{
    const noteJSON=localStorage.getItem(Local_Key);
    if(noteJSON!=null) setNote(JSON.parse(noteJSON));
  },[])

  useEffect(()=>{
   localStorage.setItem(Local_Key,JSON.stringify(notes));
  },[notes])


  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote} />
      {notes.map((note,index)=>{
         return <Note
          key={index}
          id={index}
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
