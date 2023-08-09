import Button from './Button'
import { CgDarkMode } from 'react-icons/cg'

const Header = (props) => {
    return (
        <header
            className={`sticky top-0 z-30 flex w-screen justify-between p-8 py-4 align-middle text-2xl font-bold transition duration-300 ease-in-out ${
                props.darkModeState ? 'bg-slate-900 ' : 'bg-slate-100 '
            }`}
        >
            <h1
                className={`font-mono ${
                    props.darkModeState ? 'text-gray-200' : 'text-gray-00'
                }`}
            >
                //notes
            </h1>
            <Button
                darkModeState={props.darkModeState}
                isEnabled={true}
                onClick={props.setDarkModeState}
            >
                <CgDarkMode />
            </Button>
        </header>
    )
}

export default Header
