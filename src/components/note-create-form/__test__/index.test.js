import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import NoteForm from '../index';

describe('NoteForm component', () => {

  test('should show changes on title input', () => {
    let onChange = sinon.spy(NoteForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteForm />);
    const event = {target: {
      name: "title",
      value: "Note1"
    }};

    wrapper.find('input[name="title"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  })

  test('should show changes on content input', () => {
    let onChange = sinon.spy(NoteForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<NoteForm />);
    const event = {target: {
      name: "content",
      value: "Note1"
    }};

    wrapper.find('input[name="content"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  })

  test('should show new Note created with form input', () => {
    let onComplete = sinon.spy(NoteForm.prototype, 'onComplete');
    let wrapper = Enzyme.shallow(<NoteForm />);
    wrapper.setProps({ addNote: sinon.fake() })
    
    const event = {
      preventDefault: sinon.fake(),
      target: {
        title: "note1",
        content: "note content"
      },
    };

    wrapper.find('form').simulate('submit', event);
  })

});