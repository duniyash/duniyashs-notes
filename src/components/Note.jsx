import React from "react";

function Note() {
  return (
    <div className="flex flex-col w-full min-h-52 bg-yellow-200 font-mono p-4 content-between">
      <span className="text-lg h-full mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        vitae commodi quo voluptatibus qui atque, doloribus tempora dignissimos
        sint corporis iusto deserunt libero consequatur dolor fugiat ea laborum
        culpa fuga?
      </span>
      <div className="flex flex-row justify-between w-full">
        <p className="text-sm underline p-0 p-2">12/07/2023</p>
        <button className="p-2 bg-white">Open</button>
      </div>
    </div>
  );
}

export default Note;
