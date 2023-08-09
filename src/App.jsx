import { useEffect, useState } from 'react'

import Header from './components/UI/Header'
import Note from './Notes/Note'

function App() {
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
            <section className="z-20 flex w-screen flex-col gap-4 p-8 pt-0">
                <Note darkModeState={darkModeState} />
            </section>
        </main>
    )
}

export default App
