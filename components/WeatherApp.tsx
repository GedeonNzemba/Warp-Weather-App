'use client';

import React, { useState } from "react";
import WeatherForm from "@/components/WeatherForm";
import WeatherResult from "@/components/WeatherResult";
import ErrorMessage from "@/components/ErrorMessage";
import { WeatherResponse } from "@/utils/openWeatherApiResponse";
import { useQuery } from "@tanstack/react-query";

const fetchWeather = async (city: string): Promise<WeatherResponse> => {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);

    if (!res.ok) {
        throw new Error("Failed to fetch weather");
    }

    return res.json();
}

const WeatherApp = () => {
    const [city, setCity] = useState("");

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["weather", city],
        queryFn: () => fetchWeather(city),
        enabled: !!city
    });

    return (
        <div>
            <WeatherForm onSubmit={setCity} isLoading={isLoading} />

            {isError && <ErrorMessage message={error.message} />}

            {data && !isLoading && <WeatherResult data={data} />}
        </div>
    )
}

export default WeatherApp