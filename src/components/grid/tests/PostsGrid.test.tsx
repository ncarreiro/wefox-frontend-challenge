import { render, screen } from "@testing-library/react";
import PostsGrid from "../PostsGrid";

test("renders PostsGrid", () => {
  render(<PostsGrid />);
  const postsGridElement = screen.getByTestId(`posts-grid`);
  expect(postsGridElement).toBeInTheDocument();
});
