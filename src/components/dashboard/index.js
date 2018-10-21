import React from 'react';
import NoteForm from '../note-create-form/index';
import NoteList from '../note-list/index';


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.deleteAllNotes = this.deleteAllNotes(this);
    // this.editNote = this.editNote.bind(this);
    // this.cancelEdit = this.cancelEdit.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  deleteAllNotes() {

  }

  //Add instance of note to notes state
  addNote(note) {
    this.state.notes.push(note);

    this.setState({ notes: this.state.notes })
  };

  //Remove instance of note from notes state
  removeNote(note) {
    let notes = this.state.notes;
    let noteIndex = notes.indexOf(note);
    notes.splice(noteIndex, 1);

    this.setState({ notes });

  };

  // editNote(note) {
  //   const notes = this.state.notes;

  //   note.
  // }

  // cancelEdit(note) {
  
  // }

  updateNote(note, title, content) {
    let notes = this.state.notes;
    let noteIndex = notes.indexOf(note);

    notes[noteIndex].title = title;
    notes[noteIndex].content = content;

    this.setState({ notes });
  }

  render() {
    return (
      <div className="dashboard">
        <h1>My Dashboard</h1>
        <h2>Add Notes</h2>
        <NoteForm addNote={this.addNote} />
        <h2>My Notes</h2>
        <NoteList destroyNote={this.removeNote} 
                  notes={this.state.notes} 
                  // editNote={this.editNote} 
                  // cancelEdit={this.cancelEdit}
                  updateNote={this.updateNote}/>
      </div>
    );
  };
};