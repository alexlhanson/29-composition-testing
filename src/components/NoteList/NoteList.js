import React from 'react';
import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends React.Component {

  notes(){
    return this.props.notes.map((note, i) => {
      return <NoteItem note={note} key={i} destroyNote={this.props.destroyNote}/>
    });
  }

  render() {


    let content = <ul>{this.notes()}</ul>;

    return (
      <div className="note-list">
        {content}
      </div>
    );
  };
};
