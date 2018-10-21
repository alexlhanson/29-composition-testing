import React from 'react';

export default class NoteFormUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      content: this.props.note.content,
    }

    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);

  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value })
  }

  onComplete(e) {
    e.preventDefault();
    let note = this.props.note;
    note.title = this.state.title;
    note.content = this.state.content;
    this.props.updateNote(this.props.note, note.title, note.content);
    this.props.close()
  }


  render() {
    return (
      <section className="update-form">
        <form id="update-note-form" onSubmit={this.onComplete}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={this.handleChange} />
          </label>
          <label>
            Content:
            <input type="text" name="content" value={this.state.content} placeholder="Note Content" onChange={this.handleChange} />
          </label>
          <button type="submit" >Update Note</button>
        </form>
        <button onClick={this.props.close}>Cancel</button>
      </section>
    )
  }
}