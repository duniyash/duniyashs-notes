function NoteForm() {
  function handleSubmit() {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-4 flex flex-col min-w-fit min-h-52 bg-yellow-200 font-mono  mx-8 content-between"
    >
      <textarea
        className="bg-yellow-200 resize-none text-lg focus:outline-none"
        name="noteContent"
        id="noteContent"
        cols="30"
        rows="10"
        placeholder="what do you want to write?"
      ></textarea>
      <button
        className="font-extralight p-2 border-2 border-teal-400  bg-teal-400 hover:bg-white object-right  transition ease-in-out"
        type="submit"
      >
        save
      </button>
    </form>
  );
}

export default NoteForm;
