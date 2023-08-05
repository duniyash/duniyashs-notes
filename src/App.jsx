import NoteHeader from "./components/NoteHeader";
import NoteContainer from "./components/NoteContainer";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

function App() {
  const [darkModeState, setDarkModeState] = useState(false);
  const [notes, setNotes] = useState([]);

  async function notesFetchHandler() {
    const [isLoading, setIsLoading] = useState(false);

    try {
      const response = await fetch(
        "https://notes-auth-21184-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json"
      );

      if (!response.ok) {
        throw new Error(`Something went wrong! : ${response.status}`);
      }

      const data = await response.json();

      const loadedNotes = [];

      for (const key in data) {
        loadedNotes.push({
          id: key,
          content: data[key].content,
        });
      }

      setNotes(loadedNotes);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={
        darkModeState ? "bg-slate-900 h-screen" : "bg-slate-100 h-screen"
      }
    >
      <NoteHeader
        darkModeState={darkModeState}
        setDarkModeState={setDarkModeState}
      />
      <NoteForm />
      <NoteContainer />
    </div>
  );
}

export default App;
