function NoteHeader({ darkModeState, setDarkModeState }) {
  return (
    <div className="flex flex-row font-mono w-screen p-8 justify-between">
      <h1
        className={`text-4xl font-semibold ${
          darkModeState ? "text-slate-300" : "text-black"
        }`}
      >
        notes
      </h1>
      <button
        className="font-extralight p-2 border-2 border-teal-400  bg-teal-400 hover:bg-white object-right h-fit w-fit transition ease-in-out"
        onClick={() => {
          darkModeState ? setDarkModeState(false) : setDarkModeState(true);
        }}
      >
        change theme
      </button>
    </div>
  );
}

export default NoteHeader;
