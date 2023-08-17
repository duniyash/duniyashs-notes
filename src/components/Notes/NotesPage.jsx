import Note from './Note'
import {
    collection,
    query,
    where,
    getDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    orderBy,
    addDoc,
    serverTimestamp,
    doc,
} from 'firebase/firestore'
import { db } from '../../config/firestore'
import { useEffect, useState } from 'react'
import NotesForm from './NotesForm'

// username = i709Ujhae3VuFBMLcLqYKdz5k5D3

const NotesPage = (props) => {
    const [note, setNote] = useState([])
    const [loading, setLoading] = useState()

    const addNote = async (userID, content) => {
        const docRef = await addDoc(collection(db, 'users', userID, 'notes'), {
            content: content,
            timeChanged: serverTimestamp(),
        })

        const docSnapshot = await getDoc(docRef)
        const id = docSnapshot.id

        setNote([
            ...note,
            { id, content, timeChanged: docSnapshot.data().timeChanged },
        ])

        console.log(note)
    }

    const getNotes = (userID) => {
        setLoading(true)

        const q = query(
            collection(db, 'users', userID, 'notes'),
            orderBy('timeChanged', 'desc')
        )

        return onSnapshot(q, (querySnapshot) => {
            const newNotes = querySnapshot.docs.map((doc) => {
                console.log(doc)
                const data = doc.data()
                return {
                    id: doc.id,
                    content: data.content,
                    timeChanged: data.timeChanged,
                }
            })
            setNote(...note, newNotes)
            setLoading(false)
        })
    }

    const deleteNote = async (userID, noteID) => {
        console.log(userID, noteID)

        const docRef = doc(db, 'users', userID, 'notes', noteID)
        deleteDoc(docRef)

        setNote(note.filter((note) => note.id !== noteID))
    }

    useEffect(() => {
        getNotes(props.userID)
    }, [])

    return (
        <>
            <section className="sticky z-20 flex min-h-screen w-screen flex-wrap content-start items-start gap-2 overflow-y-auto p-8 pt-4">
                <NotesForm
                    darkModeState={props.darkModeState}
                    userID={props.userID}
                    addNote={addNote}
                />

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    Array.isArray(note) &&
                    note.map((note) => (
                        <Note
                            key={note.id}
                            darkModeState={props.darkModeState}
                            content={note.content}
                            timeChanged={note.timeChanged}
                            deleteNote={() => deleteNote(props.userID, note.id)}
                        />
                    ))
                )}
            </section>
        </>
    )
}

export default NotesPage
