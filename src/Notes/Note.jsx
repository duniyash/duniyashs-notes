import Button from '../components/UI/Button'

const Note = (props) => {
    let content

    if (props.content == !null) {
        content = props.content
    } else {
        content =
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

    return (
        <div
            className={`h-fit rounded-lg p-4 font-mono ${
                props.darkModeState ? 'bg-yellow-200' : 'bg-yellow-300'
            }`}
        >
            <p className="mb-4 font-light">{content}</p>
            <Button darkModeState={props.darkModeState}>Delete</Button>
        </div>
    )
}

export default Note
