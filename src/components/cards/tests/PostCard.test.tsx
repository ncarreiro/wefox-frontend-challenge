import { render, screen } from "@testing-library/react";
import PostCard from "../PostCard";

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

test("renders PostCard", () => {
  render(
    <PostCard onPostChange={() => {}} onPostDelete={() => {}} {...PostMockup} />
  );
  const postElement = screen.getByTestId(`post-${PostMockup.id}`);
  expect(postElement).toBeInTheDocument();
});

test("renders PostCard with title Madrid", () => {
  render(
    <PostCard onPostChange={() => {}} onPostDelete={() => {}} {...PostMockup} />
  );
  const postElement = screen.getByText("Madrid");
  expect(postElement).toBeInTheDocument();
});

test("renders PostCard with mockup content", () => {
  render(
    <PostCard onPostChange={() => {}} onPostDelete={() => {}} {...PostMockup} />
  );
  const postElement = screen.getByText(PostMockup.content);
  expect(postElement).toBeInTheDocument();
});

test("renders PostCard with mockup latitude", () => {
  render(
    <PostCard onPostChange={() => {}} onPostDelete={() => {}} {...PostMockup} />
  );
  const postElement = screen.getByText(PostMockup.lat);
  expect(postElement).toBeInTheDocument();
});

test("renders PostCard with mockup longitude", () => {
  render(
    <PostCard onPostChange={() => {}} onPostDelete={() => {}} {...PostMockup} />
  );
  const postElement = screen.getByText(PostMockup.long);
  expect(postElement).toBeInTheDocument();
});

test("renders PostCard with mockup image src", () => {
  render(
    <PostCard onPostChange={() => {}} onPostDelete={() => {}} {...PostMockup} />
  );
  const imageElement = screen.getByTestId(`post-${PostMockup.id}-image`);
  expect(imageElement).toHaveAttribute("src", PostMockup.image_url);
});
