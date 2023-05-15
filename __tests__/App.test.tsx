import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
    it('renders welcome message', () => {
      const { getByText } = render(<App />);
      const welcomeMessage = getByText(/Welcome to my app/i);
      expect(welcomeMessage).toBeDefined();
    });

  test('deletes an item on click', () => {
    const { getByText, queryByText } = render(<App />);
    const deleteButton = getByText(/Delete/i);
    fireEvent.click(deleteButton);
    const deletedItem = queryByText(/hello/i);
    expect(deletedItem).toBeNull();
  });

  describe('App', () => {
    it('renders the title', () => {
      const { getByText } = render(<App />);
      const title = getByText(/My App Title/i);
      expect(title).toBeDefined();
    });
  
    it('renders a list of items', () => {
      const { getAllByTestId } = render(<App />);
      const itemList = getAllByTestId('item');
      expect(itemList.length).toBeGreaterThan(0);
    });
  
    it('removes an item when the "Remove" button is clicked', () => {
      const { getAllByTestId, getByText } = render(<App />);
      const itemList = getAllByTestId('item');
      const removeButton = itemList[0].querySelector('button') as HTMLButtonElement;
  
      removeButton.click();
  
      const updatedItemList = getAllByTestId('item');
      expect(updatedItemList.length).toBe(itemList.length - 1);
    });

});
});