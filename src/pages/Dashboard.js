import React from 'react';
import NoteForm from '../components/NoteForm/NoteForm';
import NoteList from '../components/NoteList/NoteList';


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  deleteAllNotes(){
    
  }

  //Add instance of note to notes state
  addNote(note) {
    let notes = this.state.note.push(note);

    this.setState({notes})
  };

  //Remove instance of note from notes state
  removeNote(note) {
    let notes = this.state.notes;
    let noteIndex = note.indexOf(note);
    notes.splice(noteIndex, 1);

    this.setState({notes});

  };

  render() {
    return (
      <div className="Dashboard">
        <h1>My Dashboard</h1>
        <h2>Add Notes</h2>
        <NoteForm />
        <h2>My Notes</h2>
        <NoteList />
      </div>
    );
  };
};