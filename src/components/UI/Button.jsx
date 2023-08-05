const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={tw`rounded-lg p-2 transition  duration-300 ease-in-out ${
        props.darkModeState ? 'bg-teal-600 text-gray-200' : 'bg-teal-400 text-gray-800'
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
