import React from "react";
import DisplayTopics from "./DisplayTopics";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe("When rendering DisplayTopic and waiting for topics, ", () => {
  render(<DisplayTopics />);

  it("should display loading text to user.", () => {
    expect(screen.getByTestId('DisplayTopics-Loading')).toHaveTextContent('Loading...');
  });
});
