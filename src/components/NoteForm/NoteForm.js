import React from 'react';

export default class NoteForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      title: '',
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form id="create-note-form">
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