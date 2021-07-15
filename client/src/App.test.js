import React from 'react';
import { render } from '@testing-library/react';
import { configure } from 'enzyme';
import AddActivity from './actionComponents/addActivity/addActivity';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('<AddActivity /> Mounted', () => {
  
  it('El formulario debe tener un h1 que diga: "Add turistic activity:"', () => {
      const { container } = render(<AddActivity />)
      const element = container.querySelectorAll('h1')[0]
      expect(element.innerHTML).toBe("Add turistic activity:");
  });

  it('El formulario debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<AddActivity />)
      const element = container.querySelectorAll('input')[0]
     expect(element.type).toBe('text');
     expect(element.name).toBe('name');
  });

  it('El formulario debe tener un input con name "difficulty" y type "text"', () => {
    const { container } = render(<AddActivity />)
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('text');
    expect(element.name).toBe('difficulty');
  });

  it('El formulario debe tener un input con name "term" y type "text"', () => {
    const { container } = render(<AddActivity />)
    const element = container.querySelectorAll('input')[2]
    expect(element.type).toBe('text');
    expect(element.name).toBe('term');
  });

  it('El formulario debe tener un input con name "season" y type "text"', () => {
    const { container } = render(<AddActivity />)
    const element = container.querySelectorAll('input')[3]
    expect(element.type).toBe('text');
    expect(element.name).toBe('season');
  });

  it('El formulario debe tener un input con name "country" y type "text"', () => {
    const { container } = render(<AddActivity />)
    const element = container.querySelectorAll('input')[4]
    expect(element.type).toBe('text');
    expect(element.name).toBe('country');
  });
});
