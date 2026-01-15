'use client';

import { ErrorMessageProps } from "@/utils/openWeatherApiResponse"

const ErrorMessage = ({ message }: ErrorMessageProps) => {

    if (!message) {
        return null;
    }
    
    return (
        <div role="alert" aria-live="assertive" className="errorMessageContainer">
            {message}
        </div>
    )
}

export default ErrorMessage