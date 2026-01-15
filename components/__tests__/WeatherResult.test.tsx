import { render, screen } from "@testing-library/react";
import WeatherResult from "../WeatherResult";
import { WeatherResponse } from "../../utils/openWeatherApiResponse";

const mockData: WeatherResponse = {
    city: "Paarl",
    temperature: 19,
    condition: "Clouds",
    description: "few clouds",
    iconUrl: "https://openweather.org/img/wn/02n@2x.png"
}

describe("WeatherResult", () => {
    it("displays weather data correctly", () => {
        render(<WeatherResult data={mockData} />);

        expect(screen.getByText("Paarl")).toBeInTheDocument();
        expect(screen.getByText(/19/)).toBeInTheDocument();
        expect(screen.getByText("Clouds")).toBeInTheDocument();
        expect(screen.getByText("few clouds")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", mockData.iconUrl);
    })
})