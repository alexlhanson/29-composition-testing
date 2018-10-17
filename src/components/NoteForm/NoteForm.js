import React from 'react';
import Note from '../../models/note';
export default class NoteForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);

  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value})
  }

  //use dashboard's addNote to add Note and creates note based on form input
  onComplete(e){
    e.preventDefault();

    let note = new Note(this.state.title, this.state.content);
    this.props.addNote(note);

    this.setState({title: '', content: ''});
  }

  render() {
    return (
      <div>
        <form id="create-note-form" onSubmit={this.onComplete}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleChange}/>
          </label>
          <label>
            Content:
            <input type="text" name="content" value={this.state.content} placeholder="Note Content" onChange={this.handleChange}/>
          </label>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  };
};