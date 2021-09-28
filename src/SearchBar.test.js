import { render, waitFor, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import React from 'react';
import data from '../public/products.json'


describe('Search Bar unit test', () => {


  test('render input with dropdown without crashing', async () => {
    const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockResolvedValue({ json: jest.fn().mockResolvedValue(data)})

    const setIsShown = jest.fn()
    const { getAllByText,debug,getByTestId,getByPlaceholderText } = render(<SearchBar setIsShown={setIsShown} isShown={true} />);
  await waitFor(() => getByTestId('resolved'))
    fireEvent.change(getByPlaceholderText('Search...'),{target: {value: 'amer'}})
  expect(getAllByText('amer')).toHaveLength(8)
  })

  test('render onblur', async () =>{
    const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockResolvedValue({ json: jest.fn().mockResolvedValue(data)})

    const setIsShown = jest.fn()
    const { getAllByText,debug,getByTestId,getByPlaceholderText } = render(<SearchBar setIsShown={setIsShown} isShown={true} />);
  await waitFor(() => getByTestId('resolved'))
    fireEvent.focusOut(getByPlaceholderText('Search...'))
  })

});
