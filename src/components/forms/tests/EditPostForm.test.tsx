import { render, screen } from "@testing-library/react";
import EditPostForm from "../EditPostForm";

const PostMockup = {
  id: 1,
  title: "Madrid",
  content:
    "Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole.",
  lat: "40.41678",
  long: "-3.70379",
  image_url: "https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg",
  created_at: "2020-04-24T11:43:34.020Z",
  updated_at: "2020-04-24T11:43:34.020Z",
};

test("renders EditPostForm", () => {
  render(
    <EditPostForm
      {...PostMockup}
      onSubmit={() => {}}
      onDelete={() => {}}
      onCancel={() => {}}
    />
  );
  const postsGridElement = screen.getByTestId(`edit-post-form`);
  expect(postsGridElement).toBeInTheDocument();
});
