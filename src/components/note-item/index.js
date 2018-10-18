import React from 'react';

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);

    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    this.props.destroyNote(this.props.note);
  }
  render() {
    return (
      <li className="note">
        <section>
          <h3>
            <div className="title">{this.props.note.title}</div>
          </h3>
          <div className="content">{this.props.note.content}</div>
        </section>
        <input type="checkbox" />
        <button onClick={this.destroy}>Delete</button>
      </li>
    );
  };
};