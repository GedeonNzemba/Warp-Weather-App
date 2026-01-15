/**
 * City input form component.
 * - Collects city name from user
 * - Validates input
 * - Triggers weather fetch on submit
*/


'use client';

import React, { FormEvent, useState } from "react";
import { WeatherFormProps } from "@/utils/openWeatherApiResponse";
import styles from "../styles/Weather.module.css"

const WeatherForm = ({ onSubmit, isLoading }: WeatherFormProps) => {
    const [city, setCity] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // Prevent full page reload
        event.preventDefault();

        // Trim input to avoid invalid requests
        const trimmedCity = city.trim();

        if (!trimmedCity) {
            return;
        }

        onSubmit(trimmedCity);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="city-input" className={styles.label}>City</label>

            <input
                id="city-input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter a city name"
                disabled={isLoading}
                className={styles.input}
            />

            <button type="submit" disabled={isLoading} className={styles.button}>
                {isLoading ? 'Searching...' : 'Get Weather'}
            </button>
        </form>
    )
}

export default WeatherForm;