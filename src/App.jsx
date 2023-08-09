import { useEffect, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'

import Header from './components/UI/Header'
import NotesPage from './components/Notes/NotesPage'

function App() {
    //  TODO : convert Darkmode into it's own custom hook

    const [darkModeState, setDarkModeState] = useState(() => {
        const darkmodeLocalStorage = localStorage.getItem('darkModeState')

        let initialDarkmodeState

        switch (darkmodeLocalStorage) {
            case null:
                localStorage.setItem('darkModeState', JSON.stringify(false))
                initialDarkmodeState = false
                break
            case 'false':
                initialDarkmodeState = false
                localStorage.setItem(
                    'darkModeState',
                    JSON.stringify(initialDarkmodeState)
                )
                break
            case 'true':
                initialDarkmodeState = true
                localStorage.setItem(
                    'darkModeState',
                    JSON.stringify(initialDarkmodeState)
                )
                break
        }

        return initialDarkmodeState
    })

    const darkModeStateHandler = () => {
        setDarkModeState(darkModeState ? false : true)
        localStorage.setItem('darkModeState', JSON.stringify(!darkModeState))
    }

    const userID = 'i709Ujhae3VuFBMLcLqYKdz5k5D3'

    return (
        <main
            className={`h-screen w-screen overflow-hidden transition duration-300 ease-in-out  ${
                darkModeState ? 'bg-slate-900 ' : 'bg-slate-100 '
            }`}
        >
            <Header
                darkModeState={darkModeState}
                setDarkModeState={darkModeStateHandler}
            />
            <NotesPage darkModeState={darkModeState} userID={userID} />
        </main>
    )
}

export default App
