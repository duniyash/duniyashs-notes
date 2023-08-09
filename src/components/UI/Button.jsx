const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`rounded-lg p-2 font-bold text-gray-800 transition duration-300 ease-in-out ${
                props.darkModeState
                    ? 'bg-teal-600 active:bg-teal-200'
                    : 'bg-teal-400 active:bg-teal-700 '
            }`}
        >
            {props.children}
        </button>
    )
}

export default Button
