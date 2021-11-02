import { render, screen } from "@testing-library/react";
import ConfirmationModal from "../ConfirmationModal";

const ModalMockup = {
  open: false,
  message: "Are you sure?",
  onConfirm: () => {},
};

test("renders ConfirmationModal", () => {
  render(<ConfirmationModal modal={ModalMockup} />);
  const postsGridElement = screen.getByTestId(`confirmation-modal`);
  expect(postsGridElement).toBeInTheDocument();
});
