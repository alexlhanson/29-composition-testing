import React from 'react';
import NoteForm from '../components/NoteForm/NoteForm';
import NoteList from '../components/NoteList/NoteList';


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote() {

  };

  removeNote() {

  };

  render() {
    return (
      <div className="Dashboard">
        <h1>My Dashboard</h1>
        <h2>Add Notes</h2>
        <NoteForm/>
        <h2>My Notes</h2>
        <NoteList/>
      </div>
    );
  };
};