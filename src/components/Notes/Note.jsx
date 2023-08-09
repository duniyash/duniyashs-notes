import Button from '../UI/Button'

const Note = (props) => {
    return (
        <div
            className={`h-fit rounded-lg p-4 font-mono ${
                props.darkModeState ? 'bg-yellow-200' : 'bg-yellow-300'
            }`}
        >
            <p className="mb-4 font-light">{props.content}</p>
            <Button
                darkModeState={props.darkModeState}
                onClick={props.deleteNote}
            >
                Delete
            </Button>
        </div>
    )
}
export default Note
