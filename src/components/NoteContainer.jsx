import { useState } from "react";
import Note from "./Note";

function NoteContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-screen pt-0 p-8 my-8">
      <Note />
    </div>
  );
}

export default NoteContainer;
