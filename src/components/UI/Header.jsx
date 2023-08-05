import Button from './Button';
import { CgDarkMode } from 'react-icons/cg';

const Header = (props) => {
  const darkmodeHandler = () => {
    props.darkModeState ? props.setDarkModeState(false) : props.setDarkModeState(true);
  };

  return (
    <header className="flex w-screen justify-between p-8 align-middle text-2xl  font-bold transition duration-300 ease-in-out">
      <h1 className={tw`font-mono ${props.darkModeState ? 'text-gray-200' : 'text-gray-00'}`}>//notes</h1>
      <Button onClick={darkmodeHandler} darkModeState={props.darkModeState}>
        <CgDarkMode />
      </Button>
    </header>
  );
};

export default Header;
