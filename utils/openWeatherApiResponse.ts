export interface OpenWeatherApiResponse {
    name: string;
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
    };
    cod: number;
    message?: string;
}

export interface WeatherResponse {
    city: string;
    temperature: number; // Celsius
    condition: string;
    description: string;
    iconUrl: string
}

export interface ErrorMessageProps {
    message: string;
}

export interface WeatherResultProps {
    data: WeatherResponse
}

export interface WeatherFormProps {
    onSubmit: (city: string) => void;
    isLoading: boolean;
}