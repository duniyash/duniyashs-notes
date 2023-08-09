import Note from './Note'
import {
    collection,
    query,
    where,
    getDocs,
    deleteDoc,
} from 'firebase/firestore'
import { db } from '../../config/firestore'
import { useEffect, useState } from 'react'

// username = i709Ujhae3VuFBMLcLqYKdz5k5D3

const NotesPage = (props) => {
    const [note, setNote] = useState([])

    const getNotes = async (userID) => {
        const q = query(collection(db, 'users', userID, 'notes'))

        const querySnapshot = await getDocs(q)
        const newNotes = querySnapshot.docs.map((doc) => doc.data().content)
        setNote([...note, ...newNotes])
    }

    const deleteNote = async (userID, noteContent) => {
        const q = query(
            collection(db, 'users', userID, 'notes'),
            where('content', '==', noteContent)
        )

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref)
        })

        setNote(note.filter((content) => content !== noteContent))
    }

    useEffect(() => {
        getNotes(props.userID)
    }, [])

    return (
        <section className="z-20 flex w-screen flex-col gap-4 p-8 pt-0">
            {note.map((content, index) => (
                <Note
                    key={index}
                    darkModeState={props.darkModeState}
                    content={content}
                    deleteNote={() => deleteNote(props.userID, content)}
                />
            ))}
        </section>
    )
}

export default NotesPage
