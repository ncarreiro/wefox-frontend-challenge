import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import AddPostCard from "../AddPostCard";

const onPostAddMockup = jest.fn(() => {});

test("renders AddPostCard", () => {
  render(<AddPostCard onPostAdd={onPostAddMockup} />);
  const addPostCardElement = screen.getByTestId(`post-add`);
  expect(addPostCardElement).toBeInTheDocument();
});

test("renders AddPostCard icon and text", () => {
  render(<AddPostCard onPostAdd={onPostAddMockup} />);
  const addPostCardIconElement = screen.getByTestId(`post-add-icon`);
  const addPostCardTextElement = screen.getByTestId(`post-add-text`);
  expect(addPostCardIconElement).toBeInTheDocument();
  expect(addPostCardTextElement).toBeInTheDocument();
});
