import { render, screen } from "@testing-library/react";
import AddPostForm from "../AddPostForm";

test("renders AddPostForm", () => {
  render(<AddPostForm onSubmit={() => {}} onCancel={() => {}} />);
  const postsGridElement = screen.getByTestId(`add-post-form`);
  expect(postsGridElement).toBeInTheDocument();
});
