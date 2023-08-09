import Button from '../UI/Button'
import useFormInput from '../../hooks/useFormInput'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../config/firestore'

const NotesForm = (props) => {
    const {
        value: enteredNote,
        isValid: enteredNoteIsValid,
        valueChangeHandler: noteChangedHandler,
        inputBlurHandler: noteBlurHandler,
        reset: resetNameInput,
    } = useFormInput((value) => value !== '')

    const NoteSubmissionHandler = async (event) => {
        event.preventDefault()

        // * Validation
        if (!enteredNoteIsValid) {
            return
        }

        props.addNote(props.userID, enteredNote)

        console.log(enteredNote)
        resetNameInput()
    }

    return (
        <form
            className={`sticky flex h-fit min-w-[25%] flex-col gap-4 rounded-lg p-4 font-mono ${
                props.darkModeState ? 'bg-yellow-200' : 'bg-yellow-300'
            }`}
            onSubmit={NoteSubmissionHandler}
        >
            <input
                className={`bg rounded-lg bg-white p-2 font-bold text-gray-800 transition duration-300 ease-in-out`}
                type="text"
                placeholder="enter text"
                id="note"
                autoComplete="off"
                onChange={noteChangedHandler}
                onBlur={noteBlurHandler}
                value={enteredNote}
            />
            <Button
                isEnabled={enteredNoteIsValid}
                darkModeState={props.darkModeState}
            >
                {enteredNoteIsValid ? 'Submit' : '↑↑ Write some shit ↑↑'}
            </Button>
        </form>
    )
}

export default NotesForm
