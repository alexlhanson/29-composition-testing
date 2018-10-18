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
    let wrapper = Enzyme.shallow('<NoteForm />');
    const event = {target: {
      name: "title",
      value: "Note1"
    }};

    wrapper.find('input[name="title"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
  })

  test('should show changes on content input', () => {
    let onChange = sinon.spy(NoteForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow('<NoteForm />');
    const event = {target: {
      name: "content",
      value: "Note1"
    }};

    wrapper.find('input[name="content"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
  })

});