/**
 * Main application logic component.
 * - Manages city state
 * - Fetches weather data using React Query
 * - Handles loading, error, and success states
*/

'use client';

import React, { useState } from "react";
import WeatherForm from "@/components/WeatherForm";
import WeatherResult from "@/components/WeatherResult";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingIndicator from "./LoadingIndicator";
import { WeatherResponse } from "@/utils/openWeatherApiResponse";
import { useQuery } from "@tanstack/react-query";

// Fetch weather data from internal API route
const fetchWeather = async (city: string): Promise<WeatherResponse> => {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

    if (!res.ok) {
        throw new Error("Failed to fetch weather");
    }

    return res.json();
}

const WeatherApp = () => {
    const [city, setCity] = useState("");

    // React Query handles caching, loading, and error states
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["weather", city],
        queryFn: () => fetchWeather(city),
        enabled: !!city
    });

    return (
        <div>
            <WeatherForm onSubmit={setCity} isLoading={isLoading} />

            {/* Show loading indicator while fetching */}
            {isLoading && <LoadingIndicator />}

            {/* Show error message if request fails */}
            {isError && <ErrorMessage message={error.message} />}

            {/* Show weather results when data is available */}
            {data && !isLoading && <WeatherResult data={data} />}
        </div>
    )
}

export default WeatherApp