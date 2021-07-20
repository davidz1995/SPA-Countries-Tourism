import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk" 

import  App  from './App';
import Pagination from './actionComponents/pagination/pagination';

import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let store
  const middlewares = []
  const mockStore = configureStore(middlewares, thunk);

  beforeEach(() => {
    store = mockStore([]);
  });



  xdescribe('Pagination', () => {

    it('El componente Pagination debe renderizar en la ruta /showAll', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find(Pagination)).toHaveLength(1);
    });

    it('El componente Pagination debe renderizar un title(h1) que diga Countries', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('h1')).toHaveLength(1);
    });

    it('El componente Pagination debe renderizar un button que filtre por population', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('button')).toHaveLength(6);
    });

    it('El componente Pagination debe renderizar un button que ordene por orden alfabetico', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('button')).toHaveLength(6);
    });

    it('El componente Pagination debe renderizar un button que ordene por orden de poblacion', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('button')).toHaveLength(6);
    });

    it('El componente Pagination debe renderizar un button que avance a la siguiente pagina', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('button')).toHaveLength(6);
    });

    it('El componente Pagination debe renderizar un button que avance a la regrese a la pagina anterior', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('button')).toHaveLength(6);
    });

    it('El componente Pagination debe renderizar un button que cargue mas paises a la lista', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('button')).toHaveLength(6);
    });

    it('El componente Pagination debe renderizar 10 paises en la pantalla principal', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[  '/showAll' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
      );
      expect(container.find('div')).toHaveLength(9);
    });
  });
});
