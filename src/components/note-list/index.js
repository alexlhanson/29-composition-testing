import React from 'react';
import NoteItem from '../note-item/index';

export default class NoteList extends React.Component {

  notes(){
    return this.props.notes.map((note, i) => {
      return <NoteItem 
        note={note} 
        key={i} 
        destroyNote={this.props.destroyNote}
        // editNote={this.props.editNote} 
        // cancelEdit={this.props.cancelEdit}
        updateNote={this.props.updateNote}
      />
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
