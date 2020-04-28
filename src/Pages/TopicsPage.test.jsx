import React from "react";
import { render, screen, within, findByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopicsPage from './TopicsPage';

describe("When rendering TopicsPage with no topics to display, ", () => {
    beforeEach(() => { 
    render(<TopicsPage/>);
    const displayTopics = jest.fn();
    });
  
    it("should display an error message.", () => {
        const topicsPage = screen.getByTestId('TopicsPage');
      expect(screen.getByTestId('TopicsPage')).toHaveTextContent('Surveys');
    });
  });