/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoGameCreate from './Components/Video Games/Create';
import Paginate from './Components/Paginate/Paginate';

test('VideoGameCreate form validates correctly', () => { render(<VideoGameCreate />);

// Envío el formulario sin entrada screen.getByText('CREATE').click();
// Verifico errores de validación
expect(screen.getByText('Name is required')).toBeInTheDocument();
expect(screen.getByText('Description is required')).toBeInTheDocument();

// Relleno los datos del formulario
screen.getByPlaceholderText('Videogame Name').value = 'My Game';
screen.getByPlaceholderText('Description').value = 'Game description';

// Envío el formulario de nuevo
screen.getByText('CREATE').click();

// Verifico que el formulario se envíe con éxito
expect(screen.getByText('Videogame created')).toBeInTheDocument(); });

  it('should validate the form', () => {  
    render(<VideoGameCreate />);
    screen.getByText('CREATE').click();
    expect(screen.getByText('Name is required')).toBeInTheDocument();   
    expect(screen.getByText('Description is required')).toBeInTheDocument();
  });

  it('should create a new videogame', () => {
    render(<VideoGameCreate />);
    screen.getByPlaceholderText('Videogame Name').value = 'My Videogame';
    screen.getByPlaceholderText('Description').value = 'This is my videogame';
    screen.getByText('CREATE').click();
    expect(screen.getByText('Videogame created')).toBeInTheDocument();   
  });

  describe('Paginate', () => {
    it('should render the pagination', () => {
      render(<Paginate videogamesPerPage={10} allVideoGames={100} paginado={() => {}} currPage={1} />);
      const pageNumbers = screen.getAllByClass('pag_each');
      expect(pageNumbers.length).toBe(10);
    });
  
    it('should call the paginado function when a page number is clicked', () => {
      const paginateMock = jest.fn();
      render(<Paginate videogamesPerPage={10} allVideoGames={100} paginado={paginateMock} currPage={1} />);
      const pageNumbers = screen.getAllByClass('pag_each');
      pageNumbers[0].click();
      expect(paginateMock).toBeCalledWith(1);
    });
  
    it('should render the current page number', () => {
      render(<Paginate videogamesPerPage={10} allVideoGames={100} paginado={() => {}} currPage={1} />);
      const currentPAge = screen.getByText('Current Page: 1');
      expect(currentPAge).toBeInTheDocument();
    });
  });
  