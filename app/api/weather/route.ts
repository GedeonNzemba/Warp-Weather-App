/**
 * API route that proxies requests to OpenWeatherMap.
 * - Hides API key from the client
 * - Normalizes API response for frontend use
 * - Handles API and validation errors
*/

import { OpenWeatherApiResponse, WeatherResponse } from '@/utils/openWeatherApiResponse';
import { NextResponse} from 'next/server';
import type { NextRequest } from "next/server";

// Simple proxy to OpenWeatherMap weather endpoint.
// Keeps API key server-side and returns a compact payload to the frontend.
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get('city');

    if (!city) {
        return NextResponse.json(
            { error: 'City name is required.' },
            { status: 400 }
        );
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'Weather service is not configured.' },
            { status: 400 }
        );
    }

    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`, { cache: 'no-store'});
        
        const data: OpenWeatherApiResponse = await response.json();

        if(data.cod !== 200) {
            return NextResponse.json(
                { error: 'City not found. Please check the spelling and try again.' },
                { status: 404 }
            );
        }

        const result: WeatherResponse = {
            city: data.name,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            description: data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        }

        return NextResponse.json(result);

    } catch (error) {
        return NextResponse.json(
            { error: 'Unable to fetch weather data. Please try again later.' },
            { status: 500 }
        );
    }
}