import type { SessionNote } from 'domain/medical'
import { useState } from 'react'
import { SessionNoteCard, type SessionNoteCardProps } from './SessionNote'
import { useDeletePatientSessionNote } from 'application/deletePatientSessionNote'
import { useUpdatePatientSessionNotes } from 'application/updatePatientSessionNotes'
import { SessionNoteCreationModal } from 'ui/components/patients/modals/SessionNoteCreation'
import { Dialog } from 'ui/components/dialog'
import './session-notes-list.css'
import { EditNoteModal } from 'ui/components/patients/modals/EditNote'

type SessionNotesListProps = Omit<SessionNoteCardProps, 'note'> & {
  notes: SessionNote[]
}

export function SessionNotesList({ notes }: SessionNotesListProps) {
  const { deleteSessionNote } = useDeletePatientSessionNote()
  const { updateSessionNote } = useUpdatePatientSessionNotes()

  const [selectedNote, setSelectedNote] = useState<SessionNote | null>(null)

  const handleUpdateSession = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const noteId = selectedNote?.id
    const patientId = selectedNote?.patientId
    setSelectedNote(null)

    const data = new FormData(e.currentTarget)
    const payload: Partial<SessionNote> = {
      note: data.get('note') as string,
      date: data.get('date') as string,
      updatedAt: new Date().toISOString(),
    }

    await updateSessionNote(patientId as UUID, noteId as UUID, payload)
  }

  if (notes.length === 0) {
    return (
      <section className="session-notes-list__container">
        <h3>Latest sessions</h3>
        <p>There are no notes</p>
      </section>
    )
  }

  return (
    <section className="session-notes-list__container">
      <header className="session-notes-list__header">
        <h3 className="session-notes-list__header__title">Latest sessions</h3>
        <SessionNoteCreationModal patientId={notes[0].patientId} />
      </header>
      <ul className="session-notes-list">
        {notes.map(note => (
          <li key={note.id}>
            <SessionNoteCard
              key={note.id}
              note={note}
              onDelete={() => deleteSessionNote(note.patientId, note.id)}
              setSelectedNote={setSelectedNote}
            />
          </li>
        ))}
      </ul>
      <Dialog open={!!selectedNote}>
        {selectedNote && (
          <EditNoteModal
            key={selectedNote.id}
            title="Edit note"
            description="Edit the note"
            note={selectedNote}
            handleSubmit={handleUpdateSession}
            closeModal={() => {
              setSelectedNote(null)
            }}
          />
        )}
      </Dialog>
    </section>
  )
}
