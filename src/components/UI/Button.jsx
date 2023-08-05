const Button = (props) => {
  return (
    <button onClick={props.onClick} className="bg-teal-400 rounded-lg p-2">
      {props.children}
    </button>
  );
};

export default Button;
