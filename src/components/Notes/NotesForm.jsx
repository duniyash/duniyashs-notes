import Button from '../UI/Button'
import useFormInput from '../../hooks/useFormInput'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../config/firestore'

const NotesForm = (props) => {
    const {
        value: enteredNote,
        isValid: enteredNoteIsValid,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useFormInput((value) => value !== '')

    const NoteSubmissionHandler = async (event) => {
        event.preventDefault()

        // * Validation
        if (!enteredNoteIsValid) {
            return
        }

        await addDoc(collection(db, 'users', props.userID, 'notes'), {
            content: enteredNote,
            timeAdded: serverTimestamp(),
        })

        console.log(enteredNote)
        resetNameInput()
    }

    return (
        <form
            className={`flex h-fit flex-col gap-4 rounded-lg p-4 font-mono ${
                props.darkModeState ? 'bg-yellow-200' : 'bg-yellow-300'
            }`}
            onSubmit={NoteSubmissionHandler}
        >
            <input
                className={`bg rounded-lg bg-white p-2 font-bold text-gray-800 transition duration-300  ease-in-out`}
                type="text"
                placeholder="enter text"
                id="name"
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={enteredNote}
            />
            <Button>Submit</Button>
        </form>
    )
}

export default NotesForm
