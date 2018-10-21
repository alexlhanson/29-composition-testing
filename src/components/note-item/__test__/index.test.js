import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';

Enzyme.configure({ adapter: new Adapter });
import NoteItem from '../index';

describe('NoteItem component', () => {

  test('should show component ability to remove note from state', () => {
    // let destroySpy = sinon.spy(NoteItem.prototype, 'destroy');
    let wrapper = Enzyme.shallow(<NoteItem />);
    wrapper.setProps({ destroyNote: sinon.fake() });
    let fakeNote = {
      title: 'note1',
      content: 'stuff',
    };
    wrapper.setState({notes: [fakeNote]});
    
    wrapper.setProps({ destroyNote: note => {
      state.notes.splice(0, 1);
    }} );
    wrapper.find('button').simulate('click');
    expect(state.notes.length).toBe(0);


  })
});