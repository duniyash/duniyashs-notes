import Button from '../UI/Button'

const Note = (props) => {
    const timeChanged = props.timeChanged
        ? new Date(props.timeChanged.seconds * 1000).toLocaleString()
        : null

    return (
        <div
            className={`h-fit min-h-fit rounded-lg p-4 font-mono ${
                props.darkModeState ? 'bg-yellow-200' : 'bg-yellow-300'
            }`}
        >
            <p className="mb-4 font-light">{props.content}</p>
            <p className="text-right text-xs">{timeChanged}</p>
            <Button
                isEnabled={true}
                darkModeState={props.darkModeState}
                onClick={props.deleteNote}
            >
                Delete
            </Button>
        </div>
    )
}
export default Note
