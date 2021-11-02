import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders PostsGrid", () => {
  render(<App />);
  const postsGridElement = screen.getByTestId("posts-grid");
  expect(postsGridElement).toBeInTheDocument();
});
