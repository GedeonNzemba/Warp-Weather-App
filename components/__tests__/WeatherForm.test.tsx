import { render, screen, fireEvent } from "@testing-library/react";
import WeatherForm from "../WeatherForm";

describe("", () => {
    it("renders input and button", () => {
        render(<WeatherForm onSubmit={vi.fn()} isLoading={false} />);

        expect((screen.getByLabelText(/city/i))).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
});

it("calls onSubmit with trimmed city name", () => {
    const onSubmit = vi.fn();

    render(<WeatherForm onSubmit={onSubmit} isLoading={false} />);

    fireEvent.change(screen.getByLabelText(/city/i), {
        target: { value: " Paarl " },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(onSubmit).toHaveBeenCalledWith("Paarl");
});



