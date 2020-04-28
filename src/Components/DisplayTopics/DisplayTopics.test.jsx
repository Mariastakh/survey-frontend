import React from "react";
import { render, screen, within, findByText } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DisplayTopics from "./DisplayTopics";
import SurveyButton from "../SurveyButton";
const ActualSurveyButton = jest.requireActual('../SurveyButton');

// jest.mock('../SurveyButton', () => {
//   const SurveyButton = (props) => <div data-testid="surveybutton"> {props.topics} </div>;
// });

jest.mock('../SurveyButton', () => (props) => <mock-SurveyButton data-testid="surveybutton" {...props} />);

describe("When rendering DisplayTaopics with no topics to display, ", () => {
  beforeAll(() => { 
  render(<DisplayTopics/>);
  });

  it("should display an error message.", () => {
    expect(screen.getByTestId('DisplayTopics')).toHaveTextContent('error');
  });
});

describe("When rendering DisplayTopics with topics to display, ", () => {
  beforeEach(() => { 
  const topicsToDisplay = ['topic 1', 'topic 2', 'topic 3'];
  render(<DisplayTopics topics={topicsToDisplay}/>);
  });

  it("should display topics", () => {
    const displayTopics = screen.getByTestId('DisplayTopics');
    expect(displayTopics).toHaveTextContent(/topics/);
    });

  it("should display topics on buttons", () => {
    const displayTopics = screen.getByTestId('DisplayTopics');
    const surveyButtonsInDisplayTopics = within(displayTopics).getAllByTestId('surveybutton') 
    expect(surveyButtonsInDisplayTopics.length).toBe(3);
    });
});