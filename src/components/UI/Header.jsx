import Button from "./Button";
import { CgDarkMode } from "react-icons/cg";

const Header = (props) => {
  const darkmodeHandler = () => {
    props.darkModeState
      ? props.setDarkModeState(false)
      : props.setDarkModeState(true);
  };

  return (
    <header className="flex align-middle justify-between w-screen p-8 text-2xl font-bold">
      <h1
        className={`font-mono ${
          props.darkModeState ? "text-white" : "text-gray-600"
        }`}
      >
        //notes
      </h1>
      <Button
        className={`${props.darkModeState ? "text-white" : "text-gray-600"}`}
        onClick={darkmodeHandler}
      >
        <CgDarkMode />
      </Button>
    </header>
  );
};

export default Header;
