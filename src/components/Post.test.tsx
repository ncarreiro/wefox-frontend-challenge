import { render, screen } from "@testing-library/react";
import Post from "./Post";

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

test("renders Post", () => {
  render(<Post {...PostMockup} />);
  const postElement = screen.getByTestId(`post-${PostMockup.id}`);
  expect(postElement).toBeInTheDocument();
});

test("renders Post with title Madrid", () => {
  render(<Post {...PostMockup} />);
  const postElement = screen.getByText("Madrid");
  expect(postElement).toBeInTheDocument();
});

test("renders Post with mockup content", () => {
  render(<Post {...PostMockup} />);
  const postElement = screen.getByText(PostMockup.content);
  expect(postElement).toBeInTheDocument();
});

test("renders Post with mockup latitude", () => {
  render(<Post {...PostMockup} />);
  const postElement = screen.getByText(PostMockup.lat);
  expect(postElement).toBeInTheDocument();
});

test("renders Post with mockup longitude", () => {
  render(<Post {...PostMockup} />);
  const postElement = screen.getByText(PostMockup.long);
  expect(postElement).toBeInTheDocument();
});

test("renders Post with mockup image src", () => {
  render(<Post {...PostMockup} />);
  const imageElement = screen.getByTestId(`post-${PostMockup.id}-image`);
  expect(imageElement).toHaveAttribute("src", PostMockup.image_url);
});
