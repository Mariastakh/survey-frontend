import React from "react";
import { render, screen, getAllByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DisplayTopics from "./DisplayTopics";
import SurveyButton from "../SurveyButton";

jest.mock("../SurveyButton");
SurveyButton.mockImplementation((props) => {
  return <div data-testid="surveyButton"> {props.topic} </div>;
});

describe("When rendering DisplayTopics with no topics to display, ", () => {
  beforeAll(() => {
    render(<DisplayTopics />);
  });

  it("should display an error message.", () => {
    expect(screen.getByTestId("DisplayTopics")).toHaveTextContent("error");
  });
});

describe("When rendering DisplayTopics with three topics to display, ", () => {
  beforeEach(() => {
    const topicsToDisplay = ["topic 1", "topic 2", "topic 3"];
    render(<DisplayTopics topics={topicsToDisplay} />);
  });

  it("should display a button for each topic", () => {
    const displayTopics = screen.getByTestId("DisplayTopics");
    const buttons = getAllByTestId(displayTopics, "surveyButton");

    expect(buttons.length).toBe(3);
    expect(buttons[0]).toHaveTextContent("topic 1");
    expect(buttons[1]).toHaveTextContent("topic 2");
    expect(buttons[2]).toHaveTextContent("topic 3");
  });
});
