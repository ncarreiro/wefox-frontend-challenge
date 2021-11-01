import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Posts Table", () => {
  render(<App />);
  const postTableElement = screen.getByTestId("posts-table");
  expect(postTableElement).toBeInTheDocument();
});
