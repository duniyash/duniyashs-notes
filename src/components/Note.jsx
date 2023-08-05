import React from "react";
import { MdDelete } from "react-icons/md";

function Note() {
  return (
    <div className="flex flex-col w-full min-h-52 bg-yellow-200 font-mono p-4 content-between">
      <span className="text-lg h-full mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        vitae commodi quo voluptatibus qui atque, doloribus tempora dignissimos
        sint corporis iusto deserunt libero consequatur dolor fugiat ea laborum
        culpa fuga?
      </span>
      <div className="flex flex-row items-center justify-between w-full">
        <button className="font-extralight text-lg p-2 bg-white hover:bg-red-500 hover:text-white object-right h-fit w-fit transition ease-in-out">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Note;
