function NoteHeader() {
  function ChangeTheme() {}

  return (
    <div className="flex flex-row font-mono w-screen p-8 justify-between">
      <h1 className="text-3xl  font-semibold ">notes</h1>
      <button className="font-extralight p-2 bg-teal-600 object-right h-fit w-fit" onClick={ChangeTheme}>
        change theme
      </button>
    </div>
  );
}

export default NoteHeader;