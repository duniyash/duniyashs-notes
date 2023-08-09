import { useState } from 'react'

const Button = (props) => {
    return (
        <button
            disabled={!props.isEnabled}
            onClick={props.onClick}
            className={`rounded-lg p-2 font-bold text-gray-800 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-400 ${
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
