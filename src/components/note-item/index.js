
import React from 'react';
import NoteFormUpdate from '../note-update-form';

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false, 
    }

    this.destroy = this.destroy.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick(){
    // this.props.editNote(this.props.note)
    this.state.isEditing = true;
    this.setState({isEditing: this.state.isEditing})
    ;
  }

  destroy() {
    this.props.destroyNote(this.props.note);
  }
  render() {

    let noteForm = <React.Fragment></React.Fragment>;

    if(this.state.isEditing){
      noteForm = (
        <NoteFormUpdate 
          close={() => this.setState({ isEditing: !this.state.isEditing})} 
          note={this.props.note}
          updateNote={this.props.updateNote}
        />
      )
    }

    return (
      <li className="note">
        {noteForm}
        <section onDoubleClick={this.handleDoubleClick}>
          <h3>
            <div className="title">{this.props.note.title}</div>
          </h3>
          <div className="content">{this.props.note.content}</div>
        </section>
        <button onClick={this.destroy}>Delete</button>
      </li>
    );
  };
};