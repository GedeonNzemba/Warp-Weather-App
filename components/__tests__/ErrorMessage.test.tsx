import { render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
    it("renders nothing when message is empty", () => {
        const { container } = render(<ErrorMessage message="" />);
        expect(container).toBeEmptyDOMElement();
    });

    it("renders error message when provided", () => {
        render(<ErrorMessage message="Something went wrong" />);

        expect(screen.getByRole("alert")).toHaveTextContent(
            "Something went wrong"
        )
    })
});
